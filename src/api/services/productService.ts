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

    async delete (id: String): Promise<IProductResponse | null> {
        return await productRepository.delete(id);
    }

    async update (id: String, payload: IProduct): Promise<IProductResponse | null> {
        return await productRepository.update(id, payload);
    }
}

export default new productService();
