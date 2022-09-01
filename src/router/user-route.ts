import { Router } from 'express'
import userController from '../api/controllers/userController'

const router = Router()
const mainRoute = 'api/v1/user'

router
  .get(`${mainRoute}`, userController.findAll)
  .post(`${mainRoute}`, userController.create)
  .delete(`${mainRoute}`, userController.deleteByEmail)

export default router
