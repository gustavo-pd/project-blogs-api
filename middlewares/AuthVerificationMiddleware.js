const TokenMiddleware = require('./TokenMiddleware');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const validate = TokenMiddleware.validateToken(authorization);
  if (!validate) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  verifyToken,
}; 