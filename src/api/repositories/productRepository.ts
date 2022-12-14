import { IProduct, IProductResponse, IQuery } from '../models/interfaces/productInterface'
import productSchema from '../models/schemas/productSchema'
import productPaginate from '../../paginate/productPaginate'
import { PaginateResult } from 'mongoose'

class ProductRepository {
  async create (payload: IProduct): Promise<IProductResponse> {
    return productSchema.create(payload)
  }

  async createByCSV (payload: IProduct[]): Promise<void> {
    await productSchema.insertMany(payload)
  }

  async findAll (query: IQuery): Promise<PaginateResult<IProductResponse>> {
    const options = {
      page: query.page || 1,
      limit: query.limit || 50,
      customLabels: productPaginate
    }
    const products = await productSchema.paginate({
      department: { $regex: (query.department !== undefined ? query.department : '') },
      brand: { $regex: (query.brand !== undefined ? query.brand : '') }
    }, options)
    return products
  }

  async findById (id: String): Promise<IProductResponse | null> {
    return productSchema.findById(id)
  }

  async findByLowStock (): Promise<PaginateResult<IProductResponse>> {
    const options = {
      page: 1,
      limit: 50,
      sort: { qtd_stock: 1 },
      customLabels: productPaginate
    }
    const productsLowStock = await productSchema.paginate({ qtd_stock: { $lt: 100 }, stock_control_enabled: true }, options)
    return productsLowStock
  }

  async findByBarCode (barcode: String): Promise<Boolean> {
    const result = await productSchema.findOne({ bar_code: barcode })
    if (result) return true
    return false
  }

  async delete (id: String): Promise<IProductResponse | null> {
    return productSchema.findByIdAndDelete(id)
  }

  async update (id: String, payload: IProduct): Promise<IProductResponse | null> {
    return productSchema.findByIdAndUpdate(id, payload)
  }
};

export default new ProductRepository()
