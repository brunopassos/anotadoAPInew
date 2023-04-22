import { z } from "zod";

const createLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
})

export {
    createLoginSchema
}