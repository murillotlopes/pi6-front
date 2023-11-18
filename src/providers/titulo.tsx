import { createContext, useContext } from "react";
import { MeusInvestimentosType, TituloType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";

interface TituloContextData {
  buscarTitulo: (data: string) => Promise<TituloType>
  meusTitulos: () => Promise<Array<MeusInvestimentosType>>
}

const TituloContext = createContext<TituloContextData>({} as TituloContextData)

const useTitulo = () => useContext(TituloContext)

const TituloProvider = ({ children }: childrenProps) => {

  const buscarTitulo = async (ticket: string) => {
    try {
      const data = await api.get(`/titulo/buscar/${ticket}`)
      return data.data
    } catch (error) {
      toast.error(`O ticket ${ticket} não pode ser encontrado!`)
      console.error(error)
    }
  }

  const meusTitulos = async () => {
    try {
      const data = await api.get('/titulo/meus-titulos')
      return data.data as Array<MeusInvestimentosType>
    } catch (error) {
      toast.error('Não foi possível listar seus investimentos.\nTente novamente!')
      console.error(error)
      return [] as Array<MeusInvestimentosType>
    }
  }

  return (
    <TituloContext.Provider value={{
      buscarTitulo,
      meusTitulos
    }}>
      {children}
    </TituloContext.Provider>
  )

}

export { TituloProvider, useTitulo }