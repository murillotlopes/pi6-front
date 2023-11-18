import { childrenProps } from "../interfaces";
import { LoginProvider } from "./login";
import { OperacaoProvider } from "./operacao";
import { TituloProvider } from "./titulo";

export const AppProvider = ({ children }: childrenProps) => {
  return (
    <>
      <LoginProvider>
        <OperacaoProvider>
          <TituloProvider>
            {children}
          </TituloProvider>
        </OperacaoProvider>
      </LoginProvider>
    </>
  )
}