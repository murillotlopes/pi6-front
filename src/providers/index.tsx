import { childrenProps } from "../interfaces";
import { LoginProvider } from "./login";

export const AppProvider = ({ children }: childrenProps) => {
  return (
    <>
      <LoginProvider>
        {children}
      </LoginProvider>
    </>
  )
}