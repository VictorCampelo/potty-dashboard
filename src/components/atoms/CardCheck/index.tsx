import { Container } from './styles'

import { AiFillCheckCircle } from 'react-icons/ai'

interface Props {
  title: string
  description: string
}

const CardCheck = ({ title, description }: Props) => {
  return (
    <Container>
      <AiFillCheckCircle size={96} color="var(--color-secondary-darker)" />
      <p>{title}</p>
      <span>{description}</span>
    </Container>
  )
}

export default CardCheck
