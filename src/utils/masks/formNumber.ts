/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (number: any): string => {
  number = number.replace(/\D/g, '')

  return number
}
