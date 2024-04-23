const registrationController = require('./registration');
const loginController = require('./authorization');
const logoutController = require('./logout');
// const checkCurrentUserController = require('./checkCurrentUserController');
// const updateUserController = require('./updateUserController');

module.exports = {
    registrationController,
    loginController,
    logoutController,
    // checkCurrentUserController,
    // updateUserController
}