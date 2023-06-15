export class CustomError  {
  public readonly message: string

  constructor({message}) {
    this.message = message
  }
}