import { createUserService } from "./services/user.service";
import { UserModel } from "./models/user.model";
import { IUserRegisterRequest } from "./interfaces/user.interface";

export async function SetInitialUser() {
  const defaultUser: IUserRegisterRequest = {
    username: "desafiosharenergy",
    password: "sh@r3n3rgy",
  };

  const user = await UserModel.findOne({ username: defaultUser.username });
  if (!user) {
    await createUserService(defaultUser);
  }
}
