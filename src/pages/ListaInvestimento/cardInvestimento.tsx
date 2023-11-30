import { Link } from "react-router-dom"
import { CardInvestimentoProps } from "../../interfaces"
import { FaEye } from 'react-icons/fa6'
import { abreviarTexto, valorBR } from "../../util"

export const CardInvestimento = ({ ativo, idKey }: CardInvestimentoProps) => {
  return (
    <>
      <div className="col-4">
        <div className="accordion m-5" id={`A${idKey}`}>
          <div className="card">
            <div className="card-header" id={ativo.ticket}>
              <h5 className="mb-0 d-flex justify-content-between">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${ativo.ticket}${idKey}`} aria-expanded="true" aria-controls={`${ativo.ticket}${idKey}`}>
                  {abreviarTexto(`${ativo.ticket} - ${ativo.nome_empresa}`, 40)}
                  {/* {ativo.ticket} - {ativo.nome_empresa} */}
                </button><Link to={`/operacoes/${ativo.id}`}><FaEye /></Link>
              </h5>
            </div>
            <div id={`${ativo.ticket}${idKey}`} className="collapse" aria-labelledby={ativo.ticket} data-parent={`#A${idKey}`}>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item">Total: {valorBR(+ativo.total)}</div>
                  <div className="list-group-item">Quantidade: {ativo.quantidade}</div>
                  <div className="list-group-item">Ticket Médio: {valorBR(+ativo.custo_medio)}</div>
                  <div className="list-group-item">Recomendação: {ativo.recomendacao}</div>
                  <div className="list-group-item">Lucro realizado: {valorBR(+ativo.lucro)}</div>
                </div>

                {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>



              <div className="card-text">Total: {ativo.total}</div>
              <div className="card-text">Quantidade: {ativo.quantidade}</div>
              <div className="card-text">Ticket Médio: {ativo.custo_medio}</div>
              <div className="card-text">Recomendação: {ativo.recomendacao}</div>
              <div className="card-text">Lucro realizado: {ativo.lucro}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}