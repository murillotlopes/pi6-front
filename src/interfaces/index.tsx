import { ReactNode } from "react";

export interface LoginType {
    email: string,
    senha: string
}

export interface UsuarioType {
    nome: string,
    email: string,
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

export interface OperacaoType {
    tipo_operacao: string,
    data_operacao: string,
    quantidade: number,
    valor: number,

    mercado?: string,
    trade?: string,
    corretagem?: string,
    taxa_liquidacao?: number,
    emolumentos?: number,
    ir_retido?: number,
    nota_corretagem?: number,
    lucro_prejuizo?: number,

    usuario?: UsuarioType,
    investimento?: TituloType
}

export interface setEntrarOuCadastrarProps {
    setEntrarOuCadastrar: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CardInvestimentoProps {
    ativo: MeusInvestimentosType,
    idKey: number
}

export interface TituloType {
    id: number,
    ticket: string,
    nome_empresa: string,

    cnpj?: string,
    tipo?: string,
    segmento?: string,
    divident_yield?: string,
    cota_rendimento?: number

    operacoes?: Array<OperacaoType>
}

export interface MeusInvestimentosType {
    ticket: string,
    nome_empresa: string,
    valor: number,
    quantidade: number,
    custo_medio: number,
    recomendacao: string
}

