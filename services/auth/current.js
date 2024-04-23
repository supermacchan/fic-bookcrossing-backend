const { User } = require('../../db/userSchema');
const { NotFoundError } = require('../../helpers/errors');

const checkCurrentUser = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new NotFoundError("User Not Found");
    }

    return user;
}

module.exports = checkCurrentUser;