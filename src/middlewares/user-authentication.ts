import { Request, Response, NextFunction } from 'express'
const jwt = require('jsonwebtoken')

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({ message: 'Token not provided' })

  const [, token] = authHeader.split(' ')

  try {
    await jwt.verify(token, process.env.APP_SECRET, () => {
      return next()
    })
  } catch (error) {
    return res.status(401).json({ message: 'Token do not exists' })
  }
}
