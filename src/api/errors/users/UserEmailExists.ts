class UserEmailExists {
  public readonly message: string;
  public readonly statusCode: number;

  constructor () {
    this.message = 'User Email is ALREADY registered.';
    this.statusCode = 400;
  }
}

export default UserEmailExists;
