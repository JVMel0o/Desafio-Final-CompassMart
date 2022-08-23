import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productSchema from "../models/schemas/productSchema";

class productRepository{

    async create (payload: IProduct): Promise<IProductResponse> {
        return productSchema.create(payload);
    }

    async findAll(): Promise<any> {
        return productSchema.find();
    }

    async findById(id: String): Promise<IProductResponse | null> {
        return productSchema.findById(id);
    }

    async delete(id: String): Promise<IProductResponse | null> {
        return productSchema.findByIdAndDelete(id);
    }

    async update(id: String, payload: IProduct): Promise<IProductResponse | null> {
        return productSchema.findByIdAndUpdate(id);
    }
};

export default new productRepository();
