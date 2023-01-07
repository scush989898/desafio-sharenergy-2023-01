import { AppError } from "../errors/app.error";
import { IUserRegisterRequest } from "../interfaces/user.interface";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { getObjectOrThrowError } from "../utils/service.utils";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";
import { UserModel } from "../models/user.model";

const createSessionService = async ({
  username,
  password,
}: IUserRegisterRequest): Promise<string> => {
  const user = await getObjectOrThrowError(UserModel, { username });
  const matchPassword = await compare(password, user.password);
  if (!matchPassword) throw new AppError(Message.invalidCredentials, StatusCode.unauthorized);

  const token = jwt.sign(
    {
      username: user.username,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;
