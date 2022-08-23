import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productSchema from "../models/schemas/productSchema";

class productRepository{

    async create (payload: IProduct): Promise<IProductResponse> {
        return productSchema.create(payload);
    }

    async findAll(): Promise<any> {
        return productSchema.find();
    }
};

export default new productRepository();
