const express = require('express')
const router = express.Router()

const { 
    authMiddleware,
 } = require('../../middleware/auth');
const {
    validateBody
} = require('../../middleware/common');
const {
    registerSchema,
    loginSchema
} = require('../../helpers/validations');
const {
    registrationController,
    loginController,
    logoutController,
    // checkCurrentUserController,
    // updateUserController
} = require('../../controllers/authController');

router.post('/signup', validateBody(registerSchema), registrationController);
router.post('/login', validateBody(loginSchema), loginController);
router.get('/logout', authMiddleware, logoutController);


module.exports = router;