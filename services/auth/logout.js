const { User } = require('../../db/userSchema');
const { AuthorizationError } = require('../../helpers/errors');

const logout = async (userId) => {
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: { token: null } }
    )

    if (!user) {
        throw new AuthorizationError("Not Authorized");
    }

    return user;
}

module.exports = logout;