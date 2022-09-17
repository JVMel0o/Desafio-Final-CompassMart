import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Find a product', () => {
  it('it should find a product registered by its ID', async () => {
    const response = await
    request(app)
      .get('/api/v1/product/:id')
    expect(response.status).toBe(200)
  })
})
