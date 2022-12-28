import AppDataSource from "../data-source";
import { IUserRegisterRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";
import { getObjectOrThrowError, resourceAlreadyExists } from "../utils/service.utils";

const userRepository = AppDataSource.getRepository(User);

const createUserService = async (user: IUserRegisterRequest): Promise<User> => {

  user.password = await hash(user.password, 10);
  await resourceAlreadyExists(userRepository, { username: user.username });
  const newUser = userRepository.create(user);
  return await userRepository.save(newUser);

};

const getUserProfileService = async (id:string): Promise<User> => {
  return getObjectOrThrowError(userRepository, {id});
};


const updateUserService = async (): Promise<String> => {
    return ""
};

const deleteUserService = async (id:string): Promise<void> => {
  await getObjectOrThrowError (userRepository, {id})
  await userRepository.delete({id})
};

export { createUserService, getUserProfileService, updateUserService, deleteUserService };
