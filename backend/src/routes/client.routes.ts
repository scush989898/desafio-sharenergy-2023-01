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
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureAuthMiddleware,
  validateSchema(clientRegisterSchema),
  createClientController
);

clientRoutes.get("", ensureAuthMiddleware, listAllClientsController);
clientRoutes.get("/:id", ensureAuthMiddleware, getOneClientController);
clientRoutes.patch(
  "/:id",

  ensureAuthMiddleware,
  validateSchema(clientUpdateSchema),
  updateClientController
);
clientRoutes.delete("/:id", ensureAuthMiddleware, deleteClientController);

export default clientRoutes;
