import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productRepository from "../repositories/productRepository";

class productService {

    async create (payload: IProduct): Promise<IProductResponse> {
        const result = await productRepository.create(payload);
        return result;
    }
}

export default new productService();