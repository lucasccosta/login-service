import { Router } from "express";
import { authenticateAdapter } from "../modules/authenticate/adapters";
import { makeAuthenticateController } from "../modules/authenticate/factories/AuthenticateControllerFactories";

const authenticateRouter = Router();

authenticateRouter.post('/session', authenticateAdapter(makeAuthenticateController()))

export { authenticateRouter }