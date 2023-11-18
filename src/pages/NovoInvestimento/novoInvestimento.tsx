import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from "react-hook-form"
import { OperacaoType, TituloType } from "../../interfaces"
import { useLogin } from "../../providers/login"
import { useState } from "react"
import { useTitulo } from "../../providers/titulo"
import { useOperacao } from "../../providers/operacao"
import { schemaNovoInvestimento } from "../../schemas"
import { PageBase } from "../../components/pageBase/pageBase"

export const NovoInvestimento = () => {

  const { buscarTitulo } = useTitulo()
  const { salvarOperacao } = useOperacao()

  const { usuario } = useLogin()
  const [titulo, setTitulo] = useState({} as TituloType)
  const [operacao, setOperacao] = useState({
    tipo_operacao: '',
    data_operacao: '',
    quantidade: 0,
    valor: 0
  } as OperacaoType)

  const optionsTipoOperacao = [
    { id: 'C', titulo: 'Compra' },
    { id: 'V', titulo: 'Venda' }
  ]

  const { control, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaNovoInvestimento)
  })

  const submiteForm = (data: OperacaoType) => {
    data.usuario = usuario
    data.investimento = titulo
    salvarOperacao(data)
  }

  const buscarPorTicket = async (ticket: string) => {
    const tituloRetornado: TituloType = await buscarTitulo(ticket)

    if (tituloRetornado) {
      setTitulo(tituloRetornado)
    }
  }

  return (
    <>
      <PageBase>
        <form onSubmit={handleSubmit(submiteForm)}>
          <fieldset>
            <legend>Investir</legend>

            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Ticket</label>
              <input type="text" id="titulo" className="form-control" {...register('titulo')}
                onBlur={(e) => buscarPorTicket(e.target.value.toUpperCase())} />
            </div>

            {Object.keys(titulo).length !== 0 ? (
              <>
                <div className="mb-3">
                  <label htmlFor="tipo_operacao" className="form-label">Tipo de operação</label>
                  <Controller
                    name="tipo_operacao"
                    control={control}
                    render={({ field }) => (
                      <select {...field} className="form-control">
                        <option value="">Selecione o tipo de operação</option>
                        {optionsTipoOperacao.map((option, index) => (
                          <option key={index} value={option.id}>{option.titulo}</option>
                        ))}
                      </select>
                    )}
                  />
                  <div><small>{errors.tipo_operacao?.message}</small></div>
                </div>

                <div className="mb-3">
                  <label htmlFor="data_operacao" className="form-label">Data de operação</label>
                  <input id="data_operacao" type="date" className="form-control" {...register('data_operacao')} onChange={(e) => setOperacao({ ...operacao, data_operacao: e.target.value })} />
                  <div><small>{errors.data_operacao?.message}</small></div>
                </div>

                <div className="mb-3">
                  <label htmlFor="quantidade" className="form-label">Quantidade</label>
                  <input id="quantidade" type="text" className="form-control" {...register('quantidade')} onChange={(e) => setOperacao({ ...operacao, quantidade: +e.target.value })} />
                  <div><small>{errors.quantidade?.message}</small></div>
                </div>

                <div className="mb-3">
                  <label htmlFor="valor" className="form-label">Valor</label>
                  <input id="valor" type="text" className="form-control"  {...register('valor')} onChange={(e) => setOperacao({ ...operacao, valor: +e.target.value })} />

                  <div><small>{errors.valor?.message}</small></div>
                </div>

                <div>
                  <button className="btn btn-primary">Salvar</button>
                </div>
              </>
            ) : (<></>)}


          </fieldset>

        </form>
      </PageBase>
    </>
  )
}