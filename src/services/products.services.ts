import { api } from './apiClient'

type CategoryType = {
  name: string
  storeId: string
}

export const createProduct = async (data) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }

  const res = await api.post(`/products/`, data, config)

  return res
}

export const deleteProduct = async (id: string) => {
  const res = await api.delete(`/products/${id}`)

  return res
}

export const updateProduct = async (id: string, data) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }

  const res = await api.patch(`/products/details/${id}`, data)

  return res
}

export const createCategory = async (name: string, storeId: string) => {
  const res = await api.post(`/categories/product`, {
    name,
    storeId
  })

  return res
}

export const deleteCategory = async (id: string, lojaId: string) => {
  const res = await api.delete(`categories/products/${lojaId}/category/${id}`)

  return res
}

export const updateCategory = async (
  id: string,
  lojaId: string,
  data: CategoryType
) => {
  const res = await api.patch(
    `categories/products/${lojaId}/category/${id}`,
    data
  )

  return res
}
