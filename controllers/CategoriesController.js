const CategoriesService = require('../services/CategoriesService');

const getAllCategories = async (_req, res) => {
  try {
    const categories = await CategoriesService.getAllCategories();

    res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const postCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategorie = await CategoriesService.postCategories({ name });

    res.status(201).json(newCategorie);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllCategories,
  postCategories,
};