const app = require('../../src/index')
const request = require('supertest')

describe('Testes da API project', () => {

    it('Criar um projeto', async () => {
        const usuario = await request(app)
            .post('/users')
            .send({ nome: "davi", email: "davi", senha: "1" });

        const response = await request(app)
            .post('/projects')
            .send({ titulo: "davi", conteudo: "davi", autorId: usuario.body.id });
        
        expect(response.statusCode).toBe(201);
        expect(response.body.titulo).toEqual( "davi" );
        expect(response.body.conteudo).toEqual( "davi" );
        expect(response.body.autorId).toEqual( usuario.body.id );
    })

})
