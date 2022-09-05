import { IPaginate } from '../models/interfaces/paginateInterface'
import { IUser, IUserAuthentication } from '../models/interfaces/userInterface'
import userRepository from '../repositories/userRepository'
import 'dotenv/config'
import UserEmailDoNotExists from '../errors/users/UserEmailNotFound'
import UserEmailExists from '../errors/users/UserEmailExists'
import UserPasswordIncorrect from '../errors/users/UserPassIncorrect'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserService {
  async create (payload: IUser): Promise<IUser> {
    const emailExists = await userRepository.findByEmail(payload.email)
    if (emailExists !== null) throw new UserEmailExists()
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
    const emailExists = await userRepository.findByEmail(payload.email)
    if (emailExists === null) throw new UserEmailDoNotExists()
    if (!await bcrypt.compare(payload.password, emailExists.password)) throw new UserPasswordIncorrect()
    const token: IUserAuthentication = { email: payload.email, token: await jwt.sign({ id: payload.email }, process.env.JWT_KEY, { expiresIn: '24h' }) }
    return token
  }
}

export default new UserService()
