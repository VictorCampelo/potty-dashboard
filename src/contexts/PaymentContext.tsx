import React, { ReactNode, useState } from 'react'

interface IPaymentContextProps {
  inputPaymentValue: string[]
  setInputPaymentValue: (data: string[]) => void
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

  return (
    <PaymentContext.Provider
      value={{ inputPaymentValue, setInputPaymentValue }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
