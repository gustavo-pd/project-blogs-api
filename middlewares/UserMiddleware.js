const { Users } = require('../models');

const validDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long', 
   });
  }

  next();
};

const validPassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6 || typeof password !== 'string') {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const validEmail = async (req, res, next) => {
  const { email } = req.body;

  const regex = /\S+@\S+\.\S+/; // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  if (!email || email === '') {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!(regex.test(email))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const searchEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailAlreadyExists = await Users.findAll();
  const filterEmail = emailAlreadyExists.filter((r) => r.email.includes(email));

  if (filterEmail.length !== 0) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validDisplayName,
  validPassword,
  validEmail,
  searchEmail,
};