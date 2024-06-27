const app = require('../../src/index')
const request = require('supertest')

describe('Testes da API user', () => {

    it('Criar um usuario', async () => {
        const response = await request(app)
            .post('/users')
            .send({ nome: "davi", email: "davi", senha: "1" });

        console.log(response.body);
        expect(response.statusCode).toBe(201);
        expect(response.body.nome).toEqual( "davi" );
        expect(response.body.email).toEqual( "davi" );
        expect(response.body.senha).toEqual( "1" );
    })

})
