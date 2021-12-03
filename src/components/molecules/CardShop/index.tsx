import { AiFillPropertySafety } from 'react-icons/ai'
import { number } from 'yup'
import CardProduct from '../CardProduct'
import { Container } from './styles'

interface CardShop extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  dataSelector?: boolean
  width?: string
}

const CardShop = ({
  title,
  dataSelector = false,
  width,
  ...rest
}: CardShop) => {
  return (
    <Container width={width}>
      <h1>{title}</h1>

      {dataSelector ? (
        <select name="select" id="select-data-info">
          <option value="diario">Diário</option>
          <option value="semanal" selected>
            Semanal
          </option>
          <option value="mensal">Mensal</option>
        </select>
      ) : null}

      <div className="product">{rest.children}</div>
    </Container>
  )
}

export default CardShop
