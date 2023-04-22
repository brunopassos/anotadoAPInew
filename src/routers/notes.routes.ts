import { Router } from "express";
import ensureNoteDataIsValidMiddleware from "../middlewares/ensureNoteDataIsValid.middleware";
import { noteSchema } from "../schemas/note.schemas";
import {createNoteController, deleteNoteController, listNotesController, updateNoteController} from "../controllers/notes.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const noteRoutes: Router = Router();

noteRoutes.post("", ensureTokenIsValidMiddleware, ensureNoteDataIsValidMiddleware(noteSchema), createNoteController);
noteRoutes.get("", listNotesController);
noteRoutes.patch("/:id", ensureTokenIsValidMiddleware, updateNoteController);
noteRoutes.delete("/:id", ensureTokenIsValidMiddleware, deleteNoteController);

export default noteRoutes;