import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserProfileService,
  updateUserService,
} from "../services/user.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const newUser = await createUserService(data);
  return res.status(201).json(instanceToPlain(newUser));
};

const getUserProfileController = async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await getUserProfileService(id);
  return res.json(instanceToPlain(user));

};

const updateUserController = async (req: Request, res: Response) => {};

const deleteUserController = async (req: Request, res: Response) => {
  const {id} = req.params;
  await deleteUserService(id);
  return res.status(204).send();

};

export {
  createUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
};
