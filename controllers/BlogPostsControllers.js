const BlogPostsService = require('../services/BlogPostsService');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await BlogPostsService.getAllPosts();

    res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPostsService.getOnePost(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const postPosts = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const newPost = await BlogPostsService.postPosts({ title, content, categoryIds });

    res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllPosts,
  postPosts,
  getOnePost,
};