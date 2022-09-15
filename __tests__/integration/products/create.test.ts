import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Create product', () => {
  it('it should create a product with valid credentials', async () => {
    const response = await
    request(app)
      .post('/api/v1/product')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 10.13,
        qtd_stock: 2589,
        bar_code: '9752873996680'
      })
    expect(response.status).toBe(201)
  })
})
