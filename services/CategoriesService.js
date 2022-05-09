const { Categories } = require('../models');

const getAllCategories = async () => {
  const categoriesList = await Categories.findAll();
  return categoriesList;
};

const postCategories = async ({ name }) => {
  const newCategorie = await Categories.create({ name });
  return newCategorie;
};

module.exports = {
  getAllCategories,
  postCategories,
};