import { AppError } from "../errors/app.error";
import { Message } from "./messages.utils";
import { StatusCode } from "./statusCode.utils";

const getObjectOrThrowError = async (
  repository: any,
  options: any,
) => {
  const object = await repository.findOne({
    where: {
      ...options,
    },
  });
  if (!object) throw new AppError(Message.notFound, StatusCode.notFound);
  return object;
};

const getListOrThrowError = async () => {};
// 
// 
// 
// 
// 

const resourceAlreadyExists = async (
  repository: any,
  options: any,
) => {
  const object = await repository.findOne({
    where: {
      ...options,
    },
  });
  if (object) throw new AppError(Message.alreadyExists, StatusCode.conflict);
};

export { getObjectOrThrowError, resourceAlreadyExists, getListOrThrowError };
