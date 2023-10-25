import { ReactNode } from "react";

export interface LoginType {
    email: string,
    senha: string
}

export interface CadastroLoginType {
    nome: string,
    email: string,
    senha: string,
    confirmarSenha: string
}

export interface childrenProps {
    children: ReactNode
}

export interface setEntrarOuCadastrarProps {
    setEntrarOuCadastrar: React.Dispatch<React.SetStateAction<boolean>>
}