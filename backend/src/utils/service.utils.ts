import { AppError } from "../errors/app.error";
import { Message } from "./messages.utils";
import { StatusCode } from "./statusCode.utils";

const getObjectOrThrowError = async (model: any, options: any) => {
  try {
    const object = await model.findOne({
      ...options,
    });
    if (!object) throw new Error();
    return object;
  } catch (error) {
    throw new AppError(Message.notFound, StatusCode.notFound);
  }
};

const resourceAlreadyExists = async (model: any, options: any, message = Message.alreadyExists) => {
  const object = await model.findOne({
    ...options,
  });

  if (!object) return false;
  throw new AppError(message, StatusCode.conflict);
};

const resourceAlreadyExistsMultipleParams = async (
  repository: any,
  options: any,
  message = Message.alreadyExists
) => {
  const object = await repository.findOne({
    $or: options,
  });
  if (!object) return false;
  throw new AppError(message, StatusCode.conflict);
};

export { getObjectOrThrowError, resourceAlreadyExists, resourceAlreadyExistsMultipleParams };
