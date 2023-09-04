const request = require('supertest');
const app = require('../app');

describe('API de materiais de estudo', () => {
    it('Deve retornar 18 materiais disponíveis ao entrar na homepage', async () => {
        // Given (Dado)
        // Nenhum estado inicial específico necessário

        // When (Quando)
        const res = await request(app).get('/api');

        // Then (Então)
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(18);
    });

    it('Deve retornar todos os materiais disponíveis, de acordo com os filtros aplicados', async () => {
        // Given (Dado)
        // Suponha que exista algum conteúdo disponível e que filtros sejam definidos
        const filters = {
            code: 'IF975',
            teacher: 'Kelvin Lopes',
            createdAt: '2023-09-04',
            semester: '2023A'
        };

        // When (Quando)
        const res = await request(app)
            .get('/api/materiais')
            .query(filters);

        // Then (Então)
        if (res.body.length > 0) {
            expect(res.statusCode).toEqual(200);
        } else {
            expect(res.statusCode).toEqual(404);
        }
    });

    it('Deve retornar o material buscado, caso ele exista, ou o código de erro', async () => {
        // Given (Dado)
        const materialId = 1;

        // When (Quando)
        const res = await request(app).get(`/api/materiais/${materialId}`);

        // Then (Então)
        if (res.statusCode === 200) {
            expect(res.statusCode).toEqual(200);
        } else {
            expect(res.statusCode).toEqual(404);
        }
    });

    it('Deve retornar as informações do conteúdo após o upload', async () => {
        // Given (Dado)
        const materialData = {
            title: 'Protocolo HTTP',
            subject: 'Protocolo HTTP',
            code: 'IF975',
            teacher: 'Kelvin Lopes',
            author: 'meom'
        };

        // When (Quando)
        const res = await request(app)
            .post('/api/materiais')
            .send(materialData)
            .attach('file', '/api/materiais/upload/arquivo.png');
        
        // Then (Então)
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('subject');
        expect(res.body).toHaveProperty('code');
        expect(res.body).toHaveProperty('teacher');
        expect(res.body).toHaveProperty('author');
    });

    it('Deve retornar uma mensagem de sucesso da deleção ou código de erro', async () => {
        // Given (Dado)
        const materialId = 1;

        // When (Quando)
        const res = await request(app).delete(`/api/materiais/${materialId}`);
        
        // Then (Então)
        if (res.statusCode === 200) {
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message');
        } else {
            expect(res.statusCode).toEqual(404);
        }
    });
});