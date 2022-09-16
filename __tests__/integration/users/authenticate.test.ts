import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Authentication', () => {
  it('it should return a validation token if registred with valid credentials ', async () => {
    const response = await
    request(app)
      .post('/api/v1/aurthenticate')
      .send({
        email: 'email@teste.com',
        password: '123456'
      })
    expect(response.status).toBe(201)
  })
})
