import { createContext, useContext } from "react";
import { OperacaoType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";

interface OperacaoContextData {
  salvarOperacao: (data: OperacaoType) => Promise<void>

}

const OperacaoContext = createContext<OperacaoContextData>({} as OperacaoContextData)

const useOperacao = () => useContext(OperacaoContext)

const OperacaoProvider = ({ children }: childrenProps) => {

  const salvarOperacao = async (data: OperacaoType) => {
    api.post('/operacao/salvar', data).then(_ => {

      toast.success('Salvo')
    }).catch(_ => {
      toast.error('Algo deu erro.\nTente novamente!')
    })
  }

  return (
    <OperacaoContext.Provider value={{
      salvarOperacao,
    }}>
      {children}
    </OperacaoContext.Provider>
  )
}

export { OperacaoProvider, useOperacao }