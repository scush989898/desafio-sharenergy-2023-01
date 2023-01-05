import { createContext, ReactNode, useState } from "react";
type TokenContextProps = {
  children: ReactNode;
};
const initial = {
  token: "",
  setToken: () => {},
  isLogged: false,
  setIsLogged: () => {},
};

export type TokenContextType = {
  token: string;
  setToken: (newState: string) => void;
  isLogged: boolean;
  setIsLogged: (newState: boolean) => void;
};

export const TokenContext = createContext<TokenContextType>(initial);

export const TokenContextProvider = ({ children }: TokenContextProps) => {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <TokenContext.Provider value={{ token, setToken, isLogged, setIsLogged }}>
      {children}
    </TokenContext.Provider>
  );
};
