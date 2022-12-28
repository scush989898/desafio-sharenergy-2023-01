import { Router } from "express";
import { clientRegisterSchema, clientUpdateSchema } from "../schemas/client.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createClientController,
  getOneClientController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
} from "../controllers/client.controller";

const clientRoutes = Router();

// clientRoutes.post("", validateSchema(userSchema), Controller);
clientRoutes.get("", getOneClientController);

export default clientRoutes;
