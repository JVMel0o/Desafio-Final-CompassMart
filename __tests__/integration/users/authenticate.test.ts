import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Authentication', () => {
  it('it should return a validation token if registred with valid credentials ', async () => {
    const response = await
    request(app)
      .post('/api/v1/authenticate')
      .send({
        email: 'email@teste.com',
        password: '123456'
      })
    expect(response.status).toBe(201)
  })

  it('it should not return a validation token if registred with invalid credentials ', async () => {
    const response = await
    request(app)
      .post('/api/v1/authenticate')
      .send({
        email: 'emailteste.com',
        password: 123456
      })
    expect(response.status).toBe(400)
  })

  it('it should not return a validation token if registred with nonexistent user ', async () => {
    const response = await
    request(app)
      .post('/api/v1/authenticate')
      .send({
        email: 'notexists@email.com',
        password: '123456'
      })
    expect(response.status).toBe(404)
  })
})
