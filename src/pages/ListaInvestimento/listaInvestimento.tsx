import { useEffect, useState } from "react"
import { PageBase } from "../../components/pageBase/pageBase"
import { useTitulo } from "../../providers/titulo"
import { MeusInvestimentosType } from "../../interfaces"
import { CardInvestimento } from "../../components/carInvestimento/cardInvestimento"

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
        {/* {investimentos.map(inv => (
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    {inv.ticket} - {inv.nome_empresa}
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <div>Valor: {inv.valor}</div>
                  <div>Quantidade: {inv.quantidade}</div>
                  <div>Ticket Médio: {inv.custo_medio}</div>
                  <div>Recomendação: {inv.recomendacao}</div>
                </div>
              </div>
            </div>
          </div>
        ))} */}
        {
          investimentos.map((inv, id) => (<CardInvestimento key={id} ativo={inv} idKey={id} />))
        }


      </PageBase>
    </>
  )
}