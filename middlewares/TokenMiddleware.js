const jwt = require('jsonwebtoken');

const JWT_SECRET = '123456';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ userId: data }, JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = (token) => {
  try {
    const verifyToken = jwt.verify(token, JWT_SECRET);
    
    return verifyToken;
  } catch (err) {
      return false;
    }
}; 

module.exports = {
  createToken,
  validateToken,
};