import { Request, Response } from 'express';
import productService from '../services/productService';

class productController {

    async create (req: Request, res: Response) {
        try {
            const { title, description, department, brand, price, qtd_stock, bar_code } = req.body;
            const result = await productService.create(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default new productController();
