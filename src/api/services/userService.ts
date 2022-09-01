import { IPaginate } from '../models/interfaces/paginateInterface'
import { IUser } from '../models/interfaces/userInterface'
import userRepository from '../repositories/userRepository'
const bcrypt = require('bcrypt')

class UserService {
  async create (payload: IUser): Promise<IUser> {
    const hashCost = 12
    payload.password = await bcrypt.hash(payload.password, hashCost)
    await userRepository.create(payload)
    const userResponse: IUser = {email: payload.email, password: payload.password}
    return userResponse
  }

  async findAll (query: IPaginate) {
    return await userRepository.findAll(query)
  }

  async deleteByEmail (email: string) {
    return await userRepository.deleteByEmail(email)
  }
}

export default new UserService()
