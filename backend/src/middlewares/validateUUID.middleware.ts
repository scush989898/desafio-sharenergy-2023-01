import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";
import { Regex } from "../utils/regex.utils";

const validateParam = async (req: Request, res: Response, next: NextFunction) => {
  let paramId = req.params.id;

  if (!Regex.uuid.test(paramId)) throw new AppError(Message.invalidIdFormat, StatusCode.badRequest);

  next();
};

export default validateParam;
