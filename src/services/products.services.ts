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