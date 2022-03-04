import React, { useContext, useState } from 'react'
import { Container } from './styles'
import { PaymentContext } from '../../../contexts/PaymentContext'

interface IInputProps {
  label: string
  value?: string
}
export const DeliveryInp = ({ label, value }: IInputProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const { inputDeliveryValue, setInputDeliveryValue } =
    useContext(PaymentContext)

  function handleChecked() {
    setIsChecked(!isChecked)
    if (!isChecked) {
      setInputDeliveryValue([...inputDeliveryValue, label])
      return
    }
    setInputDeliveryValue(inputDeliveryValue.filter((item) => item != label))
  }

  return (
    <Container>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      {label}
    </Container>
  )
}
