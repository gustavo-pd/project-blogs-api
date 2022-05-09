const jwt = require('jsonwebtoken');

const JWT_SECRET = '123456';

const createToken = (data) => {
const token = jwt.sign({ userId: data }, JWT_SECRET, { expiresIn: '60d' });
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