import { Response, Request } from "express";
import { INote } from "../interfaces/note.interfaces";
import jwt from "jsonwebtoken";
import createNoteService from "../services/notes/createNote.service";
import listNotesService from "../services/notes/listNotes.service";
import updateNoteService from "../services/notes/updateNote.service";
import deleteNoteService from "../services/notes/deleteNote.service";


const createNoteController = async (req: Request, res: Response) => {

  const noteData: INote = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  let id: string = "";

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err, decoded: any) => {
      id = decoded.sub;
    }
  );

  const note = await createNoteService(noteData, id);

  return res.status(201).json(note);
};

const listNotesController = async (req: Request, res: Response) => {

  const notes = await listNotesService();

  return res.status(200).json(notes);

};

const updateNoteController = async (req: Request, res: Response) => {

  const {id} = req.params;
  const noteData: INote = req.body;

  const note = await updateNoteService(noteData, id);

  return res.status(200).json(note);

}

const deleteNoteController = async (req: Request, res: Response) => {

  const {id} = req.params;

  await deleteNoteService(id);

  return res.status(200).send();
}



export { 
  createNoteController, 
  listNotesController,
  updateNoteController,
  deleteNoteController
};
