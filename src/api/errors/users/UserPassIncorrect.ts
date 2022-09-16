class UserPasswordIncorrect {
  public readonly message: string
  public readonly statusCode: number

  constructor () {
    this.message = 'Password incorrect.'
    this.statusCode = 401
  }
}

export default UserPasswordIncorrect
