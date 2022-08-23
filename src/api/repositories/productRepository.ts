import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productSchema from "../models/schemas/productSchema";

class productRepository{

    async create (payload: IProduct): Promise<IProductResponse> {
        return productSchema.create(payload);
    }
};

export default new productRepository;