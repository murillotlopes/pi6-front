
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

export const formataPercentual = (valor: number) => {
  return valor.toLocaleString('pt-br', { style: 'percent', maximumSignificantDigits: 3 })
}

export const abreviarTexto = (texto: string, limite: number) => {
  if (texto.length <= limite) return texto
  else return texto.substring(0, limite - 3) + '...'
}

export const recomendacaoCompra = (tipo: string) => {
  if (tipo === 'C1') return 'VENDER'
  if (tipo === 'C2') return 'NEUTRO'
  if (tipo === 'C3') return 'COMPRAR'
  if (tipo === 'C0') return 'SEM INFORMAÇÕES'
}

export const recomendacaoBadge = (tipo: string) => {
  if (tipo === 'C1') return 'badge-danger'
  if (tipo === 'C2') return 'badge-warning'
  if (tipo === 'C3') return 'badge-success'
  if (tipo === 'C0') return 'badge-info'
}
