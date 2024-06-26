const Project = require('../model/project');

class ProjectController {
    async criarProject(titulo, conteudo, autorId) {
        if (
            titulo === undefined
            || conteudo === undefined
            || autorId === undefined
        ) {
            throw new Error('Titulo, conteudo e autorId são obrigatórios');
        }

        // INSERT INTO users (nome, email, senha) VALUES (nome, email, senha);
        const project = await Project
            .create({ titulo, conteudo, autorId });

        return project;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const project = await Project.findByPk(id);

        if (!Project) {
            throw new Error('Project não encontrado');
        }

        return project;
    }

    async alterarProject(id, titulo, conteudo, autorId) {
        if (
            id === undefined
            || titulo === undefined
            || conteudo === undefined
            || autorId === undefined
        ) {
            throw new Error('Id, titulo, conteudo e autorId são obrigatórios');
        }

        const project = await this.buscarPorId(id);

        Project.titulo = titulo;
        Project.conteudo = conteudo;
        cidade.autorId = autorId;

        cidade.save();

        return project;
    }

    async deletarProject(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const project = await this.buscarPorId(id);

        Project.destroy();
    }

    async listarProjects() {
        return project.findAll();
    }
}

module.exports = new ProjectController();