import { CreateUsersController } from "../controllers/create/CreateUsersController"
import { CreateUsersUseCase } from "../controllers/create/CreateUsersUseCase"
import { UsersRepository } from "../repositories/UsersRepository"


export const makeCreateUserController = () => {
  const usersRepository = new UsersRepository()
  const createUsersUseCase = new CreateUsersUseCase(usersRepository)
  const createUsersController = new CreateUsersController(createUsersUseCase)
  return createUsersController
}