import { Router } from 'express';
import productController from '../api/controllers/productController';
import productCreateValidation from '../api/validation/products/product-create-validation';
import productIdValidation from '../api/validation/products/product-id-validation';
import productPatchValidation from '../api/validation/products/product-patch-validation';
import productUpdateValidation from '../api/validation/products/product-update-validation';

const router = Router();
const mainRoute = '/api/v1/product';

router
    .get(`${mainRoute}`, productController.findAll)
    .get(`${mainRoute}/low_stock`, productController.findByLowStock)
    .get(`${mainRoute}/:id`, productIdValidation, productController.findById)
    .post(`${mainRoute}`, productCreateValidation, productController.create)
    .put(`${mainRoute}/:id`, productUpdateValidation, productIdValidation, productController.update)
    .patch(`${mainRoute}/:id`, productPatchValidation, productIdValidation, productController.update)
    .delete(`${mainRoute}/:id`, productIdValidation, productController.delete);

export default router;
