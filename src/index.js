const express = require('express');
const UserApi = require('./api/user');
const ProjectApi = require('./api/project')
const TaskApi = require('./api/task')
const database = require('./config/database');
const Middleware = require('./middleware/validationMiddleware')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})

const userApi = new UserApi();
const projectApi = new ProjectApi();
const taskApi = new TaskApi();
const middleware = new Middleware();

//usuario
app.get('/users', userApi.listarUsuario);
app.post('/users', middleware.validarUsuario, userApi.criarUsuario);
app.put('/users/:id', middleware.validarUserId, userApi.alterarUsuario);
app.delete('/users/:id', middleware.validarUserId, userApi.deletarUsuario);

//project
app.get('/projects', projectApi.listarProjects);
app.post('/projects', middleware.validarProject, projectApi.criarProject);
app.put('/projects/:id', middleware.validarProjectId, projectApi.alterarProject);
app.delete('/projects/:id', middleware.validarProjectId, projectApi.deletarProject);

//task
app.get('/tasks', taskApi.listarTasks);
app.post('/tasks', middleware.validarTask, taskApi.criarTask);
app.put('/tasks/:id', middleware.validarTaskId, taskApi.alterarTask);
app.delete('/tasks/:id', middleware.validarTaskId, taskApi.deletarTask);

const PORT = 3000;

database.sync({ force: false })
    .then(() => {
        if (process.env.NODE_ENV !== 'test') {
            app.listen(PORT, () => {
              console.log(`Servidor rodando na porta ${PORT}`);
            });
          }
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

module.exports = app;