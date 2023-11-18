import { useEffect, useState } from "react"
import { PageBase } from "../../components/pageBase/pageBase"
import { useTitulo } from "../../providers/titulo"
import { MeusInvestimentosType } from "../../interfaces"
import { CardInvestimento } from "./cardInvestimento"

export const ListaInvestimento = () => {
  const [investimentos, setInvestimentos] = useState([] as Array<MeusInvestimentosType>)

  const { meusTitulos } = useTitulo()

  useEffect(() => {
    carregarInvestimentos()
  }, [])

  const carregarInvestimentos = async () => {
    const invest: Array<MeusInvestimentosType> = await meusTitulos()
    setInvestimentos(invest)
  }

  return (
    <>
      <PageBase>
        {
          investimentos.map((inv, id) => (<CardInvestimento key={id} ativo={inv} idKey={id} />))
        }
      </PageBase>
    </>
  )
}