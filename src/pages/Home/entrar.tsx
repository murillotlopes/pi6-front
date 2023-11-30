import { useState } from "react"
import { LoginType, setEntrarOuCadastrarProps } from "../../interfaces"
import { useLogin } from "../../providers/login"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from "../../schemas"


export const Entrar = ({ setEntrarOuCadastrar }: setEntrarOuCadastrarProps) => {
  const [login, setLogin] = useState({ email: '', senha: '' })
  const { entrarLogin } = useLogin()

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaLogin) })

  const submeterFormEntrar = (data: LoginType) => {
    entrarLogin(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(submeterFormEntrar)} className="text-center p-3 border border-secondary rounded" >
        <fieldset>
          <legend>Login</legend>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="text" id="email" className="form-control"
              {...register('email')} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
            <div><small>{errors.email?.message}</small></div>
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label" >Senha</label>
            <input type="password" id="senha" className="form-control"
              {...register('senha')} onChange={(e) => setLogin({ ...login, senha: e.target.value })} />
            <div><small>{errors.senha?.message}</small></div>
          </div>
          <div>
            <button className="btn btn-primary">Entrar</button>
          </div>
          <div className="mt-3">
            <span className="btn btn-danger" onClick={() => setEntrarOuCadastrar(false)}>Quero me cadastrar!</span>
          </div>
        </fieldset>
      </form>
    </>
  )
}