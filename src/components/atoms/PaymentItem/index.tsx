import React, { useContext, useState } from 'react'
import { Container } from './style'
import { PaymentContext } from '../../../contexts/PaymentContext'

interface IPaymentItemProps {
  label: string
  value: string
}

export const PaymentItem = (props: IPaymentItemProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const { setInputPaymentValue, inputPaymentValue } = useContext(PaymentContext)

  function handleChange() {
    setIsChecked(!isChecked)
    if (!isChecked) {
      setInputPaymentValue([props.label, ...inputPaymentValue])
      return
    }
    setInputPaymentValue(
      inputPaymentValue.filter((item) => item != props.label)
    )
  }

  return (
    <Container>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {props.label}
    </Container>
  )
}
