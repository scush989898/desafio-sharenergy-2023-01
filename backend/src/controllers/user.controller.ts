import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserProfileService,
  updateUserService,
} from "../services/user.service";

const createUserController = async (req: Request, res: Response) => {};

const getUserProfileController = async (req: Request, res: Response) => {};

const updateUserController = async (req: Request, res: Response) => {};

const deleteUserController = async (req: Request, res: Response) => {};

export {
  createUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
};
