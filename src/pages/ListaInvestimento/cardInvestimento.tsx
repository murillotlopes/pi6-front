import { Link } from "react-router-dom"
import { CardInvestimentoProps } from "../../interfaces"
import { FaEye } from 'react-icons/fa6'
import { abreviarTexto, recomendacaoBadge, recomendacaoCompra, valorBR } from "../../util"

export const CardInvestimento = ({ ativo, idKey }: CardInvestimentoProps) => {
  return (
    <>
      <div className="col-4">
        <div className="accordion mb-2 ml-2" id={`A${idKey}`}>
          <div className="card">
            <div className="card-header" id={ativo.ticket}>
              <h5 className="mb-0 d-flex justify-content-between">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${ativo.ticket}${idKey}`} aria-expanded="true" aria-controls={`${ativo.ticket}${idKey}`}>
                  {abreviarTexto(`${ativo.ticket} - ${ativo.nome_empresa}`, 40)}
                </button><Link to={`/operacoes/${ativo.id}`}><FaEye /></Link>
              </h5>
            </div>
            <div id={`${ativo.ticket}${idKey}`} className="collapse" aria-labelledby={ativo.ticket} data-parent={`#A${idKey}`}>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item"><strong>Total:</strong> {valorBR(+ativo.total)}</div>
                  <div className="list-group-item"><strong>Quantidade:</strong> {ativo.quantidade}</div>
                  <div className="list-group-item"><strong>Ticket Médio:</strong> {valorBR(+ativo.custo_medio)}</div>
                  <div className="list-group-item"><strong>Recomendação:</strong> <span className={`p-1 badge ${recomendacaoBadge(ativo.recomendacao)}`}>{recomendacaoCompra(ativo.recomendacao)}</span></div>
                  <div className="list-group-item"><strong>Lucro realizado:</strong> {valorBR(+ativo.lucro)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}