import { userSchema, returnUserSchema } from "../schemas/user.schemas";
import { z } from "zod";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;

export {
    IUser,
    IUserReturn
}