import { IUser } from '../interfaces/userInterface'
import mongoose, { Schema } from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

UserSchema.plugin(paginate)

const userSchema = mongoose.model<IUser, mongoose.PaginateModel<any>>('user', UserSchema)

export default userSchema
