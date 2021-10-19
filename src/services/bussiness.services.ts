import { api } from "./apiClient"

type createBusinessType = {
  "business_name": string,
	"CNPJ": string,
	"phone": string,
	"address": string,
	"city": string,
	"state": string,
	"description": string,
  "facebook_link": string,
  "instagram_link":string,
  "whatsapp_link": string
}

type queryIdType = {
  "id": any,
}


export async function createBusiness(data: createBusinessType){ 
  const res = await api.post('/auth/createUserAndStore', data);
  return res
}

export async function getBusiness(id: queryIdType){ 
  const res = await api.get(`/stores/${id}`);
  return res
}