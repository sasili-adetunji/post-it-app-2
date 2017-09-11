import firebase from 'firebase';

module.exports = {
  isAuthenticated(req, res, next) {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.redirect('/login');
    }
  }, 
};
