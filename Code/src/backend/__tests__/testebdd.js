const request = require('supertest');
const app = require('../app');
const nock = require('nock');

const API_URL = 'http://localhost:3000'; 

// Função de configuração de mock para a rota '/api'
function configureApiMock(path, method, statusCode, responseBody) {
    nock(API_URL)
        [method](path)
        .reply(statusCode, responseBody);
}

describe('API de materiais de estudo', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('Deve retornar no máximo 5 materiais ao entrar na homepage', async () => {
        //Given
        const mockResponse = [
                    {codigo: IF975, title: 'Redes de computadores',
                    codigo: IF975, title: 'Redes de computadores',
                    codigo: IF975, title: 'Redes de computadores',
                    codigo: IF975, title: 'Redes de computadores',
                    codigo: IF975, title: 'Redes de computadores'
                }
            ];
        configureApiMock('/api', 'get', 200, mockResponse);

         // When 
        const res = await request(app).get('/api');

        // Then
        if (res.body.length > 0) {
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBeLessThanOrEqual(18);
        } else {
            expect(res.body).toHaveProperty(200);
            // se a reposta tiver vazia, não há materias,
            // verificar se existe uma mensagem de erro
            expect(res.body).toHaveProperty('message');

        }
    });


    it('Deve retornar mensagem de erro 400 em caso de solicitação inválida', async () => {
        // Quando (Quando)
        const res = await request(app).get('/api/materiais');
    
        // Then (Então)
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', 'Solicitação inválida');
    });

    });

    it('Deve retornar todos os materiais disponíveis, de acordo com os filtros aplicados', async () => {
        // Given (Dado)
        const filters = {
            code: 'IF975',
            teacher: 'Kelvin Lopes',
            createdAt: '2023-09-04',
            semester: '2023A'
        };

        // Configurar o mock para a rota '/api/materiais' com os filtros
        const mockResponse = [
              {
                    code: 'IF975',
                    teacher: 'Kelvin Lopes',
                    createdAt: '2023-09-04',
                    semester: '2023A',
                },
            ];
        configureApiMock('/api', 'get', 200, mockResponse);


        // When 
        const res = await request(app).get('/api/materiais').query(filters);

        // Then 
        res.body.forEach(content => {
            if (filters.code) expect(content).toHaveProperty('code', filters.code);
            if (filters.teacher) expect(content).toHaveProperty('teacher', filters.teacher);
            if (filters.createdAt) expect(content).toHaveProperty('createdAt', filters.createdAt);
            if (filters.semester) expect(content).toHaveProperty('semester', filters.semester);
        });

            expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar código de erro 404 quando não há materiais correspondentes aos filtros', async () => {
        // Given (
        const filters = {
            code: 'IF975',
            teacher: 'Kelvin Lopes',
            createdAt: '2023-09-04',
            semester: '2023A'
        };
    
        // Configurar o mock para a rota '/api/materiais' com os filtros retornando um array vazio
        configureApiMock('/api/materiais', 'get', 200, []);
    
        // When 
        const res = await request(app).get('/api/materiais').query(filters);
    
        // Then 
        expect(res.statusCode).toEqual(404);
    });

    it('Deve retornar o material buscado, caso ele exista', async () => {
        // Given (Dado)

        const cod = IF975;
        const mockResponse = [
            {
                codigo: cod,
                title: 'Protocolo HTTP',
                subject: 'HTTPS',
                teacher: 'Kelvin Lopes',
                author: 'meom',
             },
           ]; 

        configureApiMock(`/api/materiais/${cod}`, 'get', 200, mockResponse);

        // When
        const res = await request(app).get(`/api/materiais/${cod}`);

        // Then
        res.statusCode === 200
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Protocolo HTTP');
        expect(res.body).toHaveProperty('subject', 'HTTPS');
        expect(res.body).toHaveProperty('codigo', cod);
        expect(res.body).toHaveProperty('teacher', 'Kelvin Lopes');
        expect(res.body).toHaveProperty('author', 'meom');
    });

    it('Deve retornar código de erro 404 para material inexistente', async () => {
        // Given 
        const codigo = HSL1ND0; // codigo que nao existe
    
        configureApiMock(`/api/materiais/${codigo}`, 'get', 404, mockResponse);
    
        // When 
        const res = await request(app).get(`/api/materiais/${codigo}`);
    
        // Then (Então)
        expect(res.statusCode).toEqual(404);
    });

