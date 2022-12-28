import AppDataSource from "../data-source";
import { AppError } from "../errors/app.error";
import { IUserRegisterRequest } from "../interfaces/user.interface";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../entities/user.entity";
import { getObjectOrThrowError } from "../utils/service.utils";

const createSessionService = async ({
  username,
  password,
}: IUserRegisterRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await getObjectOrThrowError(
    userRepository,
    { username },
    "Invalid username or password",
    401
  );
  const matchPassword = await compare(password, user.password);
  if (!matchPassword) throw new AppError("Invalid credentials", 403);

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
