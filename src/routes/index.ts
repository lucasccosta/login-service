import { Router } from "express";
import { accountsRouter } from "./accounts.routes";
import { authenticateRouter } from "./authenticate.routes";

const router = Router();

// router.use(authenticateRouter)
router.use("/accounts", accountsRouter)
router.use("/auth", authenticateRouter)

export { router }