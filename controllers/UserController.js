const UserService = require('../services/UserService');

const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const postUsers = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await UserService.postUsers({ displayName, email, password, image });

    res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllUsers,
  postUsers,
};