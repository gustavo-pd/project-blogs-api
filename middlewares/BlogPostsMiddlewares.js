const { Categories } = require('../models');

const validTitle = async (req, res, next) => {
  const { title } = req.body;

  if (!title || title === '') {
    return res.status(400).json({
      message: '"title" is require', 
   });
  }

  next();
};

const validContent = async (req, res, next) => {
  const { content } = req.body;

  if (!content || content === '') {
    return res.status(400).json({
      message: '"content" is require', 
   });
  }

  next();
};

const categoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categoriesExists = await Categories.findAll();
  const filterCategorie = categoriesExists.filter((r) => r.id.includes(categoryIds));

  if (filterCategorie.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

const validCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds || categoryIds === '') {
    return res.status(400).json({
      message: '"categoryId" is require', 
   });
  }

  next();
};

module.exports = {
  categoryExists,
  validCategoryId,
  validContent,
  validTitle,
};