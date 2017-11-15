import firebase from 'firebase';

export default {
  /**
 * @description: creates broadcast group
 * Route: POST: /group
 *
 * @param {any} req incoming request from the client
 * @param {any} res response sent back to client
 *
 * @returns {response} response containing the created group
 */
  createGroup(req, res) {
    const groups = [];
    const { groupName } = req.body;
    const userData = req.decoded.data;
    if (userData) {
      const groupKey = firebase.database().ref('groups/').push({
        groupName,
        groupAdmin: userData.email,
      }).key;
      firebase.database().ref(`groups/${groupKey}/users/${userData.uid}`)
        .set({
          userId: userData.uid,
          userName: userData.userName,
        })
        .then(() => {
          const groupDetails = {
            groupName,
            groupId: groupKey,
          };
          groups.push(groupDetails);
        })
        .then(() => {
          firebase.database().ref(`users/${userData.uid}/groups/`)
          .child(`${groupKey}/groupInfo`)
            .set({
              groupId: groupKey,
              groupName,
            });
          res.status(201).json({
            message: 'New Group Successfully Created',
            groups,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to create groups',
      });
    }
  },

  /**
   * @description: adds a particular user to a group
   * route POST: /group/:groupId/user
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response indicating a user successfully added
   */
  addMemberToGroup(req, res) {
    const { groupId, userId, userName } = req.body;
    const user = {
      userId,
      userName
    };
    firebase.database().ref(`groups/${groupId}/users/${userId}/`)
      .orderByKey().once('value', (snapshot) => {
        if (snapshot.exists()) {
          res.status(409).json({
            message: 'The user already exist in the group'
          });
        } else {
          firebase.database().ref(`groups/${groupId}/users/${userId}/`).set({
            userId,
            userName,
          })
        .then(() => {
          firebase.database().ref(`groups/${groupId}`).orderByKey()
            .once('value', (snap) => {
              const groupName = snap.val().groupName;
              firebase.database()
              .ref(`users/${userId}/groups/${groupId}/groupInfo`).set({
                groupId,
                groupName,
              });
            });
          res.status(201).json({
            message: 'User successfully added',
            user
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: `Error occurred ${error.message}`,
          });
        });
        }
      });
  },
/**
 * @description: fetches all users in  particular group
 * route GET: /group/:groupId/users
 *
 * @param {any} req incoming request from the client
 * @param {any} res response sent back to client
 *
 * @returns {response} response containing list of all users in a group
*/
  getUsersInGroups(req, res) {
      // create an empty array to hold the users
    const users = [];
    firebase.database().ref(`/groups/${req.params.groupId}/users`)
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
          res.status(200).json({
            users,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
  },

/**
 * @description: fetches retrieves all groups a particular user
 * route GET: /user/groups
 *
 * @param {Object} req request object
 * @param {Object} res response object
 *
 * @return {Object} response containing list of all groups of a particular user
*/
  getUserGroups(req, res) {
    const userData = req.decoded.data;
    if (userData) {
      const groups = [];
      firebase.database().ref(`users/${userData.uid}/groups/`)
        .orderByKey().once('value', (snapshot) => {
          // if (!snapshot.exists()) {
          //   res.status(404).json({
          //     message: 'There is no groups found for the user'
          //   });
          // } else {
          snapshot.forEach((childSnapShot) => {
            const group = {
              groupId: childSnapShot.val().groupInfo.groupId,
              groupName: childSnapShot.val().groupInfo.groupName,
            };
            groups.push(group);
          });
          // }
        })
        .then(() => {
          res.status(200).json({
            groups,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).send({
        message: 'You are not signed in right now! ',
      });
    }
  },
};
