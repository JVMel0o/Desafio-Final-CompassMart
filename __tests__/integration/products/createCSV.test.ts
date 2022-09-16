import app from '../../../src/app'
const productsList = require('../../../src/api/documents/productsList')
const request = require('supertest')

/* eslint-disable no-undef */
describe('Create product with CSV', () => {
  it('it should create a product list using a CSV file with valid credentials', async () => {
    const filePath = productsList
    const response = await
    request(app)
      .post('/api/v1/product/csv')
      .attach('file', filePath)
    expect(response.status).toBe(201)
  })

  it('it should not create a product list without using a CSV file with valid credentials', async () => {
    const response = await
    request(app)
      .post('/api/v1/product/csv')
    expect(response.status).toBe(400)
  })
})
