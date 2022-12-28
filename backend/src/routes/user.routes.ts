import { Router } from "express";
import { userRegisterSchema, userUpdateSchema } from "../schemas/user.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";

const userRoutes = Router();

// userRoutes.post("", validateSchema(userRegisterSchema), Controller);

export default userRoutes;
