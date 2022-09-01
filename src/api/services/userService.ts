import { IPaginate } from "../models/interfaces/paginateInterface";
import { IUser, IUserAuthentication } from "../models/interfaces/userInterface";
import userRepository from "../repositories/userRepository";

class UserService {
    async create (payload: IUser): Promise<IUser | IUserAuthentication> {
        return await userRepository.create(payload)
    }

    async findAll (query: IPaginate) {
        return await userRepository.findAll(query)
    }

    async deleteByEmail (email: string) {
        return await userRepository.deleteByEmail(email)
    }
}

export default new UserService()