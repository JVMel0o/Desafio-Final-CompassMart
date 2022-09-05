class UserTokenMissing {
  public readonly message: string
  public readonly statusCode: number

  constructor () {
    this.message = 'Token is missing.'
    this.statusCode = 401
  }
}

export default UserTokenMissing
