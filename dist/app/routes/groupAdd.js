'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// add to group route

var groupAdd = function groupAdd(app, db) {
  app.post('/users/:groupId/userId', function (req, res) {
    var userId = req.body.userId;
    var groupId = req.params.group;
    groupName;
    var db = firebase.database();
    firebase.auth().onAuthStateChanged(function (user) {
      // to ensure  user is in session
      if (user) {

        var groupRef = db.ref('/groups/' + groupId + '/users');
        groupRef.child(userId).set({
          Id: userId
        });

        db.ref('/users/' + newUserId + '/groups').child(groupId).set({
          id: groupId
        });
        res.send({
          message: 'User added to group'
        });
      } else {
        res.send({
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};

exports.default = groupAdd;