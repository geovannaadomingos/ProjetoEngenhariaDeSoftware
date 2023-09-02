const request = require('supertest');
const app = require('../app');

describe('API de materiais de estudo', () => {
    it('Deve retornar 18 conteúdos disponíveis na plataforma', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(18);
    });

    it('Deve retornar todos os materiais disponíveis', async () => {
        const res = await request(app).get('/api/materiais');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar o material buscado, caso ele exista', async () => {
        const res = await request(app).get('/api/materiais/1');
        expect(res.statusCode).toEqual(200);
    });
});