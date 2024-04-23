const registrationController = require('./registration');
const loginController = require('./authorization');
const logoutController = require('./logout');
const checkCurrentUserController = require('./checkCurrent');
const updateUserController = require('./updateUser');

module.exports = {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
    updateUserController
}