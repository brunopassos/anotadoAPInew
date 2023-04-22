import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors";

const deleteNoteService = async (id:string): Promise<void> => {

    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id}});

    if(!note){
        throw new AppError("Note not found", 404)
    }

    await noteRepository.delete(note!.id);
}

export default deleteNoteService;