import { api } from './apiClient'

type createUserType = {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
  city: string
  uf: string
  street: string
  logradouro: string
  adressNumber: number
  neighborhood: string
  zipcode: string
  complement: string
}

type loginUserType = {
  email: string
  password: string
}

type recoverPasswordConfirmation = {
  token: string
  password: string
  passwordConfirmation: string
}

export async function signUp(data: createUserType) {
  const res = await api.post('/auth/signup', data)
  return res
}

export async function loginUser(data: loginUserType) {
  const res = await api.post('/auth/signin', data)
  return res
}

export async function recoverPassword(email: string) {
  const res = await api.post('/auth/send-recover-email', { email })
  return res
}

export async function recoverPasswordConfirmation(
  data: recoverPasswordConfirmation
) {
  const res = await api.post(`/auth/reset-password/${data.token}`, {
    password: data.password,
    passwordConfirmation: data.passwordConfirmation
  })
  return res
}
