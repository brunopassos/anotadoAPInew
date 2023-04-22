import { z } from "zod";
import { hashSync } from "bcryptjs";

const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/).transform((pass) => {
        return hashSync(pass, 10)
    })
})

const returnUserSchema = userSchema.extend({
    id: z.string()
}).omit({password: true});

export {
    userSchema,
    returnUserSchema
}