import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Create user', () => {
  it('it should create a user with valid credentials', async () => {
    const response = await
    request(app)
      .post('/api/v1/user')
      .send({
        email: 'email@teste.com',
        password: '123456'
      })
    expect(response.status).toBe(201)
  })
})
