import { Container } from './styles'

import formatToBrl from '../../../utils/formatToBrl'

import { Button } from 'components/atoms/Button'

interface Props {
  crown?: boolean
  colors: {
    primary: string
    secondary: string
  }
  title: string
  benefits: {
    text: string
    bold?: boolean
  }[]
  quotaPrice: number
  quota: number
}

const CardPlan = ({
  crown,
  colors,
  title,
  benefits,
  quotaPrice,
  quota
}: Props) => {
  return (
    <Container crown={crown} colors={colors}>
      {crown && (
        <img
          className="crown"
          width={70}
          height={65}
          src="images/crown.svg"
          alt="Coroa"
        />
      )}

      <h2>{title}</h2>

      <div className="benefits">
        {benefits.map((benefit, index) => (
          <p className="benefit" key={index}>
            {benefit.bold ? <strong>{benefit.text}</strong> : benefit.text}
          </p>
        ))}
      </div>

      <p className="quota">
        Em até <strong>${quota}x de</strong>
      </p>
      <p className="price">
        <strong>{formatToBrl(quotaPrice)}</strong>
      </p>

      <Button title="Selecionar" />
    </Container>
  )
}

export default CardPlan
