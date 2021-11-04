/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (phone: any) => {
  phone = phone.replace(/[^\d]/g, '')
  phone = phone.substring(0, 11)

  if (phone.length > 2) {
    phone = phone.replace(/^(\d{2})(\d*)/, '($1) $2')
  }
  if (phone.length > 9) {
    phone = phone.replace(/^(.*)(\d{4})$/, '$1-$2')
  }
  // console.log(phone);
  return phone
}

// format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')
