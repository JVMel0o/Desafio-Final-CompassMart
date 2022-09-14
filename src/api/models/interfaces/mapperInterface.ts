import { Types } from 'mongoose';

export interface IWalmart {
    id: Types.ObjectId,
    product: {
        category: {
            path: {
                name: [String]
            }
        }
    },
    salesPrice: Number,
    listPrice: String,
    codes: Object
}
