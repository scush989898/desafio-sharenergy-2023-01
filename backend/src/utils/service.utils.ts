import { AppError } from "../errors/app.error";

const getObjectOrThrowError = async (
  Repository: any,
  options: any,
  message: string = "Not Found",
  httpcode: number = 404
) => {
  const object = await Repository.findOne({
    where: {
      ...options,
    },
  });
  if (!object) throw new AppError(message, httpcode);
  return object;
};

const resourceAlreadyExists = async (
  Repository: any,
  options: any,
  EntityName: string = "Resource"
) => {
  const object = await Repository.findOne({
    where: {
      ...options,
    },
  });
  if (object) throw new AppError(`${EntityName} Already exists`, 409);
};

export { getObjectOrThrowError, resourceAlreadyExists };
