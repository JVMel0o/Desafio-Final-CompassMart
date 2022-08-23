import { IProduct, IProductResponse } from "../interfaces/productInterface";
import mongoose, { Schema, model } from "mongoose";
import { paginate } from "mongoose-paginate-v2";

const ProductSchema = new Schema<IProduct>({
    title: { type: String, required: true},
    description: { type: String, required: true},
    department: { type: String, required: true},
    brand: { type: String, required: true},
    price: { type: Number, min: 0.01, max: 1000.00, required: true },
    qtd_stock: { type: Number, required: true},
    bar_code: { type: String, minlength: 13, maxlenght: 13, required: true, unique: true}
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

//productSchema.plugin(paginate);

const productSchema = mongoose.model<IProduct, mongoose.PaginateModel<IProductResponse>>('product', ProductSchema);

export default productSchema;
