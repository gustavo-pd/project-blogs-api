const { BlogPosts, Users, Categories } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getOnePost = async (id) => {
  const post = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const postPosts = async ({ title, content, categoryIds }) => {
  const newPost = await BlogPosts.create({ title, content, categoryIds });
  return newPost;
};

module.exports = {
  getAllPosts,
  getOnePost,
  postPosts,
};