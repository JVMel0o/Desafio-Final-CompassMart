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

  it('it should not create a product with stock lower than 1', async () => {
    const response = await
    request(app)
      .post('/api/v1/product')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 10.13,
        qtd_stock: 0,
        bar_code: '9752873996681'
      })
    expect(response.status).toBe(400)
  })

  it('it should not create a product with stock greater than 100000', async () => {
    const response = await
    request(app)
      .post('/api/v1/product')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 10.13,
        qtd_stock: 100001,
        bar_code: '9752873996682'
      })
    expect(response.status).toBe(400)
  })

  it('it should not create a product with price lower than 0.01', async () => {
    const response = await
    request(app)
      .post('/api/v1/product')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 0.00,
        qtd_stock: 10,
        bar_code: '9752873996683'
      })
    expect(response.status).toBe(400)
  })

  it('it should not create a product with price higher than 1000', async () => {
    const response = await
    request(app)
      .post('/api/v1/product')
      .send({
        title: 'Cachaça',
        description: 'Cachaça Adoçada garrafa 910ml - Velho Barreiro',
        department: 'ofertas',
        brand: 'Velho Barreiro',
        price: 1000.01,
        qtd_stock: 10,
        bar_code: '9752873996684'
      })
    expect(response.status).toBe(400)
  })

  it('it should not create a product if barcode already exists', async () => {
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
    expect(response.status).toBe(400)
  })
})
