import { useForm } from "react-hook-form"
import { CadastroLoginType, setEntrarOuCadastrarProps } from "../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { schemaCadastro } from "../../schemas"
import { useLogin } from "../../providers/login"

export const Cadastrar = ({ setEntrarOuCadastrar }: setEntrarOuCadastrarProps) => {
  const [cadastro, setCadastro] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' })
  const { cadastrarLogin } = useLogin()

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaCadastro) })

  const submeterFormCadastrar = (data: CadastroLoginType) => {
    cadastrarLogin(data).then(() => setEntrarOuCadastrar(true))
  }

  return (
    <>
      <form onSubmit={handleSubmit(submeterFormCadastrar)} className="text-center p-3 border border-secondary rounded" >
        <fieldset>
          <legend>Cadastrar-me</legend>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome completo</label>
            <input type="text" id="nome" className="form-control"
              {...register('nome')} onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })} />
            <div><small>{errors.nome?.message}</small></div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="text" id="email" className="form-control"
              {...register('email')} onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })} />
            <div><small>{errors.email?.message}</small></div>
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" id="senha" className="form-control"
              {...register('senha')} onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })} />
            <div><small>{errors.senha?.message}</small></div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmarSenha" className="form-label">Confirme sua senha</label>
            <input type="password" id="confirmarSenha" className="form-control"
              {...register('confirmarSenha')} onChange={(e) => setCadastro({ ...cadastro, confirmarSenha: e.target.value })} />
            <div><small>{errors.confirmarSenha?.message}</small></div>
          </div>
          <div>
            <button className="btn btn-primary">Cadastrar</button>
          </div>
          <div className="mt-3">
            <span className="btn btn-danger" onClick={() => setEntrarOuCadastrar(true)}>Já sou cadastrado!</span>
          </div>
        </fieldset>
      </form>
    </>
  )
}
