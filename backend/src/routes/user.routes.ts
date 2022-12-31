import { Router } from "express";
import { userRegisterSchema, userUpdateSchema } from "../schemas/user.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";
import hasPermission from "../middlewares/hasPermission.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.get("/:id", ensureAuthMiddleware, getUserProfileController);
userRoutes.post("", validateSchema(userRegisterSchema), createUserController);

userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  hasPermission,
  validateSchema(userUpdateSchema),
  updateUserController
);
userRoutes.delete("/:id", ensureAuthMiddleware, hasPermission, deleteUserController);

export default userRoutes;
