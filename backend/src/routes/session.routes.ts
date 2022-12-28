import { Router } from "express";
import { userRegisterSchema, userUpdateSchema } from "../schemas/user.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createSessionController } from "../controllers/session.controller";

const sessionRoutes = Router();

// sessionRoutes.post("", validateSchema(userRegisterSchema), Controller);

export default sessionRoutes;
