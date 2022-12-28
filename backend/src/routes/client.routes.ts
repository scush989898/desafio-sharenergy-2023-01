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
import validateParam from "../middlewares/validateUUID.middleware";

const clientRoutes = Router();

clientRoutes.get("/:id", validateParam, ensureAuthMiddleware, getOneClientController);
clientRoutes.get("", ensureAuthMiddleware, listAllClientsController);
clientRoutes.post(
  "",
  ensureAuthMiddleware,
  validateSchema(clientRegisterSchema),
  createClientController
);

clientRoutes.patch(
  "/:id",
  validateParam,
  ensureAuthMiddleware,
  validateSchema(clientUpdateSchema),
  updateClientController
);
clientRoutes.delete("/:id", validateParam, ensureAuthMiddleware, deleteClientController);

export default clientRoutes;
