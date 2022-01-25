import React, { useRef } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import styled from 'styled-components'
import Link from 'next/link'
import { api } from 'services/apiClient'
import useMedia from 'use-media'
import sizes from 'utils/sizes'

interface Category {
  createdAt: string
  enabled: boolean
  id: string
  name: string
  storeProductsId: string
  type: string
  updatedAt: string
}

interface File {
  alternativeText: null | string
  caption: null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  ext: null
  filename: string
  formats: string | null
  hash: string | null
  height: string | null
  id: string
  mime: null
  name: string
  previewUrl: null
  provider: null
  providerMetadata: null
  tags: null
  updatedAt: string
  updatedBy: null
  url: string
  width: string | null
}

interface CarouselProducts {
  data: {
    avgStars: number
    categories: Category[]
    createdAt: string
    deletedAt: string | null
    description: string
    discount: number
    files: File[]
    id: string
    inventory: number
    lastSold: null
    parcelAmount: number
    price: number
    storeId: string
    sumFeedbacks: number
    sumOrders: number
    sumStars: number
    tags: null
    title: string
    updatedAt: string
  }[]
  promo?: boolean
  buttons?: boolean
  storeName: string
}

const CarouselProducts = ({
  data = [],
  promo,
  storeName,
  buttons = true
}: CarouselProducts) => {
  const carousel = useRef(null)

  function handleScrollLeft(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()
    carousel.current.scrollLeft -= 276
  }

  function handleScrollRight(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()
    carousel.current.scrollLeft += 276
  }

  const widthScreen = useMedia({ minWidth: '426px' })

  return (
    <Wrapper>
      {widthScreen && (
        <Button onClick={handleScrollLeft} position="left">
          <BiChevronLeft size={26} color="black" />
        </Button>
      )}

      <Container ref={carousel}>
        {data.map((product) => (
          <a
            href={`http://${storeName}.${process.env.HOST_NAME}/store/product/${product.id}`}
            // href={`/store/product/${product.id}`}
            key={product.id}
          >
            <Item>
              <div className="head">
                <img
                  src={product.files[0].url || '/images/capa-small.png'}
                  className="store-banner"
                  alt="banner"
                />
              </div>
              <div className="infoProduct">
                <p>{product.title}</p>
                <div className="stars">
                  <AiFillStar size={20} color="var(--gold)" />
                  <small>
                    {product.avgStars} ({product.sumOrders} pedidos)
                  </small>
                </div>
                {product.discount > 0 && (
                  <>
                    <span>
                      De:{' '}
                      <span style={{ textDecoration: 'line-through' }}>
                        R$ {product.price.toFixed(2)}
                      </span>
                    </span>
                  </>
                )}
                {product.discount > 0 ? (
                  <h3>R$ {(product.price - product.discount).toFixed(2)}</h3>
                ) : product.parcelAmount > 0 ? (
                  <h3>
                    R$ {(product.price / product.parcelAmount).toFixed(2)}
                  </h3>
                ) : (
                  <h3>R$ {product.price}</h3>
                )}
                {product.parcelAmount > 1 && (
                  <>
                    <span>
                      Em até {product.parcelAmount}x sem juros ou{' '}
                      <strong>R$ {product.price.toFixed(2)}</strong> à vista
                    </span>
                  </>
                )}
              </div>
              {widthScreen && (
                <>
                  <ButtonProduct className="btnProductLeft">
                    <BiChevronLeft size={15} color="black" />
                  </ButtonProduct>
                  <ButtonProduct className="btnProductRight">
                    <BiChevronRight size={15} color="black" />
                  </ButtonProduct>
                </>
              )}
              {promo && widthScreen && (
                <img src="/images/promo.svg" alt="promo" className="promo" />
              )}
            </Item>
          </a>
        ))}
      </Container>

      {widthScreen && (
        <Button onClick={handleScrollRight} position="right">
          <BiChevronRight size={26} color="black" />
        </Button>
      )}
      {!widthScreen && buttons && (
        <div className="buttonsContainer">
          <ButtonMobile onClick={handleScrollLeft}>
            <BiChevronLeft size={26} color="black" />
          </ButtonMobile>
          <ButtonMobile onClick={handleScrollRight}>
            <BiChevronRight size={26} color="black" />
          </ButtonMobile>
        </div>
      )}
    </Wrapper>
  )
}

export default CarouselProducts

const Wrapper = styled.div`
  width: 114%;
  display: flex;
  /* gap: 2rem; */
  align-items: center;
  transform: translateX(-7%);
  padding: 1rem 2rem;

  ${[sizes.down('lgMob')]} {
    width: 114%;
    flex-direction: column;
    padding: 0 0 0 var(--spacing-xs);

    .buttonsContainer {
      display: flex;

      width: 100%;
      margin-top: var(--spacing-xxxs);

      gap: 1.5rem;
      justify-content: flex-end;
      margin-right: var(--spacing-xxxs);
    }
  }
`

type ButtonProp = {
  position?: string
}
const Button = styled.button<ButtonProp>`
  width: 2rem;
  height: 2rem;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  width: 2rem;
  height: 2rem;

  border: none;
  border-radius: var(--border-radius-md);

  ${(props) => props.position === 'right' && 'border-radius: 0 50% 50% 0;'}
  ${(props) => props.position === 'left' && 'border-radius: 50% 0 0 50%;'}

  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const ButtonProduct = styled(Button)`
  width: 1.8rem;
  height: 1.8rem;
`
const ButtonMobile = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
`

const Container = styled.div`
  display: flex;
  max-width: 100vw !important;
  /* padding: var(--spacing-nano) var(--spacing-quarck); */
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 1rem;
  scrollbar-width: none;
  padding: var(--spacing-nano) 0;
  ${[sizes.down('lgMob')]} {
    padding: var(--spacing-nano);
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  flex-direction: column;

  width: 260px;
  height: 360px;
  background: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--border-radius-gg);

  overflow: hidden;
  cursor: pointer;
  position: relative;
  margin-top: var(--spacing-xxxs);

  ${[sizes.down('lgMob')]} {
    width: 175px;
    height: 300px;
    border-radius: var(--border-radius-md);
  }

  .btnProductLeft {
    position: absolute;
    left: var(--spacing-quarck);
    top: 30%;
    z-index: 3;
  }

  .btnProductRight {
    position: absolute;
    right: var(--spacing-quarck);
    top: 30%;
    z-index: 3;
  }

  .promo {
    position: absolute;
    z-index: 3;
    right: 0;
    width: 75px;
  }

  .head {
    display: flex;
    align-items: center;

    width: 100%;
    height: 190px;
    overflow: hidden;
    padding: 1.2rem 1.2rem 0 1.2rem;
    height: 300px;
    ${[sizes.down('lgMob')]} {
      height: 150px;
    }
    img {
      border-radius: 10px;
    }
  }

  .logo {
    display: flex;

    width: 4rem;
    height: 4rem;

    border-radius: 50%;

    text-align: left;
    border: 4px solid white;
    margin-top: calc(var(--spacing-sm) * -1);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    ${[sizes.down('lgMob')]} {
      width: 120px;
      height: 90px;
      margin: auto;
      margin-left: var(--spacing-xxxs);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  img.store-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .infoProduct {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    margin-top: var(--spacing-quarck);
    padding: 0 var(--spacing-xxxs) var(--spacing-xxxs) var(--spacing-xxxs);

    bottom: 0;
    span {
      font-size: 0.7rem;
    }
    h3 {
      content: '...';
      font-size: var(--font-size-md);
      color: var(--color-primary);
      margin-left: 0;
    }
  }

  .info,
  .infoProduct {
    .stars {
      display: flex;
      align-items: center;

      small {
        font-size: var(--font-size-xxxxs);
        margin-left: var(--spacing-quarck);
        color: var(--gray-600);
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    margin-top: var(--spacing-nano);
    padding-bottom: var(--spacing-xxxs);
    border-bottom: var(--border-width-hairline) solid var(--gray-100);

    ${[sizes.down('lgMob')]} {
      border-bottom: 0;
      align-items: flex-start;
      margin-left: var(--spacing-xxxs);

      h3 {
        font-size: var(--font-size-md);
      }
    }

    .stars {
      padding-left: 0.8rem;

      ${[sizes.down('lgMob')]} {
        padding: 0;
      }
    }
  }

  .city {
    display: flex;
    align-items: center;

    margin-top: var(--spacing-nano);
    color: var(--gray-600);
    gap: 10px;
  }
`
