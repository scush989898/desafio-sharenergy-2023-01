import { IUserRegisterRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import { hash } from "bcryptjs";
import { getObjectOrThrowError, resourceAlreadyExists } from "../utils/service.utils";
import { Message } from "../utils/messages.utils";
import { UserModel } from "../models/user.model";

const createUserService = async (user: IUserRegisterRequest): Promise<any> => {
  user.password = await hash(user.password, 10);
  await resourceAlreadyExists(
    UserModel,
    { username: user.username },
    Message.usernameAlreadyExists
  );
  return await UserModel.create(user);
};

const getUserProfileService = async (id: string): Promise<any> => {
  return await getObjectOrThrowError(UserModel, { _id: id });
};

const updateUserService = async (id: string, newData: IUserUpdateRequest): Promise<any> => {
  if (newData.password) {
    newData.password = await hash(newData.password, 10);
  }
  const currentUser = await getObjectOrThrowError(UserModel, { _id: id });

  if (newData.username && newData.username != currentUser.username) {
    await resourceAlreadyExists(
      UserModel,
      { username: newData.username },
      Message.usernameAlreadyExists
    );
  }
  await UserModel.updateOne({ _id: id }, newData);
  return await getObjectOrThrowError(UserModel, { _id: id });
};

const deleteUserService = async (id: string): Promise<void> => {
  await getObjectOrThrowError(UserModel, { _id: id });
  await UserModel.deleteOne({ _id: id });
};

export { createUserService, getUserProfileService, updateUserService, deleteUserService };
