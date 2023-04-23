import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors";
import { INote } from "../../interfaces/note.interfaces";

const updateNoteService = async (noteData:INote, id:string): Promise<INote> => {
    
    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id }});

    if(!note){
        throw new AppError("Note not found", 404);
    }

    const noteToUpadate = {
        title: noteData.title ? noteData.title : note?.title,
        content: noteData.content,
    }

    await noteRepository.update(id, noteToUpadate);

    return noteToUpadate;
}

export default updateNoteService;