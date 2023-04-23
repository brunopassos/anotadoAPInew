import { z } from "zod";
import { returnUserSchema } from "./user.schemas";


const noteSchema = z.object({
    title: z.string().optional(),
    content: z.string().min(1)
})

const returnNoteSchema = noteSchema.extend({
    id: z.string(),
    createdAt: z.date(),
    user: returnUserSchema
})


export {
    noteSchema,
    returnNoteSchema,
}