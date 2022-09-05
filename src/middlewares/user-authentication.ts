import { Request, Response, NextFunction } from 'express'
import UserTokenMissing from '../api/errors/users/UserTokenMissing'
const jwt = require('jsonwebtoken')

export default (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) throw new UserTokenMissing()
  const token = authorization
  jwt.verify(token, process.env.JWT_SECRET, () => {
    return next()
  })
}
