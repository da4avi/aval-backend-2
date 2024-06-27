const Task = require('../model/task');

class TaskController {
    async criarTask(titulo, conteudo, status, projetoId) {
        if (
            titulo === undefined
            || conteudo === undefined
            || status === undefined
            || projetoId === undefined
        ) {
            throw new Error('Titulo, conteudo, status e projetoId são obrigatórios');
        }

        const task = await Task
            .create({ titulo, conteudo, status, projetoId });

        return task;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const task = await Task.findByPk(id);

        if (!task) {
            throw new Error('Task não encontrada');
        }

        return task;
    }

    async alterarTask(id, titulo, conteudo, status, projetoId) {
        if (
            titulo === undefined
            || conteudo === undefined
            || status === undefined
            || projetoId === undefined
        ) {
            throw new Error('Id, titulo, conteudo, status e projetoId são obrigatórios');
        }

        const task = await this.buscarPorId(id);

        task.titulo = titulo;
        task.conteudo = conteudo;
        task.status = status;
        task.projetoId = projetoId;

        task.save();

        return task;
    }

    async deletarTask(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const task = await this.buscarPorId(id);

        task.destroy();
    }

    async listarTasks() {
        return Task.findAll();
    }
}

module.exports = new TaskController();