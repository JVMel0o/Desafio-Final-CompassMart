import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productRepository from "../repositories/productRepository";

class productService {

    async create (payload: IProduct): Promise<IProductResponse> {
        const result = await productRepository.create(payload);
        return result;
    }

    async findAll (): Promise<any> {
        return await productRepository.findAll();
    }

    async findById (id: String): Promise<IProductResponse | null> {
        return await productRepository.findById(id);
    }

    async delete (id: String) {
        await productRepository.delete(id);
    }
}

export default new productService();
