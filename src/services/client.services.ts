import { api } from './apiClient'

export async function getUser() {
  const res = await api.get('/users/me')
  return res
}
