import { noteSchema, returnNoteSchema } from "../schemas/note.schemas";
import { z } from "zod";

type INote = z.infer<typeof noteSchema>;
type INoteReturn = z.infer<typeof returnNoteSchema>;

export {
    INote,
    INoteReturn,
}