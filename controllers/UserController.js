const UserService = require('../services/UserService');
const TokenMiddleware = require('../middlewares/TokenMiddleware');

const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getOneUser(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const postUsers = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await UserService.postUsers({ displayName, email, password, image });
    const token = TokenMiddleware.createToken(newUser.id);

    res.status(201).json(token);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllUsers,
  postUsers,
  getOneUser,
};