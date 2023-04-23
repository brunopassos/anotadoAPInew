import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { INote, INoteReturn } from "../../interfaces/note.interfaces";
import { returnNoteSchema } from "../../schemas/note.schemas";

const createNoteService = async (noteData:INote, id:string):  Promise<INoteReturn> => {
    const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({where: { id : id}});

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    const note = noteRepository.create({
        title: noteData.title,
        content: noteData.content,
        user: findUser
    })

    await noteRepository.save(note);

    const newNote:INoteReturn = returnNoteSchema.parse(note);

    return newNote;
}

export default createNoteService;