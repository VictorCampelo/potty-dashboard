import { api } from "./apiClient"

type createUserType = {
  "email": string,
	"firstName": string,
	"lastName": string,
	"password": string,
	"passwordConfirmation": string
}

type loginUserType = {
  "email": string,
	"password": string
}

export async function signUp(data: createUserType){ 
  const res = await api.post('/auth/signup', data);
  return res
}

export async function loginUser(data: loginUserType) {
  const res = await api.post('/auth/signin', data);
  return res
}
