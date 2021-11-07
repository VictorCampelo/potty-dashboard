/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (cnpj: any) => {
  cnpj = cnpj.replace(/[^\d]/g, '')
  cnpj = cnpj.substring(0, 14)
  if (cnpj.length > 2) {
    cnpj = cnpj.replace(/^(\d{2})(\d*)/, '$1.$2')
  }
  if (cnpj.length > 6) {
    cnpj = cnpj.replace(/^(.{6})(\d*)/, '$1.$2')
  }
  if (cnpj.length > 10) {
    cnpj = cnpj.replace(/^(.{10})(\d*)/, '$1/$2')
  }
  if (cnpj.length > 15) {
    cnpj = cnpj.replace(/^(.{15})(\d*)/, '$1-$2')
  }
  // cnpj);
  return cnpj
}

// format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')
