// create group routes

import express from 'express';
import firebase from 'firebase';

const app = express();

/**
   * create group
   * Route: post: '/group'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
const group = (app) => {
  app.post('/group', (req, res) => {
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
        });
    } else {
      res.status(403).json({
        message: 'Please log in to post to groups'
      });
    }
  });
};

export default group;
