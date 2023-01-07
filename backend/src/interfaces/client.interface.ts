interface IClientAddressRequest {
  district: string;
  zipCode: string;
  city: string;
  state: string;
  street: string;
  number?: string;
}

interface IClientRequest {
  name: string;
  email: string;
  phone: string;
  address: IClientAddressRequest;
  cpf: string;
}

interface IClientAddressUpdateRequest {
  district?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  number?: string;
  street?: string;
}

interface IClientUpdateRequest {
  name?: string;
  email?: string;
  phone?: string;
  address?: IClientAddressUpdateRequest;
  cpf?: string;
}

export { IClientAddressRequest, IClientRequest, IClientAddressUpdateRequest, IClientUpdateRequest };
