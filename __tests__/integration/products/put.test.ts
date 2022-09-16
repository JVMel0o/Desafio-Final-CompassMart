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

  it('it should not update a product without all values by its ID', async () => {
    const response = await
    request(app)
      .put('/api/v1/product/:id')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        price: 20.13,
        qtd_stock: 99,
        bar_code: '9752873996680'
      })
    expect(response.status).toBe(400)
  })

  it('it should not update a product with invalid value by its ID', async () => {
    const response = await
    request(app)
      .put('/api/v1/product/:id')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 0.00 || 1000.01,
        qtd_stock: 100001,
        bar_code: '9752873996680'
      })
    expect(response.status).toBe(400)
  })
})
