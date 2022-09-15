import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Find all products', () => {
  it('it should find all products registered', async () => {
    const response = await
    request(app)
      .get('/api/v1/product')
    expect(response.status).toBe(200)
  })
})
