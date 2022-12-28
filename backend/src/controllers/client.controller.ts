import { Request, Response } from "express";
import {
  createClientService,
  deleteClientService,
  getOneClientService,
  listAllClientsService,
  updateClientService,
} from "../services/client.service";

const createClientController = async (req: Request, res: Response) => {};

const getOneClientController = async (req: Request, res: Response) => {
  return res.json({msg: "ola mundo"});
};

const listAllClientsController = async (req: Request, res: Response) => {};

const updateClientController = async (req: Request, res: Response) => {

};

const deleteClientController = async (req: Request, res: Response) => {};

export {
  createClientController,
  getOneClientController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
};
