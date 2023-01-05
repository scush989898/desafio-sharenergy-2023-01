import { ReactNode } from "react";
import { TokenContextProvider } from "./token.context";

interface Iprops {
  children: ReactNode;
}

function Providers({ children }: Iprops) {
  return <TokenContextProvider>{children}</TokenContextProvider>;
}

export default Providers