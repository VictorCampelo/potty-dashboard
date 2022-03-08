import React from 'react'
import { Container } from './styles'

export const CardStoreItem = () => {
  return (
    <Container>
      <img src="/images/coffe-place.png" alt="" className="img-profile" />
      <div className="wrap-texts">
        <h2>Loja</h2>
        <div className="wrap-starts">
          <img src="/images/Estrelas.svg" alt="Estrelas" />
          <span>(925)</span>
        </div>
      </div>
      <img src="/images/coracao.svg" alt="coracao" />
    </Container>
  )
}
