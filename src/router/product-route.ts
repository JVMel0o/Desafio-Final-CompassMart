import { Router } from 'express';
import productController from '../api/controllers/productController';
import productCreateValidation from '../api/validation/products/product-create-validation';
import productIdValidation from '../api/validation/products/product-id-validation';
import productPatchValidation from '../api/validation/products/product-patch-validation';
import productUpdateValidation from '../api/validation/products/product-update-validation';

const router = Router();
const mainRoute = '/api/v1/product';

router.get(`${mainRoute}`, productController.findAll);
router.get(`${mainRoute}/:id`, productIdValidation, productController.findById);
router.post(`${mainRoute}`, productCreateValidation, productController.create);
router.put(`${mainRoute}/:id`, productUpdateValidation, productController.update);
router.patch(`${mainRoute}/:id`, productPatchValidation, productController.update);
router.delete(`${mainRoute}/:id`, productIdValidation, productController.delete);

export default router;
