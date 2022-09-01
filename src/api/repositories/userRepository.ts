import { IUser, IUserAuthentication } from '../models/interfaces/userInterface'
import userSchema from '../models/schemas/userSchema'
import { PaginateResult } from 'mongoose'
import { IPaginate } from '../models/interfaces/paginateInterface'
import userPaginate from '../../paginate/userPaginate'

class UserRepository {
  async create (payload: IUser): Promise<IUser | IUserAuthentication> {
    return userSchema.create(payload)
  }

  async findAll (query: IPaginate): Promise<PaginateResult<IUser>> {
    const options = {
      page: query.page || 1,
      limit: query.limit || 50,
      customLabels: userPaginate
    }
    const users = await userSchema.paginate({}, options)
    return users
  }

  async findByEmail (email: string): Promise<IUser | null> {
    return userSchema.findOne({ email })
  }

  async deleteByEmail (email: string): Promise<IUser | null> {
    return userSchema.findOneAndDelete({ email })
  }
}

export default new UserRepository()
