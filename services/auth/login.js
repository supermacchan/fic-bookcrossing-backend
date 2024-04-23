const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../db/userSchema');
const { AuthorizationError, NotFoundError } = require('../../helpers/errors');

require('dotenv').config();

const login = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new NotFoundError("User not found");
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        throw new AuthorizationError("Email or password is wrong");
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.SECRET_KEY, 
    { expiresIn: '2d' });

    const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $set: { token } }
    )

    return { token, updatedUser };
}

module.exports = login;