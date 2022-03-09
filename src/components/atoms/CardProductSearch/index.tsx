import React from 'react'
import { Container } from './styles'

interface ICardProductSearchProps {
  storeName: string
  stars: number
  price: number
  description: string
  imgUrl: string
}

export const CardProductSearch = ({
  description,
  price,
  stars,
  storeName,
  imgUrl
}: ICardProductSearchProps) => {
  return (
    <Container>
      <img
        src={imgUrl || '/images/emptyProducts.svg'}
        alt="img-produto"
        className="img-product"
      />
      <div className="wrap-info-card">
        <h3>{description}</h3>
        <div className="wrap-footer">
          <p className="price">R$ {price}</p>
          <div className="wrap-star">
            <img src="/images/Star.svg" alt="estrela" />
            <p>4,5 ({stars} avaliações)</p>
          </div>
          <a href="">{storeName}</a>
        </div>
      </div>
    </Container>
  )
}
