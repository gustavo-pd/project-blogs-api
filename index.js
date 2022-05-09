const express = require('express');
const { Users, PostsCategories, Categories, BlogPosts } = require('./models');

const app = express();

app.get('/users', async (_req, res) => {
  try {
    const users = await BlogPosts.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
