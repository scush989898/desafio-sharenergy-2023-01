import { IClientRequest, IClientUpdateRequest } from "../interfaces/client.interface";
import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import {
  getObjectOrThrowError,
  resourceAlreadyExists,
  resourceAlreadyExistsMultipleParams,
} from "../utils/service.utils";
import { Address } from "../entities/address.entity";
import { Message } from "../utils/messages.utils";

const clientRepository = AppDataSource.getRepository(Client);
const addressRepository = AppDataSource.getRepository(Address);

const createClientService = async (newClient: IClientRequest): Promise<Client> => {
  const { cpf, email } = newClient;
  await resourceAlreadyExistsMultipleParams(
    clientRepository,
    [{ cpf }, { email }],
    Message.cpfOrEmailAlreadyExists
  );

  const newAddress = addressRepository.create(newClient.address);
  newClient.address = await addressRepository.save(newAddress);

  const client = clientRepository.create(newClient);
  return await clientRepository.save(client);
};

const getOneClientService = async (id: string): Promise<Client> => {
  return await getObjectOrThrowError(clientRepository, { id });
};

const listAllClientsService = async (): Promise<Client[]> => {
  return await clientRepository.find();
};

const updateClientService = async (id: string, newData: IClientUpdateRequest): Promise<Client> => {
  const currentClient = await getObjectOrThrowError(clientRepository, { id });
  const currentAddress = currentClient.address;
  delete currentClient.address;

  if (newData.address) {
    const updatedAddress = { ...currentAddress, ...newData.address };
    await addressRepository.update({ id: updatedAddress.id }, updatedAddress);
    delete newData.address;
  }

  if (newData.email && newData.email != currentClient.email) {
    await resourceAlreadyExists(
      clientRepository,
      { email: newData.email },
      Message.emailAlreadyExists
    );
  }
  if (newData.cpf && newData.cpf != currentClient.cpf) {
    await resourceAlreadyExists(clientRepository, { cpf: newData.cpf }, Message.cpfAlreadyExists);
  }

  const updatedClient: Client = { ...currentClient, ...newData };
  await clientRepository.update({ id }, updatedClient);
  return await getObjectOrThrowError(clientRepository, { id });
};

const deleteClientService = async (id: string): Promise<void> => {
  const client: Client = await getObjectOrThrowError(clientRepository, { id });
  await clientRepository.delete({ id });
  await addressRepository.delete({ id: client.address.id });
};

export {
  createClientService,
  getOneClientService,
  listAllClientsService,
  updateClientService,
  deleteClientService,
};
