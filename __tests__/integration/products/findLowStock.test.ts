import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Find products low stock', () => {
  it('it should find all products registered with stock smaller than 100', async () => {
    const response = await
    request(app)
      .get('/api/v1/product/low_stock')
    expect(response.status).toBe(200)
  })
})
