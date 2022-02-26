/* eslint-disable @typescript-eslint/ban-types */

export default function watchAnyObject(
  object: Object,
  methods: string[],
  callbackBefore?: Function,
  callbackAfter?: Function
) {
  for (const method of methods) {
    const original = object[method].bind(object)
    const newMethod = function (...args) {
      callbackBefore(method, ...args)
      // eslint-disable-next-line prefer-spread
      const result = original.apply(null, args)
      callbackAfter(method, ...args)
      return result
    }
    object[method] = newMethod.bind(object)
  }
}
