import { Container } from './styles'
import React, { useState, ChangeEvent } from 'react'

import { RiPencilFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

import { AiFillCamera } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBuilding } from 'react-icons/fa'
import { PulseLoader } from 'react-spinners'
import { Button } from '../../atoms/Button'

interface DescriptionCard extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  quantStar?: number
  description?: string
  imgSrc?: any
  coverSrc?: any
  isLoading?: boolean
  button: any
  vazio?: boolean
  voidText?: string
}

const DescriptionCard = ({
  title,
  quantStar,
  description,
  imgSrc,
  coverSrc,
  isLoading,
  button,
  vazio,
  voidText,
  ...rest
}: DescriptionCard) => {
  const stars = [] //Criando um vetor de estrelas

  quantStar > 5 ? (quantStar = 5) : null //Tratativas para manter o máximo de estrelas como 5

  for (let i = 0; i < quantStar; i++) {
    stars.push(<AiFillStar size={18} color="var(--yellow)" />)
  }
  for (let i = quantStar; i < 5; i++) {
    stars.push(<AiOutlineStar size={18} color="var(--yellow)" />)
  }

  return (
    <Container>
      {isLoading ? (
        <div
          style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PulseLoader size={5} color="var(--color-primary)" />
        </div>
      ) : (
        <>
          <div className="top">
            <section>
              <img
                id="banner"
                src={coverSrc || '/images/capa.png'}
                alt="Banner"
                width="100"
                height="100"
              />
              <button onClick={button}>
                Editar
                <RiPencilFill size={15} className="icon" />
              </button>
              <div id="icon">
                <img src={imgSrc || '/images/shop-test.png'} alt="Ícone" />
                <h1>{title}</h1>
                <div>{stars}</div>
              </div>
            </section>
          </div>
          {!vazio ? (
            <>
              <div className="bottom">
                <h1>Descrição</h1>

                <p>{description}</p>
                {!description && <span>Nenhuma descrição cadastrada...</span>}
              </div>
            </>
          ) : (
            <>
              <div className="bottom">
                <h1>Descrição</h1>
                <div className="voidText">
                  <p>{voidText}</p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </Container>
  )
}

export default DescriptionCard
