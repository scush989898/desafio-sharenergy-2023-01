import { Router } from "express";
import { userRegisterSchema } from "../schemas/user.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createSessionController } from "../controllers/session.controller";

const sessionRoutes = Router();

sessionRoutes.post("", validateSchema(userRegisterSchema), createSessionController);

export default sessionRoutes;
