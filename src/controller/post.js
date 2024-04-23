const Post = require('../model/post');

class PostController {
    async criarPost(titulo, conteudo, autorId) {
        if (
            titulo === undefined
            || conteudo === undefined
            || autorId === undefined
        ) {
            throw new Error('Titulo, conteudo e autorId são obrigatórios');
        }

        // INSERT INTO users (nome, email, senha) VALUES (nome, email, senha);
        const post = await Post
            .create({ titulo, conteudo, autorId });

        return post;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const post = await Post.findByPk(id);

        if (!post) {
            throw new Error('Post não encontrado');
        }

        return post;
    }

    async alterarPost(id, titulo, conteudo, autorId) {
        if (
            id === undefined
            || titulo === undefined
            || conteudo === undefined
            || autorId === undefined
        ) {
            throw new Error('Id, titulo, conteudo e autorId são obrigatórios');
        }

        const post = await this.buscarPorId(id);

        post.titulo = titulo;
        post.conteudo = conteudo;
        cidade.autorId = autorId;

        cidade.save();

        return post;
    }

    async deletarPost(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const post = await this.buscarPorId(id);

        post.destroy();
    }

    async listarPosts() {
        return Post.findAll();
    }
}

module.exports = new PostController();