import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Note } from "../entities/note.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";

const ensureUserIsNoteOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const noteId: string = req.params.id;

    const token: string | undefined = req.headers.authorization?.split(" ")[1];

    const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

    const noteFinded = await noteRepository.findOne({where: { id : noteId }});

    if(!noteFinded){
        throw new AppError("Note not found", 404);
    }

    let id: string = "";

    jwt.verify(
        token as string,
        process.env.SECRET_KEY as string,
        (err, decoded: any) => {
        id = decoded.sub;
        }
    );

    if(id !== noteFinded.user.id){
        throw new AppError("User have no permision", 403);
    }

    next();

}

export default ensureUserIsNoteOwner;