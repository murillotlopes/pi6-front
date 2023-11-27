import { createContext, useContext } from "react";
import { MeusInvestimentosType, TituloType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useLogin } from "./login";

interface TituloContextData {
  buscarTitulo: (data: string) => Promise<TituloType>
  meusTitulos: () => Promise<Array<MeusInvestimentosType>>
  listarOperacoesTitulo: (tituloId: number) => Promise<TituloType>
}

const TituloContext = createContext<TituloContextData>({} as TituloContextData)

const useTitulo = () => useContext(TituloContext)

const TituloProvider = ({ children }: childrenProps) => {
  const { autenticadorToken } = useLogin()

  const buscarTitulo = async (ticket: string) => {
    try {
      const data = await api.get(`/titulo/buscar/${ticket}`, { headers: autenticadorToken() })
      return data.data
    } catch (error) {
      toast.error(`O ticket ${ticket} não pode ser encontrado!`)
      console.error(error)
    }
  }

  const meusTitulos = async () => {
    try {
      const data = await api.get('/titulo/meus-titulos', { headers: autenticadorToken() })
      return data.data as Array<MeusInvestimentosType>
    } catch (error) {
      toast.error('Não foi possível listar seus investimentos.\nTente novamente!')
      console.error(error)
      return [] as Array<MeusInvestimentosType>
    }
  }

  const listarOperacoesTitulo = async (tituloId: number) => {
    try {
      const res = await api.get(`/titulo/operacao-titulo/${tituloId}`, { headers: autenticadorToken() })
      return res.data as TituloType
    } catch (error) {
      toast.error('Algo deu erro.\nTente novamente!')
      return {} as TituloType
    }
  }

  return (
    <TituloContext.Provider value={{
      buscarTitulo,
      meusTitulos,
      listarOperacoesTitulo
    }}>
      {children}
    </TituloContext.Provider>
  )
}

export { TituloProvider, useTitulo }