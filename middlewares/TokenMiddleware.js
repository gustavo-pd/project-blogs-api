const jwt = require('jsonwebtoken');

const JWT_SECRET = '123456';

const createToken = (data) => {
const token = jwt.sign({ userId: data }, JWT_SECRET, { expiresIn: '60d' });
return token;
};

module.exports = {
  createToken,
};