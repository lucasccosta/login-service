import { Router } from "express";
import { accountsRouter } from "./accounts.routes";
import { authenticateRouter } from "./authenticate.routes";
import { rabbitmqRouter } from "./rabbitmq-test";

const router = Router();

// router.use(authenticateRouter)
router.use("/accounts", accountsRouter)
router.use("/auth", authenticateRouter)
router.use("/rabbitmq", rabbitmqRouter)

export { router }