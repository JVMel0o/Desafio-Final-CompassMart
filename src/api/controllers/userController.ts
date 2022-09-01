import { Request, Response } from 'express'
import userService from '../services/userService'

class UserController {
  async create (req: Request, res: Response) {
    try {
      const result = await userService.create(req.body)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async findAll (req: Request, res: Response) {
    try {
      const result = await userService.findAll(req.query)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async deleteByEmail (req: Request, res: Response) {
    try {
      const email = req.params.email
      await userService.deleteByEmail(email)
      return res.status(204).json()
    } catch (error) {
      return res.status(404).json({ error })
    }
  }
}

export default new UserController()
