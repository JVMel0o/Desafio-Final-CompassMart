import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('delete a product', () => {
  it('it should delete a product registered by its ID', async () => {
    const response = await
    request(app)
      .delete('/api/v1/product/:id')
    expect(response.status).toBe(204)
  })
})
