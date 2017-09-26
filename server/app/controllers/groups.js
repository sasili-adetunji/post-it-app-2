import firebase from 'firebase';

export default {
  group(req, res) {
    const groups = [];
    const { groupName, userName } = req.body;
    const user = firebase.auth().currentUser;
    if (user) {
      const groupKey = firebase.database().ref('groups/').push({
        groupName,
        groupAdmin: user.email,
      }).key;
      const groupRef = firebase.database().ref(`groups/${groupKey}/users/${user.uid}`)
        .set({
          userId: user.uid,
          userName
        })
        .then(() => {
          const groupDetails = {
            groupName,
            groupId: groupKey
          };
          groups.push(groupDetails);
        })
        .then(() => {
          const userRef = firebase.database().ref(`users/${user.uid}/groups/${groupKey}/groupInfo`)
            .set({
              groupId: groupKey,
              groupName
            });
          res.status(200).json({
            message: 'New Group Successfully Created',
            groups
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'Error occurred',
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to post to groups'
      });
    }
  },
  groupAdd(req, res) {
    const { groupId, userId, userName } = req.body;
    const user = firebase.auth().currentUser;
    if (user) {
      const groupRef = firebase.database().ref(`groups/${groupId}/users/${userId}/`).set({
        userId,
        userName
      })
        .then(() => {
          const groupNames = firebase.database().ref(`groups/${groupId}`).orderByKey()
            .once('value', (snap) => {
              const groupName = snap.val().groupName;
              const userRef = firebase.database().ref(`users/${userId}/groups/${groupId}/groupInfo`).set({
                groupId,
                groupName
              });
            });
          res.status(200).json({
            message: 'User successfully added',
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to post to groups'
      });
    }
  },
  usersInGroup(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      // create an empty array to hold the users
      const users = [];
      const userRef = firebase.database().ref(`/groups/${req.params.groupId}/users`)
        .once('value', (msg) => {
          msg.forEach((snapshot) => {
            const userDetails = {
              userId: snapshot.val().userId,
              userName: snapshot.val().userName,
            };
            users.push(userDetails);
          });
        })
        .then(() => {
          res.send({
            users
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'Error occurred',
          });
        });
    } else {
      res.status(401).json({
        message: 'You are not signed in right now! '
      });
    }
  },
  userGroup(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      const groups = [];
      firebase.database().ref(`users/${user.uid}/groups/`)
        .orderByKey().once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            const group = {
              groupId: childSnapShot.val().groupInfo.groupId,
              groupName: childSnapShot.val().groupInfo.groupName
            };
            groups.push(group);
          });
        })
        .then(() => {
          res.send({
            groups
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).send({
        message: 'You are not signed in right now! '
      });
    }
  },
};
