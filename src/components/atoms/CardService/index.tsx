import { ReactElement } from 'react'
import { Container } from './styles'

type CardServiceProps = {
  background: string
  title: string
  icon: ReactElement
}

export const CardService = ({ background, title, icon }: CardServiceProps) => {
  return (
    <Container background={background}>
      <div className="imgContainer">{!!icon && icon}</div>
      <p>{title}</p>
    </Container>
  )
}
