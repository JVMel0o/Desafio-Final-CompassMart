import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import productIdInvalid from '../../errors/products/productIdInvalid';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new productIdInvalid();
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};