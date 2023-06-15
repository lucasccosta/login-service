import { Router } from "express";
import { adaptRoute } from "../modules/account/adapters";
import { makeCreateUserController } from "../modules/account/factories/UsersControllerFactories";

const accountsRouter = Router();

accountsRouter.post('/create/users', adaptRoute(makeCreateUserController()))

export { accountsRouter }