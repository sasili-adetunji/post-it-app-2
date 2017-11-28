

  /**
   * @description: function that validates the sign up route
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Function} next callback function
   *
   * @return {Object} response containing the error message
   */
  export const signup = (req, res, next) => {
    req.check('phoneNumber', 'phone number is required').notEmpty().matches(/\d/);
    req.check('password', 'Password is required').notEmpty();
    req.check('userName', 'Username is required').notEmpty().matches(/\w/);
    req.check('password', 'Password must be between 6 and 50 characters')
    .isLength(6, 50);
    req.check('email', 'Email Address is Required').notEmpty();
    req.check('email', 'Please put a valid email').isEmail();
    req.check('phoneNumber', 'Enter a valid phone Number')
    .isMobilePhone('en-NG');
    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      next();
    }
  };

    /**
 * @description: function that validates the login route
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next callback function
 *
 * @return {Object} response containing the error message
 */
  export const signin = (req, res, next) => {
    req.check('email', 'The email or password you entered is incorrect').notEmpty();
    req.check('password', 'The email or password you entered is incorrect').notEmpty();
    req.check('email', 'The email or password you entered is incorrect')
    .isEmail();
    req.check('password', 'The email or password you entered is incorrect')
    .isLength(6, 50);

    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      next();
    }
  };

      /**
 * @description: validates the lreset password route
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next callback function
 *
 * @return {Object} response containing the error message
 */
  export const resetPassword = (req, res, next) => {
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Please put a valid email').isEmail();

    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      next();
    }
  };


/**
 * @description: function that validates the create group route
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next callback function
 *
 * @return {Object} response containing the error message
 */
  export const createGroup = (req, res, next) => {
    req.check('groupName', 'Please enter a valid group name')
     .notEmpty().matches(/\w/);
    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      next();
    }
  };


/**
 * @description: function validates the add user to group route
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next callback function
 *
 * @return {Object} response containing the error message
 */
  export const addMemberToGroup = (req, res, next) => {
    req.check('groupId', 'Group Id is required').notEmpty();
    req.check('userId', 'User Id is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      next();
    }
  };


/**
 * @description: function that validates the create message route
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next callback function
 *
 * @return {Object} response containing the error message
 */
  export const postMessage = (req, res, next) => {
    req.check('groupId', 'Group Id is required').notEmpty();
    req.check('message', 'Please enter a valid message')
    .notEmpty().matches(/\w/);
    req.check('priorityLevel', 'Priority level is required').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors[0].msg;
      res.status(400).json({ errorMessage });
    } else {
      next();
    }
  };
