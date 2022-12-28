import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";

const validateParam = async (req: Request, res: Response, next: NextFunction) => {
  let paramId = req.params.id;
  const reg =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

  if (!reg.test(paramId)) throw new AppError("Invalid id format", 400);

  next();
};

export default validateParam;
