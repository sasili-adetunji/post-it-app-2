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
    const { groupName, userName } = req.body;
    firebase.auth().onAuthStateChanged((user) => {
      const groupKey = firebase.database().ref('groups/').push({
        groupName,
        groupAdmin: user.email,
      }).key;
      const groupRef = firebase.database().ref(`groups/${groupKey}/users/${user.uid}`)
          .set({
            userId: user.uid,
            userName
          });
      const userRef = firebase.database().ref(`users/${user.uid}/groups/${groupKey}/groupInfo`)
      .set({
        groupId: groupKey,
        groupName
      });
      res.json({
        message: 'New Group Successfully Created',
        group: groupName
      })
    .catch((error) => {
    });
    });
  });
};

export default group;
