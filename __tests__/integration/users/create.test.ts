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

  it('it should not create a user with invalid credentials', async () => {
    const response = await
    request(app)
      .post('/api/v1/user')
      .send({
        email: 'emailteste.com',
        password: 123456
      })
    expect(response.status).toBe(400)
  })

  it('it should not create a user if email already exists', async () => {
    const response = await
    request(app)
      .post('/api/v1/user')
      .send({
        email: 'test@email.com',
        password: '123456'
      })
    expect(response.status).toBe(400)
  })
})
