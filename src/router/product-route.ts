import { Router } from 'express'
import productController from '../api/controllers/productController'
import productCreateValidation from '../api/validation/products/product-create-validation'
import productIdValidation from '../api/validation/products/product-id-validation'
import productPatchValidation from '../api/validation/products/product-patch-validation'
import productUpdateValidation from '../api/validation/products/product-update-validation'
import multer from 'multer'
import userAuthentication from '../middlewares/user-authentication'

const multerConfig = multer()
const router = Router()
const mainRoute = '/api/v1/product'

router
  .get(`${mainRoute}`, userAuthentication, productController.findAll)
  .get(`${mainRoute}/low_stock`, userAuthentication, productController.findByLowStock)
  .get(`${mainRoute}/marketplace/:id`, userAuthentication, productController.findByMapper)
  .get(`${mainRoute}/:id`, userAuthentication, productIdValidation, productController.findById)
  .post(`${mainRoute}`, userAuthentication, productCreateValidation, productController.create)
  .post(`${mainRoute}/csv`, userAuthentication, multerConfig.single('file'), productController.createByCSV)
  .put(`${mainRoute}/:id`, userAuthentication, productUpdateValidation, productIdValidation, productController.update)
  .patch(`${mainRoute}/:id`, userAuthentication, productPatchValidation, productIdValidation, productController.update)
  .delete(`${mainRoute}/:id`, userAuthentication, productIdValidation, productController.delete)

export default router
