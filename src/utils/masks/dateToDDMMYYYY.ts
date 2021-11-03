/* eslint-disable @typescript-eslint/no-explicit-any */

export default (e: any) =>
  `${`0${e.getDate()}`.substr(-2)}/${`0${e.getMonth() + 1}`.substr(
    -2
  )}/${e.getFullYear()}`
