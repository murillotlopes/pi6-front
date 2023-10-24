import { createContext, useContext, useState } from "react";
import { LoginType, childrenProps } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";

interface LoginContextData {
  entrarLogin: (data: LoginType) => void
  token: string | undefined
  usuario: {}
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

const useLogin = () => useContext(LoginContext)

const LoginProvider = ({ children }: childrenProps) => {
  const [login, setLogin] = useState(() => {
    const token = sessionStorage.getItem('@GMNTV:token')
    const usuario = sessionStorage.getItem('@GMNTV:usuario')

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) }
    }

    return {}
  })

  const entrarLogin = async (data: LoginType) => {
    console.log(data)
    api.post('/login', data).then(res => {
      const { token, usuario } = res.data

      sessionStorage.setItem('@GMNTV:token', token)
      sessionStorage.setItem('@GMNTV:usuario', usuario)

      setLogin({ token, usuario })

      toast.success('Seja bem vindo!')
    }).catch(err => {
      console.error(err)
      toast.error('E-mail ou senha incorretos!')
    })
  }

  return (
    <LoginContext.Provider value={{
      token: login.token,
      usuario: login.usuario,
      entrarLogin
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, useLogin }
