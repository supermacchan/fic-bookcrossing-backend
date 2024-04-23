const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const checkCurrentUser = require('./current');
// const updateUser = require('./updateUser');

module.exports = {
    register,
    login,
    logout,
    checkCurrentUser
}