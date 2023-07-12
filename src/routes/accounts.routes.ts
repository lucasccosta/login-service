import { Router } from "express";
import { createUsersAdapter } from "../modules/account/adapters";
import { makeCreateUserController } from "../modules/account/factories/UsersControllerFactories";

const accountsRouter = Router();

accountsRouter.post('/create/users', createUsersAdapter(makeCreateUserController()))

export { accountsRouter }