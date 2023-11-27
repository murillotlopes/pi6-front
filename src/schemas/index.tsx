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

export const schemaUsuario = yup.object().shape({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('e-mail inválido')
})

export const schemaNovoInvestimento = yup.object().shape({
    tipo_operacao: yup.string().required('Campo obrigatório'),
    data_operacao: yup.string().required('Campo obrigatório'),
    quantidade: yup.number().required('Campo obrigatório').transform((_, valorOriginal: string) => {
        return parseFloat(String(valorOriginal).replace(/[,.](?=\d|$)/g, '.'))
    }).test('is-positive', 'A quantidade deve ser maior que zero.', (valor) => {
        return valor > 0
    }),
    valor: yup.number().required('Campo obrigatório').transform((_, valorOriginal: string) => {
        return parseFloat(valorOriginal.replace(/[,.](?=\d|$)/g, '.'))
    }).test('is-positive', 'O valor deve ser maior que zero.', (valor) => {
        return valor > 0
    }),
    titulo: yup.string()
})