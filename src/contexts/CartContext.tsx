import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from 'services/apiClient'
import _ from 'lodash'

interface CartItem {
  storeId: string
  productId: string
  amount: number
  title: string
  price: number
  enabled?: boolean
  image?: string
}

export interface PaymentMethod {
  id: string
  methodName: string
  allowParcels: boolean
}

interface Store {
  id: string
  name: string
  items: Items
  paymentMethods: PaymentMethods
}

type PaymentMethods = PaymentMethod[]
type Items = CartItem[]
type Stores = Store[]

interface CartContextData {
  items: Items
  loadingItems: boolean
  loadingStores: boolean
  stores: Stores
  setItems: (items: Items) => void
}

interface CartContext {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartContext) {
  const [items, setItems] = useState<Items>([])
  const [stores, setStores] = useState<Stores>([])

  const [loadingItems, setLoadingItems] = useState(true)
  const [loadingStores, setLoadingStores] = useState(true)

  function setProducts(products: Items) {
    setItems(products)
  }

  useEffect(() => {
    const cartItems = localStorage.getItem('ultimo.cart.items')

    if (cartItems) {
      const storedItems = JSON.parse(cartItems)

      Promise.all(
        Object.entries(_.groupBy(storedItems, 'storeId')).map(
          async ([id, items]) => {
            const {
              data: { name, paymentMethods }
            } = await api.get(`stores/id/${id}`)

            return {
              id,
              name,
              items,
              paymentMethods
            }
          }
        )
      )
        .then(setStores)
        .finally(() => setLoadingStores(false))

      setItems(storedItems)
      setLoadingItems(false)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        stores,
        items,
        setItems: setProducts,
        loadingItems,
        loadingStores
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
