const { User } = require('../../db/userSchema');
const { NotFoundError } = require('../../helpers/errors');

const updateUser = async (userId, newData) => {
    const user = await User.findOneAndUpdate(
        {_id: userId },
        {$set: {
            ...newData
        }},
        {
            returnDocument: 'after',
            returnNewDocument: true
        })
        .select({__v: 0});

    if (!user) {
        throw new NotFoundError('User Not found');
    }

    return user;
}

module.exports = updateUser;