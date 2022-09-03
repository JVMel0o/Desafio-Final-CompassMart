import { Router } from 'express'
import userController from '../api/controllers/userController'
import userCreateValidation from '../api/validation/users/user-create-validation'

const router = Router()
const mainRoute = '/api/v1/user'

router
  .get(`${mainRoute}`, userController.findAll)
  .post(`${mainRoute}`, userCreateValidation, userController.create)
  .post('/api/v1/authenticate', userCreateValidation, userController.authentication)
  .delete(`${mainRoute}/:email`, userController.deleteByEmail)

export default router
