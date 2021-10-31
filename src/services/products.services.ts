import { api } from './apiClient'

type CreateProductType = {
  data: ProductType,
}

type ProductType = {
  title: string;
  price: number;
  description: string;
  inventory: number;
}

export const createProduct = async ({ data }: CreateProductType) => {
  const res = await api.post(`/products/`, data)

  return res;
}

export const createCategory = async (name: string) => {
  const res = await api.post(`/categories`, {
    name,
    type: name
  })

  return res;
}