import { createContext, ReactNode, useState } from "react";

type mainContextProps = {
  children: ReactNode;
};

interface IClient {
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

const initialClient: IClient = {
  id: "",
  name: "",
  email: "",
  phone: "",
  cpf: "",
  address: {
    district: "",
    zipCode: "",
    city: "",
    state: "",
    street: "",
  },
};
const initial = {
  token: "",
  setToken: () => {},
  isLogged: false,
  setIsLogged: () => {},
  modalCreate: false,
  setModalCreate: () => {},
  modalUpdate: false,
  setModalUpdate: () => {},
  modalView: false,
  setModalView: () => {},
  currentClient: initialClient,
  setCurrentClient: () => {},
};

export type mainContextType = {
  token: string;
  setToken: (newState: string) => void;
  isLogged: boolean;
  setIsLogged: (newState: boolean) => void;
  modalCreate: boolean;
  setModalCreate: (newState: boolean) => void;
  modalUpdate: boolean;
  setModalUpdate: (newState: boolean) => void;
  modalView: boolean;
  setModalView: (newState: boolean) => void;
  currentClient: IClient;
  setCurrentClient: (newClient: IClient) => void;
};

export const mainContext = createContext<mainContextType>(initial);

export const MainContextProvider = ({ children }: mainContextProps): JSX.Element => {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [currentClient, setCurrentClient] = useState(initialClient);

  return (
    <mainContext.Provider
      value={{
        token,
        setToken,
        isLogged,
        setIsLogged,
        modalCreate,
        modalUpdate,
        modalView,
        setModalCreate,
        setModalUpdate,
        setModalView,
        currentClient,
        setCurrentClient,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
