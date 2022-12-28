import { IUserRegisterRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";

const userRegisterSchema: SchemaOf<IUserRegisterRequest> = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const userUpdateSchema: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});

export { userRegisterSchema, userUpdateSchema };
