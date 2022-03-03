import React from 'react'
import { Container } from './style'

interface IPaymentProps {
  label: string
  rest?: any
}

export const PaymentItem = (props: IPaymentProps) => {
  return (
    <Container>
      {props.label}
      <input type="checkbox" {...props.rest} />
    </Container>
  )
}
