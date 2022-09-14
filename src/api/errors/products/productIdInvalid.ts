class productIdInvalid {
  public readonly message: string;
  public readonly statusCode: number;

  constructor () {
    this.message = 'Product Id different from pattern.';
    this.statusCode = 400;
  }
}

export default productIdInvalid;
