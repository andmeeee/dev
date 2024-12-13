const request = require('supertest');
const app = require('./app');

describe('GET /ping', () => {
  it('should respond with pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'pong' });
  });
});
