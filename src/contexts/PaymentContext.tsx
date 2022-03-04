import React, { ReactNode, useState } from 'react'

interface IPaymentContextProps {
  inputPaymentValue: string[]
  setInputPaymentValue: (data: string[]) => void
  inputDeliveryValue: string[]
  setInputDeliveryValue: (data: string[]) => void
}

export const PaymentContext = React.createContext<IPaymentContextProps>(
  {} as IPaymentContextProps
)

export const PaymentContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [inputPaymentValue, setInputPaymentValue] = useState<string[] | []>([])
  const [inputDeliveryValue, setInputDeliveryValue] = useState<string[] | []>(
    []
  )

  return (
    <PaymentContext.Provider
      value={{
        inputPaymentValue,
        setInputPaymentValue,
        inputDeliveryValue,
        setInputDeliveryValue
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
