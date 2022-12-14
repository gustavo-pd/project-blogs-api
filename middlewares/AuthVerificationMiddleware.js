const TokenMiddleware = require('./TokenMiddleware');

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log('middleware', req.headers);
  const validToken = TokenMiddleware.validateToken(authorization);

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  if (!validToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  verifyToken,
};