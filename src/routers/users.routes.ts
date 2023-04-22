import { Router } from "express";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import { createUserController, listOneUserController } from "../controllers/users.controllers";
import { userSchema } from "../schemas/user.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const userRoutes: Router = Router();

userRoutes.post("", ensureUserDataIsValidMiddleware(userSchema), createUserController);
userRoutes.get("/me", ensureTokenIsValidMiddleware, listOneUserController)

export default userRoutes;