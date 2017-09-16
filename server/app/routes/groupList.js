import express from 'express';
import firebase from 'firebase';

const app = express();
/**
   * get groups of a particular user
   * Route: get: '/group'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
const groupList = (app) => {
  app.get('/group', (req, res) => {
    const user = firebase.auth().currentUser;
    if (user) {
      const groupRef = firebase.database().ref(`users/${user.uid}/groups/`);
      const groups = [];
      groupRef.orderByKey().once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const group = {
            groupId: childSnapShot.key,
            groupname: childSnapShot.val().groupname
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
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(403).json({
        message: 'Please log in to see a list of your groups'
      });
    }
  });
};

export default groupList;

