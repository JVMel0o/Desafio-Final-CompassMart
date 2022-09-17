import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Find all users', () => {
  it('it should find all users registered', async () => {
    const response = await
    request(app)
      .get('/api/v1/user')
    expect(response.status).toBe(200)
  })
})
