import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/app.error";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) throw new AppError(Message.invalidToken, StatusCode.unauthorized);

  token = token.split(" ")[1];

  jwt.verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
    if (error) throw new AppError(Message.invalidToken, StatusCode.unauthorized);
  });
  next();
};

export default ensureAuthMiddleware;
