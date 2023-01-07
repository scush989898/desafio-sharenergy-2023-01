import { ReactNode } from "react";
import { MainContextProvider } from "./main.context";

interface Iprops {
  children: ReactNode;
}

function Providers({ children }: Iprops) {
  return <MainContextProvider>{children}</MainContextProvider>;
}

export default Providers;
