import productIdDoNotExists from "../errors/products/productIdDoNotExists";
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
        const result = await productRepository.findById(id);
        if(result === null) throw new productIdDoNotExists();
        return result;
    }

    async findByLowStock (): Promise<any> {
        return await productRepository.findByLowStock();
    }

    async delete (id: String): Promise<IProductResponse | null> {
        const result = await productRepository.delete(id);
        if(result === null) throw new productIdDoNotExists();
        return result;
    }

    async update (id: String, payload: IProduct): Promise<IProductResponse | null> {
        const result = await productRepository.update(id, payload);
        if(result === null) throw new productIdDoNotExists();
        return result;
    }
}

export default new productService();
