import { IPaginate } from '../models/interfaces/paginateInterface'
import { IUser, IUserAuthentication } from '../models/interfaces/userInterface'
import userRepository from '../repositories/userRepository'
import 'dotenv/config'
import UserEmailDoNotExists from '../errors/users/UserEmailNotFound'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserService {
  async create (payload: IUser): Promise<IUser> {
    const hashCost = 12
    payload.password = await bcrypt.hash(payload.password, hashCost)
    await userRepository.create(payload)
    const userResponse: IUser = { email: payload.email, password: payload.password }
    return userResponse
  }

  async findAll (query: IPaginate) {
    return await userRepository.findAll(query)
  }

  async deleteByEmail (email: String) {
    const result = await userRepository.deleteByEmail(email)
    if (result === null) throw new UserEmailDoNotExists()
    return result
  }

  async authentication (payload: IUser): Promise<IUserAuthentication> {
    const token: IUserAuthentication = { email: payload.email, token: await this.createToken(payload.email) }
    return token
  }

  async createToken (email: String): Promise<String> {
    return jwt.sign({ id: email }, process.env.JWT_KEY, { expiresIn: '15m' })
  }
}

export default new UserService()
