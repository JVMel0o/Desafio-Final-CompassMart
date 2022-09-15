import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Update a product', () => {
  it('it should update a product with only selected values by its ID', async () => {
    const response = await
    request(app)
      .patch('/api/v1/product/:id')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'Ofertas',
        brand: 'Velho Barreiro',
        price: 19.99,
        qtd_stock: 0,
        bar_code: '9752873996680'
      })
    expect(response.status).toBe(201)
  })
})
