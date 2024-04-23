const { User } = require('../../db/userSchema');
const { ConflictError } = require('../../helpers/errors');

const register = async (username, email, password, secret) => {
    // check if user exists 
    const userCheck = await User.findOne({email});
    if (userCheck) {
        console.log("error")
        throw new ConflictError("Email in use");
    }

    // check secret code validity
    const secretCode = process.env.REGISTRATION_CODE;
    const fullAccess = secret.toLowerCase() === secretCode.toLowerCase();

    // assign temp avatar
    const TEMP_AVATAR = "https://res.cloudinary.com/dyd5p6vjc/image/upload/v1713876494/avatars/662784d73a402319fd3a4784_user_avatar.png"

    // create new user
    const user = new User({
        username,
        email,
        password,
        avatarURL: TEMP_AVATAR,
        fullAccess
    });

    await user.save();  
    return user;
}

module.exports = register;