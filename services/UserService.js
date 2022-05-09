const { Users } = require('../models');

const getAllUsers = async () => {
  const users = await Users.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const postUsers = async ({ displayName, email, password, image }) => {
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  getAllUsers,
  postUsers,
};