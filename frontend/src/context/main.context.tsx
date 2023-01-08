import { createContext, ReactNode, useState } from "react";
import { IClientResponse } from "../interfaces/client.interface";

const initialClient: IClientResponse = {
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
  token: localStorage.getItem("@TOKEN") || sessionStorage.getItem("@TOKEN"),
  setToken: () => {},
  modalCreate: false,
  setModalCreate: () => {},
  modalUpdate: false,
  setModalUpdate: () => {},
  modalView: false,
  setModalView: () => {},
  currentClient: initialClient,
  setCurrentClient: () => {},
  modalError: false,
  setModalError: () => {},
  messageError: "",
  setMessageError: () => {},
};

type mainContextProps = {
  children: ReactNode;
};

export type mainContextType = {
  token: string | null;
  setToken: (newState: string) => void;
  modalCreate: boolean;
  setModalCreate: (newState: boolean) => void;
  modalUpdate: boolean;
  setModalUpdate: (newState: boolean) => void;
  modalView: boolean;
  setModalView: (newState: boolean) => void;
  currentClient: IClientResponse;
  setCurrentClient: (newClient: IClientResponse) => void;
  modalError: boolean;
  setModalError: (newState: boolean) => void;
  messageError: string;
  setMessageError: (newState: string) => void;
};

export const mainContext = createContext<mainContextType>(initial);

export const MainContextProvider = ({ children }: mainContextProps): JSX.Element => {
  const [token, setToken] = useState(
    localStorage.getItem("@TOKEN") || sessionStorage.getItem("@TOKEN")
  );
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [currentClient, setCurrentClient] = useState(initialClient);

  const [modalError, setModalError] = useState(false);
  const [messageError, setMessageError] = useState("");

  return (
    <mainContext.Provider
      value={{
        token,
        setToken,
        modalCreate,
        modalUpdate,
        modalView,
        setModalCreate,
        setModalUpdate,
        setModalView,
        currentClient,
        setCurrentClient,
        modalError,
        setModalError,
        messageError,
        setMessageError,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
