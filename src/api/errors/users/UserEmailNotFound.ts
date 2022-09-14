class UserEmailDoNotExists {
  public readonly message: string;
  public readonly statusCode: number;

  constructor () {
    this.message = 'User Email is NOT registered.';
    this.statusCode = 404;
  }
}

export default UserEmailDoNotExists;
