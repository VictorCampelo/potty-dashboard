import { api } from './apiClient'

type createBusinessType = {
  business_name: string
  CNPJ: string
  phone: string
  address: string
  city: string
  state: string
  description: string
  facebook_link: string
  instagram_link: string
  whatsapp_link: string
}

export async function createBusiness(data: createBusinessType) {
  const res = await api.post('/auth/createUserAndStore', data)
  return res
}

export async function getBusiness(id: string) {
  const res = await api.get(`/stores/${id}`)
  return res
}

export async function getStore(id: string) {
  const res = await api.get(`/stores/id/${id}`)
  return res
}

export async function getStoreId(name: string) {
  const res = await api.get(`/stores/${name}`)

  return res.data.id
}

export async function getProducts(id: string) {
  const res = await api.get(
    `/products/store/${id}?limit=10&offset=0&loadRelations=true&loadLastSolds=false`
  )
  return res
}

export async function getProduct(id: string) {
  const res = await api.get(`/products/${id}?files=true`)
  return res
}

export async function getRecommends(id: string) {
  const res = await api.get(
    `/products/store/${id}?limit=6&offset=0&loadRelations=true&loadLastSolds=false`
  )
  return res
}

export async function getCategories(id: string) {
  const res = await api.get(`/categories/products/${id}`)
  return res
}

export async function editTimeTable(data) {
  const res = await api.patch(`/stores/`, data)
  return res
}

export async function editBussinesInfo(data) {
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }
  const res = await api.patch(`/stores`, data, config)
  return res
}

export async function createCupom(data) {
  const res = await api.post(`/coupons/`, data)
  return res
}

export async function getCupom() {
  const res = await api.get(`/coupons/`)
  return res
}

export async function editCupom(data: string) {
  const res = await api.patch(`/coupons/${data}`)
  return res
}

export async function deleteCupom(data: string) {
  const res = await api.delete(`/coupons/${data}`)
  return res
}
