import { Router } from "express";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import createUserController from "../controllers/users.controllers";
import { userSchema } from "../schemas/user.schemas";

const userRoutes: Router = Router();

userRoutes.post("", ensureUserDataIsValidMiddleware(userSchema), createUserController);

export default userRoutes;