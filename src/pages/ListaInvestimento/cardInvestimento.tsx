import { Link } from "react-router-dom"
import { CardInvestimentoProps } from "../../interfaces"
import { FaEye } from 'react-icons/fa6'

export const CardInvestimento = ({ ativo, idKey }: CardInvestimentoProps) => {
  return (
    <>
      <div className="accordion" id={`A${idKey}`}>
        <div className="card">
          <div className="card-header" id={ativo.ticket}>
            <h5 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${ativo.ticket}${idKey}`} aria-expanded="true" aria-controls={`${ativo.ticket}${idKey}`}>
                {ativo.ticket} - {ativo.nome_empresa}
              </button><Link to={`/operacoes/${ativo.id}`}><FaEye /></Link>
            </h5>
          </div>
          <div id={`${ativo.ticket}${idKey}`} className="collapse" aria-labelledby={ativo.ticket} data-parent={`#A${idKey}`}>
            <div className="card-body">
              <div>Total: {ativo.total}</div>
              <div>Quantidade: {ativo.quantidade}</div>
              <div>Ticket Médio: {ativo.custo_medio}</div>
              <div>Recomendação: {ativo.recomendacao}</div>
              <div>Lucro realizado: {ativo.lucro}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}