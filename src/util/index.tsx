
export const dataAtual = () => {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
  const dia = dataAtual.getDate().toString().padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

export const optionsTipoOperacao = [
  { id: 'C', titulo: 'Compra' },
  { id: 'V', titulo: 'Venda' }
]

export const valorBR = (number: number) => {
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const abreviarTexto = (texto: string, limite: number) => {
  if (texto.length <= limite) return texto
  else return texto.substring(0, limite - 3) + '...'

}

