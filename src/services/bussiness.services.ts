import { api } from "./apiClient";

type createBusinessType = {
  business_name: string;
  CNPJ: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  description: string;
  facebook_link: string;
  instagram_link: string;
  whatsapp_link: string;
};

export async function createBusiness(data: createBusinessType) {
  const res = await api.post("/auth/createUserAndStore", data);
  return res;
}

export async function getBusiness(id: string) {
  const res = await api.get(`/stores/id/${id}`);
  return res;
}

export async function getProducts(id: string) {
  const body = {
    options: {
      limit: 0,
      offset: 0,
      loadRelations: true,
      loadLastSolds: false,
    },
  };

  const res = await api.get(`/products/store/${id}`, { data: body });
  return res;
}
