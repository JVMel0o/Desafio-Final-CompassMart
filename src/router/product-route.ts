import { Router } from 'express';
import productController from '../api/controllers/productController';
import productCreateValidation from '../api/validation/products/product-create-validation';
import productUpdateValidation from '../api/validation/products/product-update-validation';

const router = Router();
const mainRoute = '/api/v1/product';

router.post(`${mainRoute}`, productCreateValidation, productController.create);
router.get(`${mainRoute}`, productController.findAll);
router.get(`${mainRoute}/:id`, productController.findById);
router.delete(`${mainRoute}/:id`, productController.delete);
router.put(`${mainRoute}/:id`, productUpdateValidation, productController.update);
router.patch(`${mainRoute}/:id`, productController.update);

export default router;
