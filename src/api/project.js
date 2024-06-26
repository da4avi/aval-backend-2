const ProjectController = require('../controller/project');

class PostApi {
    async criarPost(req, res) {
        const { titulo, conteudo, autorId } = req.body;

        try {
            const project = await PostController.criarPost(titulo, conteudo, autorId);
            return res.status(201).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarPost(req, res) {
        const { id } = req.params;
        const { titulo, conteudo, autorId } = req.body;

        try {
            const project = await PostController.alterarPost(Number(id), titulo, conteudo, autorId);
            return res.status(200).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarPost(req, res) {
        const { id } = req.params;

        try {
            await PostController.deletarPost(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarProjects(req, res) {

        try {
            const projects = await PostController.listarProjects();
            return res.status(200).send(projects);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = PostApi;