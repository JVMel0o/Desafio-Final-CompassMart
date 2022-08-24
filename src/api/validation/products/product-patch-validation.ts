import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            department: Joi.string(),
            brand: Joi.string(),
            price: Joi.number().min(0.01).max(1000),
            qtd_stock: Joi.number().min(1).max(100000),
            bar_code: Joi.string().length(13),
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if (error) throw error;
        return next();

    } catch (error) { 
        return res.status(400).json(error);
    }
};