import { Router } from 'express'
import userController from '../api/controllers/userController'

const router = Router()
const mainRoute = '/api/v1/user'

router
  .get(`${mainRoute}`, userController.findAll)
  .post(`${mainRoute}`, userController.create)
  .post('/api/v1/authenticate', userController.authentication)
  .delete(`${mainRoute}/:email`, userController.deleteByEmail)

export default router
