class CSVFileError {
  public readonly message: string
  public readonly statusCode: number

  constructor () {
    this.message = 'File CSV not found.'
    this.statusCode = 404
  }
}

export default CSVFileError
