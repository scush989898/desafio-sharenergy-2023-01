import AppDataSource from "../data-source";
import { IUserRegisterRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";
import { getObjectOrThrowError, resourceAlreadyExists } from "../utils/service.utils";
import { Message } from "../utils/messages.utils";

const userRepository = AppDataSource.getRepository(User);

const createUserService = async (user: IUserRegisterRequest): Promise<User> => {
  user.password = await hash(user.password, 10);
  await resourceAlreadyExists(
    userRepository,
    { username: user.username },
    Message.usernameAlreadyExists
  );
  const newUser = userRepository.create(user);
  return await userRepository.save(newUser);
};

const getUserProfileService = async (id: string): Promise<User> => {
  return await getObjectOrThrowError(userRepository, { id });
};

const updateUserService = async (id: string, newData: IUserUpdateRequest): Promise<User> => {
  if (newData.password) {
    newData.password = await hash(newData.password, 10);
  }

  const currentUser = await getObjectOrThrowError(userRepository, { id });

  if (newData.username && newData.username != currentUser.username) {
    await resourceAlreadyExists(
      userRepository,
      { username: newData.username },
      Message.usernameAlreadyExists
    );
  }

  const updatedUser = { ...currentUser, ...newData };
  await userRepository.update({ id }, updatedUser);

  return await getObjectOrThrowError(userRepository, { id });
};

const deleteUserService = async (id: string): Promise<void> => {
  await getObjectOrThrowError(userRepository, { id });
  await userRepository.delete({ id });
};

export { createUserService, getUserProfileService, updateUserService, deleteUserService };
