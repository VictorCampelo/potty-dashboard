import React, { useContext, useEffect, useState } from 'react'
import { Container } from './style'
import { PaymentContext } from '../../../contexts/PaymentContext'

interface IPaymentItemProps {
  label: string
  value: string
}

export const PaymentItem = (props: IPaymentItemProps) => {
  const [isInputChecked, setIsInputChecked] = useState(false)
  const { inputPaymentValue, setInputPaymentValue } = useContext(PaymentContext)

  useEffect(() => {
    if (inputPaymentValue.some((item) => item == props.label))
      setIsInputChecked(true)
  }, [inputPaymentValue])

  function handleChange() {
    setIsInputChecked(!isInputChecked)
    if (!isInputChecked) {
      setInputPaymentValue([props.label, ...inputPaymentValue])
      return
    }
    setInputPaymentValue(
      inputPaymentValue.filter((item) => item != props.label)
    )
  }

  return (
    <Container>
      <input type="checkbox" checked={isInputChecked} onChange={handleChange} />
      {props.label}
    </Container>
  )
}
