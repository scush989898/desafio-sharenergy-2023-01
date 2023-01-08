export interface IClientUpdate {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  address: {
    district?: string;
    zipCode?: string;
    city?: string;
    state?: string;
    street?: string;
    number?: string | null | undefined;
  };
}

export interface IClientCreate {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: {
    district: string;
    zipCode: string;
    city: string;
    state: string;
    street: string;
    number?: string | null | undefined;
  };
}

export interface IClientResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: {
    district: string;
    zipCode: string;
    city: string;
    state: string;
    street: string;
    number?: string | null | undefined;
  };
}
