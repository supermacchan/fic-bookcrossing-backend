const express = require('express')
const router = express.Router()

const {
    validateBody
} = require('../../middleware/common');
const {
    registerSchema
} = require('../../helpers/validations');
const {
    registrationController,
    // loginController,
    // logoutController,
    // checkCurrentUserController,
    // updateUserController
} = require('../../controllers/authController');

router.post('/signup', validateBody(registerSchema), registrationController);

module.exports = router;