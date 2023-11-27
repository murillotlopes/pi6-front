import { createContext, useContext } from "react";
import { OperacaoType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useLogin } from "./login";

interface OperacaoContextData {
  salvarOperacao: (data: OperacaoType) => Promise<void>
  atualizarOperacao: (data: OperacaoType) => Promise<void>
  excluirOperacao: (id: number) => Promise<any>
}

const OperacaoContext = createContext<OperacaoContextData>({} as OperacaoContextData)

const useOperacao = () => useContext(OperacaoContext)

const OperacaoProvider = ({ children }: childrenProps) => {
  const { autenticadorToken } = useLogin()

  const salvarOperacao = async (data: OperacaoType) => {
    api.post('/operacao/salvar', data, { headers: autenticadorToken() }).then(_ => {
      toast.success('Salvo')
    }).catch(_ => {
      toast.error('Algo deu errado.\nTente novamente!')
    })
  }

  const atualizarOperacao = async (data: OperacaoType) => {
    api.patch(`/operacao/atualizar`, data, { headers: autenticadorToken() }).then(_ => {
      toast.success('Atualizado com sucesso')
    }).catch(_ => {
      toast.error('Algo deu errado.\nTente novamente!')
    })
  }

  const excluirOperacao = async (id: number) => {
    try {
      await api.delete(`/operacao/apagar/${id}`, { headers: autenticadorToken() })
      toast.success('Excluído com sucesso')
    } catch (error) {
      toast.error('Algo deu errado.\nTente novamente!')
      return true
    }
  }

  return (
    <OperacaoContext.Provider value={{
      salvarOperacao,
      atualizarOperacao,
      excluirOperacao
    }}>
      {children}
    </OperacaoContext.Provider>
  )
}

export { OperacaoProvider, useOperacao }