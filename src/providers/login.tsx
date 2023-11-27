import { createContext, useContext, useState } from "react";
import { CadastroLoginType, LoginType, UsuarioType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosHeaders, Method, RawAxiosRequestHeaders } from "axios";

interface LoginContextData {
  entrarLogin: (data: LoginType) => Promise<void>
  autenticadorToken: () => (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
  cadastrarLogin: (data: CadastroLoginType) => Promise<void>
  sair: () => void
  token: string | undefined
  usuario: UsuarioType
}

type MethodsHeaders = Partial<{
  [Key in Method as Lowercase<Key>]: AxiosHeaders;
} & { common: AxiosHeaders }>;

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

const useLogin = () => useContext(LoginContext)

const LoginProvider = ({ children }: childrenProps) => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(() => {
    const token = sessionStorage.getItem('@GMNTV:token')
    const usuario = sessionStorage.getItem('@GMNTV:usuario')

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) }
    }

    return {}
  })

  const autenticadorToken = () => {
    let headers: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders = { Authorization: '' }
    const { token } = login

    headers.Authorization = `JWT ${token}`

    return headers
  }

  const entrarLogin = async (data: LoginType) => {
    api.post('/usuario/login', data,).then(res => {
      const { token, usuario } = res.data

      sessionStorage.setItem('@GMNTV:token', JSON.stringify(token))
      sessionStorage.setItem('@GMNTV:usuario', JSON.stringify(usuario))

      setLogin({ token, usuario })

      toast.success('Seja bem vindo!')
      navigate('/painel')
    }).catch(err => {
      console.error(err)
      toast.error('E-mail ou senha incorretos!')
    })
  }

  const cadastrarLogin = async (data: CadastroLoginType) => {
    api.post('/usuario/criar', data).then(_ => {
      toast.success('Cadastro realizado com sucesso!')
    }).catch(_ => {
      toast.error('Não foi possível seguir com seu cadastro. Tente novamente')
    })
  }

  const sair = () => {
    // const navigate = useNavigate()
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <LoginContext.Provider value={{
      token: login.token,
      usuario: login.usuario,
      entrarLogin,
      autenticadorToken,
      cadastrarLogin,
      sair
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, useLogin }
