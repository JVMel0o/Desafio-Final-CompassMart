import app from '../../../src/app'
const request = require('supertest')

/* eslint-disable no-undef */
describe('Delete a user', () => {
  it('it should delete a user registered by his email', async () => {
    const response = await
    request(app)
      .delete('/api/v1/user/:email')
    expect(response.status).toBe(204)
  })
})
