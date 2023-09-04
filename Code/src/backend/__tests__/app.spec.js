const request = require('supertest');
const app = require('../app');

describe('API de materiais de estudo', () => {
    it('Deve retornar 18 materiais disponíveis ao entrar na homepage', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(18);
    });

    it('Deve retornar todos os materiais disponíveis, de acordo com os filtros aplicados', async () => {
        const res = await request(app).get('/api/materiais');

        const filters = [req.query.code, req.query.teacher, req.query.cratedAt, req.query.semester]
        filters.forEach(category => {
            if (category) res = res.filter(content => content.category === category);
        });

        if (res.length > 0) expect(res.statusCode).toEqual(200)
        else expect(res.statusCode).toEqual(404);
    });

    it('Deve retornar o material buscado, caso ele exista, ou o código de erro', async () => {
        const res = await request(app).get('/api/materiais/1');
        if (res) expect(res.statusCode).toEqual(200)
        else expect(res.statusCode).toEqual(404);
    });

    it('Deve retornar as informações do conteúdo, o qual foi realizado o upload', async () => {
        const res = await request(app)
            .post('/api/materiais')
            .send({
                title: 'Protocolo HTTP',
                subject: 'Protocolo HTTP',
                code: 'IF975',
                teacher: 'Kelvin Lopes',
                author: 'meom'
            })
            .attach('file', '/api/materiais/upload/arquivo.png');
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('subject');
        expect(res.body).toHaveProperty('code');
        expect(res.body).toHaveProperty('teacher');
        expect(res.body).toHaveProperty('author');
    });

    it('Retornar uma mensagem do sucesso da deleção ou código de erro caso o conteúdo não exista', async () => {
        const res = await request(app).delete('/api/materiais/1');
        if (res) {
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message');
        }
        else expect(res.statusCode).toEqual(404);
    });
});