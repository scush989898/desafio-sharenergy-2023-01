import { AppError } from "../errors/app.error";
import { Message } from "./messages.utils";
import { StatusCode } from "./statusCode.utils";

const getObjectOrThrowError = async (repository: any, options: any) => {
  const object = await repository.findOne({
    where: {
      ...options,
    },
  });
  if (!object) throw new AppError(Message.notFound, StatusCode.notFound);
  return object;
};

const getListOrThrowError = async (repository: any) => {
  const list = await repository.find();
  if (list.length == 0) throw new AppError(Message.notFound, StatusCode.notFound);
  return list;
};

const resourceAlreadyExists = async (
  repository: any,
  options: any,
  message = Message.alreadyExists
) => {
  const object = await repository.findOne({
    where: {
      ...options,
    },
  });
  if (object) throw new AppError(message, StatusCode.conflict);
};

const resourceAlreadyExistsMultipleParams = async (
  repository: any,
  options: any,
  message = Message.alreadyExists
) => {
  const object = await repository.findOne({
    where: options,
  });
  if (object) throw new AppError(message, StatusCode.conflict);
};

export {
  getObjectOrThrowError,
  resourceAlreadyExists,
  getListOrThrowError,
  resourceAlreadyExistsMultipleParams,
};
