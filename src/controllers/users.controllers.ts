import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import createUserService from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    
    const userData: IUser = req.body;

    const newUser = await createUserService(userData);
    
    return res.status(201).json(newUser);
}

export default createUserController;