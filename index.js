const express = require('express');

const app = express();

const UserController = require('./controllers/UserController');
const UserMiddleware = require('./middlewares/UserMiddleware');

app.use(express.json());

app.get('/user', UserController.getAllUsers);

app.post('/user', 
  UserMiddleware.validDisplayName,
  UserMiddleware.validEmail,
  UserMiddleware.validPassword,
  UserMiddleware.searchEmail,
  UserController.postUsers);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
