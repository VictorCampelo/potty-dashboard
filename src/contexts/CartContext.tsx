import { createContext, ReactNode, useState, useEffect } from 'react'

interface CartItem {
  storeId: string
  productId: string
  amount: number
  title: string
  price: number
  enabled?: boolean
  image?: string
}

type Items = CartItem[]

interface CartContextData {
  items: Items
  loadingItems: boolean
  setItems: (items: Items) => void
}

interface CartContext {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartContext) {
  const [items, setItems] = useState<Items>([])
  const [loadingItems, setLoadingItems] = useState(true)

  function setProducts(products: Items) {
    setItems(products)
  }

  useEffect(() => {
    const cartItems = localStorage.getItem('ultimo.cart.items')

    if (cartItems) {
      setItems(JSON.parse(cartItems))
      setLoadingItems(false)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{ items, setItems: setProducts, loadingItems }}
    >
      {children}
    </CartContext.Provider>
  )
}
