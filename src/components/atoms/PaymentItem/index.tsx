import React, { useState } from 'react'
import { Container } from './style'

interface IPaymentProps {
  label: string
  value?: string
}

export const PaymentItem = (props: IPaymentProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        value={props.value}
      />
      {props.label}
    </Container>
  )
}
