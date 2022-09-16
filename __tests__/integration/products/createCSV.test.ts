import app from '../../../src/app'
const productsList = require('../../../src/api/documents/productsList')
const request = require('supertest')

/* eslint-disable no-undef */
describe('Create product with CSV', () => {
  it('it should create a product using a CSV file with valid credentials', async () => {
    const filePath = productsList
    const response = await
    request(app)
      .post('/api/v1/product/csv')
      .attach('file', filePath)
    expect(response.status).toBe(201)
  })
})
