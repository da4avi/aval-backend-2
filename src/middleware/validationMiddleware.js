const UserController = require('../controller/user');
const PostController = require('../controller/post');

class Middleware {
    
    async validarUsuario(req, res, next) {
        const {nome, email, senha} = req.body;
        if (!nome || !email || !senha) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof nome !== 'string' || typeof email !== 'string' || typeof senha !== 'string') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        next();
    }

    async validarPost(req, res, next) {
        const {titulo, conteudo, autorId} = req.body;
        if (!titulo || !conteudo || !autorId) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof titulo !== 'string' || typeof conteudo !== 'string' || typeof autorId !== 'number') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } 
        const userId = await UserController.buscarPorId(autorId);
        if(!userId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarUserId(req, res, next) {
        const {id} = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        const userId= await UserController.buscarPorId(id);
        if(!userId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarPostId(req, res, next) {
        const {id} = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        const postId= await PostController.buscarPorId(id);
        if(!postId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }
}

module.exports = Middleware;