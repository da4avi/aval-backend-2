const express = require('express');
const TaskApi = require('../api/task');
const Middleware = require('../middleware/validationMiddleware')

const taskApi = new TaskApi();
const middleware = new Middleware();
const router = express.Router()

router.post('/', middleware.validarTask, taskApi.criarTask);
router.get('/', middleware.validarTask, taskApi.listarTasks);
router.put('/:id', middleware.validarTaskId, taskApi.alterarTask);
router.delete('/:id', middleware.validarTaskId, taskApi.deletarTask);

module.exports = router;

