const { Users } = require('../models');

const getAllUsers = async () => {
  const users = await Users.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getOneUser = async (id) => {
  const user = await Users.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

const postUsers = async ({ displayName, email, password, image }) => {
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  getAllUsers,
  postUsers,
  getOneUser,
};