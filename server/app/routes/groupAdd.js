// add to group route

import express from 'express';
import firebase from 'firebase';

const app = express();

/**
   * add member to a particular group
   * Route: post: '/group/:groupId/user'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
const groupAdd = (app) => {
  app.post('/group/:groupId/user', (req, res) => {
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
      res.status(403).json({
        message: 'Please log in to post to groups'
      });
    }
  });
};

export default groupAdd;

