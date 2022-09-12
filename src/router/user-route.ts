import { Router } from 'express'
import userController from '../api/controllers/userController'
import userCreateValidation from '../api/validation/users/user-create-validation'
import userAuthentication from '../middlewares/user-authentication'

const router = Router()
const mainRoute = '/api/v1/user'

router
  .get(`${mainRoute}`, userAuthentication, userController.findAll)
  .post(`${mainRoute}`, userCreateValidation, userController.create)
  .post('/api/v1/authenticate', userCreateValidation, userController.authentication)
  .delete(`${mainRoute}/:email`, userAuthentication, userController.deleteByEmail)

export default router
