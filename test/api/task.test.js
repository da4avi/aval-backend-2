const app = require('../../src/index')
const request = require('supertest')

describe('Testes da API task', () => {

    it('Criar uma tarefa', async () => {
        const usuario = await request(app)
            .post('/users')
            .send({ nome: "davi", email: "davi", senha: "1" });

        const projeto = await request(app)
            .post('/projects')
            .send({ titulo: "davi", conteudo: "davi", autorId: usuario.body.id });

        const response = await request(app)
            .post('/tasks')
            .send({ titulo: "davi", conteudo: "davi", status: "davi", projetoId: projeto.body.id });

        expect(response.statusCode).toBe(201);
        expect(response.body.titulo).toEqual("davi");
        expect(response.body.conteudo).toEqual("davi");
        expect(response.body.status).toEqual("davi");
        expect(response.body.projetoId).toEqual(projeto.body.id);
    })

})
