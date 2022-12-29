import { Request, Response } from "express";
import {
  createClientService,
  deleteClientService,
  getOneClientService,
  listAllClientsService,
  updateClientService,
} from "../services/client.service";

import { StatusCode } from "../utils/statusCode.utils";

const createClientController = async (req: Request, res: Response) => {
  const newClient = await createClientService(req.body);
  return res.status(StatusCode.created).json(newClient);
};

const listAllClientsController = async (req: Request, res: Response) => {
  const clientList = await listAllClientsService();
  return res.json(clientList);
};

const getOneClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await getOneClientService(id);
  return res.json(client);
};

const updateClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await updateClientService(id, req.body);
  return res.json(client);
};

const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteClientService(id);
  return res.status(StatusCode.noContent).send();
};

export {
  createClientController,
  getOneClientController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
};
