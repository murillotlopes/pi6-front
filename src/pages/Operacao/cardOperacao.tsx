import { useState } from "react"
import { ListaOperacoesProps, OperacaoType } from "../../interfaces"
import { optionsTipoOperacao } from "../../util"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaNovoInvestimento } from "../../schemas"
import { FaFloppyDisk, FaPenToSquare, FaTrash } from "react-icons/fa6"
import { useOperacao } from "../../providers/operacao"

export const CardOperacao = ({ operacaoSalvo, setExcluindoOperacao }: ListaOperacoesProps) => {
  const [modoEdicao, setModoEdicao] = useState(false)
  const { atualizarOperacao, excluirOperacao } = useOperacao()
  const [operacao, setOperacao] = useState({
    tipo_operacao: '',
    data_operacao: '',
    quantidade: 0,
    valor: 0
  } as OperacaoType)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaNovoInvestimento), values: operacaoSalvo
  })

  const operacaoTexto = (tipo: string) => {
    return optionsTipoOperacao.find(item => item.id === tipo)?.titulo
  }

  const submiteForm = (data: OperacaoType) => {
    setModoEdicao(!modoEdicao)
    atualizarOperacao(data)
  }

  const excluir = () => {

    excluirOperacao(Number(operacaoSalvo.id)).then(res => {
      if (!res) setExcluindoOperacao(operacaoSalvo.id || 0)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(submiteForm)} className="p-3 border border-secondary rounded mb-3 ">
        <div className="card" >
          <div className="card-header d-flex justify-content-around">
            Operacao: {operacaoTexto(operacaoSalvo.tipo_operacao)}

            {!modoEdicao ?
              <span ><FaPenToSquare onClick={() => setModoEdicao(!modoEdicao)} /> <FaTrash onClick={excluir} /></span>
              : <button ><FaFloppyDisk /></button>
            }
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <label htmlFor="quantidade" className="col-form-label">Quantidade:</label>
              <input type="text" className="form-control-plaintext" id="quantidade" {...register('quantidade')} onChange={(e) => setOperacao({ ...operacao, quantidade: +e.target.value })} disabled={!modoEdicao} />
              <div><small>{errors.quantidade?.message}</small></div>
            </li>

            <li className="list-group-item">
              <label htmlFor="valor" className="col-form-label">Valor:</label>
              <input type="text" className="form-control-plaintext" id="valor" {...register('valor')} onChange={(e) => setOperacao({ ...operacao, valor: +e.target.value })} disabled={!modoEdicao} />
              <div><small>{errors.valor?.message}</small></div>
            </li>

            <li className="list-group-item">
              <label htmlFor="data_operacao" className="col-form-label">Data da operação:</label>
              <input type="date" className="form-control-plaintext" id="data_operacao" {...register('data_operacao')} onChange={(e) => setOperacao({ ...operacao, data_operacao: e.target.value })} disabled={!modoEdicao} />
              <div><small>{errors.data_operacao?.message}</small></div>
            </li>
          </ul>
        </div>
      </form>
    </>
  )
}