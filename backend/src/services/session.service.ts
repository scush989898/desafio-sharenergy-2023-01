import AppDataSource from "../data-source";
import { AppError } from "../errors/app.error";
import { IUserRegisterRequest } from "../interfaces/user.interface";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../entities/user.entity";
import { getObjectOrThrowError } from "../utils/service.utils";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";

const createSessionService = async ({
  username,
  password,
}: IUserRegisterRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await getObjectOrThrowError(userRepository, { username });
  const matchPassword = await compare(password, user.password);
  if (!matchPassword) throw new AppError(Message.invalidCredentials, StatusCode.unauthorized);

  const token = jwt.sign(
    {
      username: user.username,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id,
      expiresIn: "1h",
    }
  );

  return token;
};

export default createSessionService;
