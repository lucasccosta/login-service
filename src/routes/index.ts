import { Router } from "express";
import { accountsRouter } from "./accounts.routes";

const router = Router();

// router.use(authenticateRouter)
router.use("/accounts",accountsRouter)

export { router }