import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/app.error";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";

const hasPermission = async (req: Request, res: Response, next: NextFunction) => {
  let paramId = req.params.id;
  let tokenId = "";

  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  jwt.verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
    tokenId = decoded.sub;
  });

  if (!(req.method == "GET" || paramId == tokenId)) {
    throw new AppError(Message.noPermission, StatusCode.forbidden);
  }

  next();
};

export default hasPermission;
