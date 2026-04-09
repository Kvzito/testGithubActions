const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    test('GET / should return hello world', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});