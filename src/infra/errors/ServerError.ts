import { CustomError } from "./CustomError"

export class ServerError extends CustomError  {
  public readonly message: string

  constructor({message = "Could not connect to database"}) {
    super({message})
    this.message = message
  }
}