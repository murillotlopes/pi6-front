import { Link } from "react-router-dom"
import { PageBase } from "../../components/pageBase/pageBase"
import { useState } from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginType } from "../../interfaces"
import { useLogin } from "../../providers/login"
import { schemaLogin } from "../../schemas"

export const Home = () => {

  const [login, setLogin] = useState({ email: '', senha: '' })
  const { entrarLogin } = useLogin()

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaLogin) })

  const enviarForm = (data: LoginType) => {
    entrarLogin(data)
  }

  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/painel'}>
            Painel
          </Link>
        </nav>
      </header>
      <PageBase>
        <div className="col-md-3">
          <form onSubmit={handleSubmit(enviarForm)} >
            <fieldset>
              <legend>Login</legend>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="text" id="email" className="form-control"
                  {...register('email')} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                <div>{errors.email?.message}</div>
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label" >Senha</label>
                <input type="password" id="senha" className="form-control"
                  {...register('senha')} onChange={(e) => setLogin({ ...login, senha: e.target.value })} />
                <div>{errors.senha?.message}</div>
              </div>

              <button className="btn btn-primary">Entrar</button>
            </fieldset>
          </form>
        </div>
        <footer>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quo consequatur odio enim perspiciatis voluptatibus ab laborum pariatur aliquid nulla. Odio exercitationem id dolores, aliquam sunt itaque quia quasi aperiam.</footer>
      </PageBase>
    </>
  )
}