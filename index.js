const express = require('express');

const app = express();

const UserController = require('./controllers/UserController');
const UserMiddleware = require('./middlewares/UserMiddleware');
const LoginController = require('./controllers/LoginController');
const LoginMiddleware = require('./middlewares/LoginMiddleware');
const CategoriesController = require('./controllers/CategoriesController');
const CategoriesMiddleware = require('./middlewares/CategoriesMiddleware');
const BlogPostsController = require('./controllers/BlogPostsControllers');
const AuthVerificationMiddleware = require('./middlewares/AuthVerificationMiddleware');
const BlogPostsMiddleware = require('./middlewares/BlogPostsMiddlewares');

app.use(express.json());

app.get('/user',
  AuthVerificationMiddleware.verifyToken,
  UserController.getAllUsers);

app.get('/user/:id',
  AuthVerificationMiddleware.verifyToken,
  UserController.getOneUser);

app.post('/user', 
  UserMiddleware.validDisplayName,
  UserMiddleware.validEmail,
  UserMiddleware.validPassword,
  UserMiddleware.searchEmail,
  UserController.postUsers);

app.post('/login',
  LoginMiddleware.validEmail,
  LoginMiddleware.validPassword,
  LoginController.postLogin);

app.get('/categories',
  AuthVerificationMiddleware.verifyToken,
  CategoriesController.getAllCategories);

app.post('/categories',
  CategoriesMiddleware.validName,
  AuthVerificationMiddleware.verifyToken,
  CategoriesController.postCategories);

app.get('/post',
  AuthVerificationMiddleware.verifyToken,
  BlogPostsController.getAllPosts);

app.get('/post/:id',
  AuthVerificationMiddleware.verifyToken,
  BlogPostsController.getOnePost);

app.post('/post',
  BlogPostsMiddleware.validTitle,
  BlogPostsMiddleware.validContent,
  BlogPostsMiddleware.validCategoryId,
  AuthVerificationMiddleware.verifyToken,
  BlogPostsController.postPosts);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
