import { api } from './apiClient'

type ProductType = {
  title: string;
  price: string;
  description: string;
  inventory: number;
}

export const createProduct = async (data: ProductType) => {
  const res = await api.post('/products', data)

  return res;
}