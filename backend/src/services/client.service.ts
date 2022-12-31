import { IClientRequest, IClientUpdateRequest } from "../interfaces/client.interface";
import {
  getObjectOrThrowError,
  resourceAlreadyExists,
  resourceAlreadyExistsMultipleParams,
} from "../utils/service.utils";
import { Message } from "../utils/messages.utils";
import { ClientModel } from "../models/client.model";

const createClientService = async (newClient: IClientRequest): Promise<any> => {
  const { cpf, email } = newClient;
  await resourceAlreadyExistsMultipleParams(
    ClientModel,
    [{ cpf }, { email }],
    Message.cpfOrEmailAlreadyExists
  );
  return await ClientModel.create(newClient);
};

const getOneClientService = async (id: string): Promise<any> => {
  return await getObjectOrThrowError(ClientModel, { _id: id });
};

const listAllClientsService = async (): Promise<any> => {
  return await ClientModel.find();
};

const updateClientService = async (id: string, newData: IClientUpdateRequest): Promise<any> => {
  const currentClient = await getObjectOrThrowError(ClientModel, { _id: id });
  if (newData.email && newData.email != currentClient.email) {
    await resourceAlreadyExists(ClientModel, { email: newData.email }, Message.emailAlreadyExists);
  }
  if (newData.cpf && newData.cpf != currentClient.cpf) {
    await resourceAlreadyExists(ClientModel, { cpf: newData.cpf }, Message.cpfAlreadyExists);
  }
  if (newData.address) {
    for (const [key, value] of Object.entries(newData.address)) {
      if (value != undefined) currentClient.address[key] = value;
    }
    delete newData.address;
  }
  for (const [key, value] of Object.entries(newData)) {
    currentClient[key] = value;
  }
  await ClientModel.updateOne({ _id: id }, { $set: { ...currentClient } });
  return await getObjectOrThrowError(ClientModel, { _id: id });
};

const deleteClientService = async (id: string): Promise<void> => {
  await getObjectOrThrowError(ClientModel, { _id: id });
  await ClientModel.deleteOne({ _id: id });
};

export {
  createClientService,
  getOneClientService,
  listAllClientsService,
  updateClientService,
  deleteClientService,
};
