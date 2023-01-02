import { IClientRequest, IClientUpdateRequest } from "../interfaces/client.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { Regex } from "../utils/regex.utils";
import { Message } from "../utils/messages.utils";

const clientRegisterSchema: SchemaOf<IClientRequest> = yup.object().shape({
  name: yup
    .string()
    .required()
    .max(90, Message.invalidName)
    .matches(Regex.genericNameField, Message.nameField),
  email: yup.string().email().required().max(70, Message.invalidEmail),
  phone: yup
    .string()
    .required()
    .max(11, Message.invalidPhone)
    .matches(Regex.phone, Message.phoneField),
  address: yup.object({
    district: yup.string().required().max(120, Message.invalidDistrict),
    zipCode: yup.string().required().max(8, Message.invalidZipCode),
    city: yup.string().required().max(60, Message.invalidCity),
    state: yup.string().required().max(20, Message.invalidState),
    number: yup.string().max(10, Message.invalidNumber),
    complement: yup.string().max(20, Message.invalidComplement),
  }),
  cpf: yup.string().required().max(11, Message.invalidCPF).matches(Regex.cpf, Message.cpfField),
});

const clientUpdateSchema: SchemaOf<IClientUpdateRequest> = yup.object().shape({
  name: yup
    .string()
    .max(90, Message.invalidName)
    .matches(Regex.genericNameField, Message.nameField),
  email: yup.string().email().max(70, Message.invalidEmail),
  phone: yup.string().max(11, Message.invalidPhone).matches(Regex.phone, Message.phoneField),
  address: yup.object({
    district: yup.string().max(120, Message.invalidDistrict),
    zipCode: yup.string().max(8, Message.invalidZipCode),
    city: yup.string().max(60, Message.invalidCity),
    state: yup.string().max(20, Message.invalidState),
    number: yup.string().max(10, Message.invalidNumber),
    complement: yup.string().max(20, Message.invalidComplement),
  }),
  cpf: yup.string().max(11, Message.invalidCPF).matches(Regex.cpf, Message.cpfField),
});

export { clientRegisterSchema, clientUpdateSchema };
