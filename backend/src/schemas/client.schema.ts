import { IClientRequest, IClientUpdateRequest } from "../interfaces/client.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";

const clientRegisterSchema: SchemaOf<IClientRequest> = yup.object().shape({
  name: yup.string().required().max(90, "Invalid name"),
  email: yup.string().email().required().max(70, "Invalid email"),
  phone: yup.string().required().max(11, "Invalid phone"),
  address: yup.object({
    district: yup.string().required().max(120, "Invalid district"),
    zipCode: yup.string().required().max(8, "Invalid zip code"),
    city: yup.string().required().max(60, "Invalid city"),
    state: yup.string().required().max(20, "Invalid state"),
    number: yup.string().max(10, "Invalid number"),
    complement: yup.string().max(20, "Invalid complement"),
  }),
  cpf: yup.string().required().max(11, "Invalid cpf"),
});

const clientUpdateSchema: SchemaOf<IClientUpdateRequest> = yup.object().shape({
  name: yup.string().max(90, "Invalid name"),
  email: yup.string().email().max(70, "Invalid email"),
  phone: yup.string().max(11, "Invalid phone"),
  address: yup.object({
    district: yup.string().max(120, "Invalid district"),
    zipCode: yup.string().max(8, "Invalid zip code"),
    city: yup.string().max(60, "Invalid city"),
    state: yup.string().max(20, "Invalid state"),
    number: yup.string().max(10, "Invalid number"),
    complement: yup.string().max(20, "Invalid complement"),
  }),
  cpf: yup.string().max(11, "Invalid cpf"),
});

export { clientRegisterSchema, clientUpdateSchema };
