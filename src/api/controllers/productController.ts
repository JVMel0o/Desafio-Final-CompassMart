import { Request, Response } from 'express';
import CSVFileError from '../errors/products/CSVFileError';
import productService from '../services/productService';

class ProductController {
  async create (req: Request, res: Response) {
    try {
      const result = await productService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async createByCSV (req: Request, res: Response) {
    try {
      const csv = req.file?.buffer.toString('utf-8');
      if (csv === undefined) throw new CSVFileError();
      const result = await productService.createByCSV(csv);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async findAll (req: Request, res: Response) {
    try {
      const result = await productService.findAll(req.query);
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

  async findByLowStock (req: Request, res: Response) {
    try {
      const result = await productService.findByLowStock();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error });
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
      await productService.update(id, req.body);
      const result = await productService.findById(id);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async findByMapper (req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await productService.findByMapper(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new ProductController();
