import { IProduct, IProductResponse } from "../models/interfaces/productInterface";
import productSchema from "../models/schemas/productSchema";
import productPaginate from "../../paginate/productPaginate";

class productRepository{

    async create (payload: IProduct): Promise<IProductResponse> {
        return productSchema.create(payload);
    }

    async findAll(): Promise<any> {
        const options = {
            page: 1,
            limit: 50,
            customLabels: productPaginate
        };
        const products = await productSchema.paginate({}, options);
        return products;
    }

    async findById(id: String): Promise<IProductResponse | null> {
        return productSchema.findById(id);
    }

    async findByLowStock(): Promise<any> {
        const queryLowStock = {
            stock_control_enabled: true,
            qtd_stock: { $lt: 100 }
        };
        const options = {
            page: 1,
            limit: 50,
            customLabels: productPaginate
        };
        const productsLowStock = await productSchema.paginate(queryLowStock, options);
    }

    async delete(id: String): Promise<IProductResponse | null> {
        return productSchema.findByIdAndDelete(id);
    }

    async update(id: String, payload: IProduct): Promise<IProductResponse | null> {
        return productSchema.findByIdAndUpdate(id, payload);
    }
};

export default new productRepository();
