const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ userId: data }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = (token) => {
  console.log('token', token);
  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
    console.log('validate', verifyToken);
    return verifyToken;
  } catch (err) {
      return false;
    }
}; 

module.exports = {
  createToken,
  validateToken,
};