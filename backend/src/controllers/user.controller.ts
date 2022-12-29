import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserProfileService,
  updateUserService,
} from "../services/user.service";
import { instanceToPlain } from "class-transformer";
import { StatusCode } from "../utils/statusCode.utils";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(StatusCode.created).json(instanceToPlain(newUser));
};

const getUserProfileController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserProfileService(id);
  return res.json(instanceToPlain(user));
};

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await updateUserService(id, req.body);
  return res.json(instanceToPlain(user));
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(StatusCode.noContent).send();
};

export {
  createUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
};
