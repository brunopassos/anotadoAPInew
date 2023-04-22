import { Router } from "express";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";
import { createLoginController } from "../controllers/login.controllers";

const loginRoutes: Router = Router();

loginRoutes.post("", ensureUserDataIsValidMiddleware(createLoginSchema), createLoginController)

export default loginRoutes;