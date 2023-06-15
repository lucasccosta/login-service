export class CustomError  {
  public readonly message: string
  public readonly statusCode: number

  constructor({message}) {
    this.message = message
  }
}