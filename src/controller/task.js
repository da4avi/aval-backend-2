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

        if (!Task) {
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

        Task.titulo = titulo;
        Task.conteudo = conteudo;
        Task.status = status;
        cidade.projetoId = projetoId;

        cidade.save();

        return task;
    }

    async deletarTask(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const tasl = await this.buscarPorId(id);

        Task.destroy();
    }

    async listarTasks() {
        return task.findAll();
    }
}

module.exports = new TaskController();