import AppDataSource from "../data-source";
import { AppError } from "../errors/app.error";
import { IUserRegisterRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);

const createUserService = async (user: IUserRegisterRequest): Promise<User> => {
  user.password = await hash(user.password, 10);

  const userExists = await userRepository.findOneBy({ username: user.username });

  if (userExists) {
    throw new AppError("User already exists", 400);
  }
  const newUser = userRepository.create(user);

  return await userRepository.save(newUser);

};

const getUserProfileService = async (id:string): Promise<User> => {
  const user = await userRepository.findOneBy({id})

  if(!user){
    throw new AppError("User not found", 404)
  }
  return user;
};

const updateUserService = async (): Promise<String> => {
    return ""
};

const deleteUserService = async (id:string): Promise<void> => {
  const user = await userRepository.findOneBy({id})

  if(!user){
    throw new AppError("User not found", 404)
  }

  await userRepository.delete({id})

};

export { createUserService, getUserProfileService, updateUserService, deleteUserService };
