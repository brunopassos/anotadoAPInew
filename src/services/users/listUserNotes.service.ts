import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";

const listUserNotesService = async (email:string): Promise<Note[]>=> {

    const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

    const notes = await noteRepository.find();

    const notesOwner = notes.filter((note) => (note.user.email) === email);
    
    return notesOwner

}

export default listUserNotesService;