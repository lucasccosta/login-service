import { UsersRepository } from "../../account/repositories/UsersRepository"
import { AuthenticateController } from "../JWT/AuthenticateController"
import { AuthenticateUseCase } from "../JWT/AuthenticateUseCase"


export const makeAuthenticateController = () => {
  const usersRepository = new UsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)
  const authenticateController = new AuthenticateController(authenticateUseCase)
  return authenticateController
}