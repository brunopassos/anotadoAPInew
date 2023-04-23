import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";

const listNotesService = async (): Promise<Note[]> => {

    const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);
    
    const notes: Note[] = await noteRepository.find();

    return notes;
}

export default listNotesService;