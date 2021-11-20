export function ellipsis(text: string, length: number) {
  const preText = text.substr(0, length)
  const sub = text.substr(length, 9999999)
  const result = sub.replace(sub, '...')
  return preText + result
}
