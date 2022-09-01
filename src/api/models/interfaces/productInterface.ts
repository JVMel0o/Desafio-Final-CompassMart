import { Types } from 'mongoose'

export interface IProduct {
    title: String,
    description: String,
    department: String,
    brand: String,
    price: number,
    qtd_stock: number,
    stock_control_enabled: boolean,
    bar_code: String;
}

export interface IQuery {
    department?: String,
    brand?: String,
    page?: number,
    limit?: number
}

export interface IProductResponse {
    _id: Types.ObjectId,
    title: String,
    description: String,
    department: String,
    brand: String,
    price: number,
    qtd_stock: number,
    stock_control_enabled: boolean,
    bar_code: String;
}

export interface IProductCSV {
    title?: String,
    description?: String,
    department?: String,
    brand?: String,
    price?: number,
    qtd_stock?: number,
    stock_control_enabled?: boolean,
    bar_code?: String;
}

export interface IProductResponseCSV {
    success: number,
    errors: number,
    error_details?: [{
        title: String,
        bar_code: String,
        error?: [String],
        errors?: String
    }]
}

export interface IVerifyCSV {
    verify: boolean,
    messages?: [String]
}
