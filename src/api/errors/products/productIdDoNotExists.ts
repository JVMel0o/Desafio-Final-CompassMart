class ProductIdDoNotExists {
  public readonly message: string;
  public readonly statusCode: number;

  constructor () {
    this.message = 'Product Id is NOT registered.';
    this.statusCode = 404;
  }
}

export default ProductIdDoNotExists;
