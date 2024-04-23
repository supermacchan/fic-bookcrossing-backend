const jwt = require('jsonwebtoken');

const { AuthorizationError } = require('../../helpers/errors');
const { User } = require('../../db/userSchema');

const authMiddleware = async (req, res, next) => {
  // eslint-disable-next-line dot-notation
  if (!req.headers['authorization']) {
    next(new AuthorizationError('Not Authorized'));
    return;
  }

  // eslint-disable-next-line dot-notation
  const token = req.headers['authorization'];

  if (!token) {
    next(new AuthorizationError('Not Authorized'));
    return;
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    const checkedUser = await User.findById(user._id);

    if (!checkedUser) {
      next(new AuthorizationError('Not Authorized'));
    }

    if (checkedUser.token !== token) {
      next(new AuthorizationError('Not Authorized'));
    }

    req.user = checkedUser;
    next();
  } catch (err) {
    next(new AuthorizationError(err.message));
  }
};

module.exports = { authMiddleware };