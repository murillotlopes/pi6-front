import { useParams } from "react-router-dom"
import { PageBase } from "../../components/pageBase/pageBase"
import { useTitulo } from "../../providers/titulo"
import { useEffect, useState } from "react"
import { OperacaoType } from "../../interfaces"
import { CardOperacao } from "./cardOperacao"

export const ListaOperacao = () => {
  const [operacoes, setOperacoes] = useState([] as Array<OperacaoType> | undefined)
  const [excluindoOperacao, setExcluindoOperacao] = useState(0)
  const { ticketId } = useParams()

  const { listarOperacoesTitulo } = useTitulo()

  const buscarOperacoes = async () => {
    const ativo = await listarOperacoesTitulo(Number(ticketId))

    setOperacoes(ativo.operacoes)
  }

  useEffect(() => {
    buscarOperacoes()
  }, [])

  const atualizarLista = () => {
    if (excluindoOperacao !== 0) {
      setOperacoes(operacoes?.filter(op => op.id !== excluindoOperacao))
    }
  }

  useEffect(() => {
    atualizarLista()
  }, [excluindoOperacao])

  return (
    <>
      <PageBase>
        <ul>
          {operacoes?.map(operacao => <CardOperacao key={operacao.id} operacaoSalvo={operacao} setExcluindoOperacao={setExcluindoOperacao} />)}
        </ul>
      </PageBase>
    </>
  )
}