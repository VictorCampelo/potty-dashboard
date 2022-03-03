import React from 'react'
import { Container } from './style'

interface IPaymentProps {
  label: string
  rest?: any
}

export const PaymentItem = (props: IPaymentProps) => {
  return (
    <Container>
      <input type="checkbox" {...props.rest} />
      {props.label}
    </Container>
  )
}
