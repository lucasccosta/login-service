import { Request, Response } from 'express'
import { AuthenticateController } from '../JWT/AuthenticateController'

export const authenticateAdapter = (authenticateController: AuthenticateController) => {
  return async (request: Request, response: Response) => {

    const httpResponse = await authenticateController.handle(request)

    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
