import { Router } from "express";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import { createUserController, listOneUserController, listUserNotesController } from "../controllers/users.controllers";
import { userSchema } from "../schemas/user.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const userRoutes: Router = Router();

userRoutes.post("", ensureUserDataIsValidMiddleware(userSchema), createUserController);
userRoutes.get("/me", ensureTokenIsValidMiddleware, listOneUserController);
userRoutes.get("/notes/me", ensureTokenIsValidMiddleware, listUserNotesController);

export default userRoutes;