/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (cpf: any) => {
  cpf = cpf.replace(/[^\d]/g, '')
  cpf = cpf.substring(0, 11)
  if (cpf.length > 3) {
    cpf = cpf.replace(/^(\d{3})(\d*)/, '$1.$2')
  }
  if (cpf.length > 7) {
    cpf = cpf.replace(/^(.{7})(\d*)/, '$1.$2')
  }
  if (cpf.length > 11) {
    cpf = cpf.replace(/^(.{11})(\d*)/, '$1-$2')
  }
  return cpf
}

// format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')
