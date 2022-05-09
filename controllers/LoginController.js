const LoginService = require('../services/LoginService');
const TokenMiddleware = require('../middlewares/TokenMiddleware');

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await LoginService.postLogin(email, password);

    if (!checkUser) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = TokenMiddleware.createToken(checkUser.id);

    res.status(200).json(token);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  postLogin,
};