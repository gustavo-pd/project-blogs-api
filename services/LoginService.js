const { Users } = require('../models');

const postLogin = async (email, password) => {
  const user = await Users.findOne({
    where: { email, password },
  });
  return user;
};

module.exports = {
  postLogin,
};