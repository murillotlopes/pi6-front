import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('e-mail inválido'),
    senha: yup.string().required('Campo obrigatório')
})

export const schemaCadastro = yup.object().shape({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('e-mail inválido'),
    senha: yup.string().required('Campo obrigatório'),
    confirmarSenha: yup.string().required('Obrigatório').oneOf([yup.ref('senha')], 'Senha não confere')
})