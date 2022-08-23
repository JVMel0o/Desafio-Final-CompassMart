import { Router } from 'express';
import productController from '../api/controllers/productController';

const router = Router();
const mainRoute = '/api/v1/product';

router.post(`${mainRoute}`, productController.create);
router.get(`${mainRoute}`, productController.findAll);
router.get(`${mainRoute}/:id`, productController.findById);
router.delete(`${mainRoute}/:id`, productController.delete);
router.put(`${mainRoute}/:id`, productController.update);
router.patch(`${mainRoute}/:id`, productController.update);

export default router;
