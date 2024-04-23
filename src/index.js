const express = require('express');
const UserApi = require('./api/user');
const PostApi = require('./api/post')
const database = require('./config/database');
const Middleware = require('./middleware/validationMiddleware')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})

const userApi = new UserApi();
const postApi = new PostApi();
const middleware = new Middleware();

//usuario
app.get('/users', userApi.listarUsuario);
app.post('/users', middleware.validarUsuario, userApi.criarUsuario);
app.put('/users/:id', middleware.validarUserId, userApi.alterarUsuario);
app.delete('/users/:id', middleware.validarUserId, userApi.deletarUsuario);

//posts
app.get('/posts', postApi.listarPosts);
app.post('/posts', middleware.validarPost, postApi.criarPost);
app.put('/posts/:id', middleware.validarPostId, postApi.alterarPost);
app.delete('/posts/:id', middleware.validarPostId, postApi.deletarPost);

database.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

