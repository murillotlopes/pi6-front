import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('e-mail inválido'),
    senha: yup.string().required('Campo obrigatório')
})