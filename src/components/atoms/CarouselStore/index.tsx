import React from 'react'
import { Container } from './styles'

import { CardStoreItem } from '../CardStoreItem'

interface IStoresFoundProps {
  CNPJ: string
  addressNumber: number
  avatar: { id: string; name: string; filename: string; url: string }
  avgStars: number
  background: {
    id: string
    name: string
    filename: string
    url: string
  }
  categories: [
    {
      enabled: boolean
      id: string
      name: string
      storeProductsId: string | null
      type: string
    }
  ]
  city: string
  deliveryFee: number
  description: string
  enabled: boolean
  facebookLink: string
  formatedName: string
  id: string
  instagramLink: string | null
  likes: number
  name: string
  neighborhood: string
  phone: string
  productCategories: [
    {
      enabled: boolean
      id: string
      name: string
      storeProductsId: string
      type: string
    }
  ]
  schedules: {
    dom: []
    qua: []
    qui: []
    sab: []
    seg: []
    sex: []
    ter: []
  }
  state: string
  street: string
  sumFeedbacks: number
  sumOrders: number
  sumStars: number
  whatsappLink: string | null
  zipcode: string
}

export const CarouselStore = ({ stores }: { stores: IStoresFoundProps[] }) => {
  console.log(stores)
  return (
    <Container>
      {stores
        ? stores.map((store, i) => <CardStoreItem key={i} data={store} />)
        : null}
    </Container>
  )
}
