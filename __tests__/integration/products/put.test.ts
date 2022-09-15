import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Update a product', () => {
  it('it should update a product with all values by its ID', async () => {
    const response = await
    request(app)
      .put('/api/v1/product/:id')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 20.13,
        qtd_stock: 99,
        bar_code: '9752873996680'
      })
    expect(response.status).toBe(201)
  })
})
