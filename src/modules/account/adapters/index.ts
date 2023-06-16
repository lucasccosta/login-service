import { Request, Response } from 'express'
import { CreateUsersController } from '../controllers/create/CreateUsersController'

export const createUsersAdapter = (createUsersController: CreateUsersController) => {
  return async (request: Request, response: Response) => {

    const httpResponse = await createUsersController.handle(request)

    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
