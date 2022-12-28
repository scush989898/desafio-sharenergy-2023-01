import { IClientRequest, IClientUpdateRequest } from "../interfaces/client.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { SchemaMessage } from "../utils/messages.utils";

const clientRegisterSchema: SchemaOf<IClientRequest> = yup.object().shape({
  name: yup.string().required().max(90, SchemaMessage.invalidName),
  email: yup.string().email().required().max(70, SchemaMessage.invalidEmail),
  phone: yup.string().required().max(11, SchemaMessage.invalidPhone),
  address: yup.object({
    district: yup.string().required().max(120, SchemaMessage.invalidDistrict),
    zipCode: yup.string().required().max(8, SchemaMessage.invalidZipCode),
    city: yup.string().required().max(60, SchemaMessage.invalidCity),
    state: yup.string().required().max(20, SchemaMessage.invalidState),
    number: yup.string().max(10, SchemaMessage.invalidNumber),
    complement: yup.string().max(20, SchemaMessage.invalidComplement),
  }),
  cpf: yup.string().required().max(11, SchemaMessage.invalidCPF),
});

const clientUpdateSchema: SchemaOf<IClientUpdateRequest> = yup.object().shape({
  name: yup.string().max(90, SchemaMessage.invalidName),
  email: yup.string().email().max(70, SchemaMessage.invalidEmail),
  phone: yup.string().max(11, SchemaMessage.invalidPhone),
  address: yup.object({
    district: yup.string().max(120, SchemaMessage.invalidDistrict),
    zipCode: yup.string().max(8, SchemaMessage.invalidZipCode),
    city: yup.string().max(60, SchemaMessage.invalidCity),
    state: yup.string().max(20, SchemaMessage.invalidState),
    number: yup.string().max(10, SchemaMessage.invalidNumber),
    complement: yup.string().max(20, SchemaMessage.invalidComplement),
  }),
  cpf: yup.string().max(11, SchemaMessage.invalidCPF),
});

export { clientRegisterSchema, clientUpdateSchema };
