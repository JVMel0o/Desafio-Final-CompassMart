import { Request, Response, NextFunction } from 'express'
const jwt = require('jsonwebtoken')

export default (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) return res.status(401).send('error: no token')
  const token = authorization
  jwt.verify(token, process.env.JWT_SECRET, () => {
    return next()
  })
}
