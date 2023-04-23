import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import createUserService from "../services/users/createUser.service";
import listOneUserService from "../services/users/listOneUser.service";
import listUserNotesService from "../services/users/listUserNotes.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listOneUserController = async (req: Request, res: Response) => {
  const email: string = req.user.email;

  const user = await listOneUserService(email);

  return res.status(200).json({
    data: {
      message: "Success",
      user,
    },
  });
};

const listUserNotesController = async (req: Request, res: Response) => {
  
  const userEmail: string = req.user.email;

  const userNotes = await listUserNotesService(userEmail);

  return res.status(200).json(instanceToPlain(userNotes));
}

export {
    createUserController,
    listOneUserController,
    listUserNotesController
};
