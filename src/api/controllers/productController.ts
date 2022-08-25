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

    async findAll (req: Request, res: Response) {
        try {
            const result = await productService.findAll();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    async findById (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await productService.findById(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await productService.delete(id);
            return res.status(204).json();
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    async update (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const { title, description, department, brand, price, qtd_stock, bar_code } = req.body;
            await productService.update(id, req.body);
            const result = await productService.findById(id);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(404).json({ error });
        }
    }
}

export default new productController();
