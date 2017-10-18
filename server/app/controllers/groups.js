import firebase from 'firebase';

/**
 * controls all message routes
 * @class
 */

export default {

     /**
 * @description: This method creates group for a user
 * route POST: /group
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing the created group
 */

  group(req, res) {
    const groups = [];
    const { groupName, userName } = req.body;
    req.check('groupName', 'Please enter a valid group name').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      const user = firebase.auth().currentUser;
      if (user) {
        const groupKey = firebase.database().ref('groups/').push({
          groupName,
          groupAdmin: user.email,
        }).key;
        firebase.database().ref(`groups/${groupKey}/users/${user.uid}`)
        .set({
          userId: user.uid,
          userName,
        })
        .then(() => {
          const groupDetails = {
            groupName,
            groupId: groupKey,
          };
          groups.push(groupDetails);
        })
        .then(() => {
          firebase.database().ref(`users/${user.uid}/groups/${groupKey}/groupInfo`)
            .set({
              groupId: groupKey,
              groupName,
            });
          res.status(200).json({
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
          message: 'Please log in to post to groups',
        });
      }
    }
  },

    /**
 * @description: This method adds a particular user to a group
 * route POST: /group/:groupId/user
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response indicating a user successfully added
 */

  groupAdd(req, res) {
    const { groupId, userId, userName } = req.body;
    req.check('groupId', 'Kindly select a group first').notEmpty();
    req.check('userName', 'This User does not exist').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      const user = firebase.auth().currentUser;
      if (user) {
        firebase.database().ref(`groups/${groupId}/users/${userId}/`).set({
          userId,
          userName,
        })
        .then(() => {
          firebase.database().ref(`groups/${groupId}`).orderByKey()
            .once('value', (snap) => {
              const groupName = snap.val().groupName;
              firebase.database().ref(`users/${userId}/groups/${groupId}/groupInfo`).set({
                groupId,
                groupName,
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
          message: 'Please log in to post to groups',
        });
      }
    }
  },

    /**
 * @description: This method retrieves all users in  particular group
 * route GET: /group/:groupId/users
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing list of all users in a group
 */

  usersInGroup(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
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
          res.send({
            users,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'You are not signed in right now! ',
      });
    }
  },

    /**
 * @description: This method retrieves all groups a particular user
 * route GET: /user/groups
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing list of all groups of a particular user
 */
  userGroup(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      const groups = [];
      firebase.database().ref(`users/${user.uid}/groups/`)
        .orderByKey().once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            const group = {
              groupId: childSnapShot.val().groupInfo.groupId,
              groupName: childSnapShot.val().groupInfo.groupName,
            };
            groups.push(group);
          });
        })
        .then(() => {
          res.send({
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
