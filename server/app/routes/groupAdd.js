// add to group route

const groupAdd = (app, db) => {
  app.post('/users/:groupId/userId', (req, res) => {
    let userId = req.body.userId;
    let groupId =req.params.group;
      groupName;
    const db = firebase.database();
    firebase.auth().onAuthStateChanged((user) => {
      // to ensure  user is in session
      if (user) {

        const groupRef = db.ref(`/groups/${groupId}/users`);
        groupRef.child(userId).set({
          Id: userId,
        });


        db.ref(`/users/${newUserId}/groups`).child(groupId).set({
          id: groupId,
        });
        res.send({
          message: 'User added to group',
        });
      } else {
        res.send({
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};


export default groupAdd;