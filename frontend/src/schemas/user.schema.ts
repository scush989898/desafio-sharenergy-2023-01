import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser } from "../interfaces/user.interface";

export const userSchema: SchemaOf<IUser> = yup.object().shape({
  username: yup.string().required("Nome obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});
