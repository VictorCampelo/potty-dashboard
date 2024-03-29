import { Container } from './styles'

import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

interface CardFeedback extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  quantStar?: number
  text: string
  time: string
  width?: number
}

const CardFeedback = ({
  name,
  quantStar,
  text,
  time,
  width,
  ...rest
}: CardFeedback) => {
  const stars = [] //Criando um vetor de estrelas

  quantStar > 5 ? (quantStar = 5) : null //Tratativas para manter o máximo de estrelas como 5

  for (let i = 0; i < quantStar; i++) {
    stars.push(<AiFillStar key={i} size={18} color="#ffe249" />)
  }
  for (let i = quantStar; i < 5; i++) {
    stars.push(<AiOutlineStar key={i + 5} size={18} color="#ffe249" />)
  }
  //adicionando estrelas preenchidas e vazias ao vetor

  return (
    <Container width={width}>
      <div className="title">
        <div className="left">
          <h1>{name}</h1>
          <div className="stars">{stars}</div>
        </div>
        <h3>{time}</h3>
      </div>

      <p>{text}</p>
    </Container>
  )
}

export default CardFeedback
