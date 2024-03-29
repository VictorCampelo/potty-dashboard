import React, { useRef, useState, useEffect } from 'react'
import Router from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'
import useMedia from 'use-media'
import sizes from 'utils/sizes'
import formatToBrl from 'utils/formatToBrl'

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
    store: { formatedName: string }
    storeId: string
    sumFeedbacks: number
    sumOrders: number
    sumStars: number
    tags: null
    title: string
    updatedAt: string
  }[]
  storeName?: string
  promo?: boolean
  buttons?: boolean
}

type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const CarouselProducts = ({
  data = [],
  promo,
  buttons = true
}: CarouselProducts) => {
  const carousel = useRef(null)
  const [activeImage, setActiveImage] = useState({})

  const handleScrollLeft = (e: ButtonMouseEvent) => {
    e.preventDefault()
    carousel.current.scrollLeft -= 276
  }

  const handleScrollRight = (e: ButtonMouseEvent) => {
    e.preventDefault()
    carousel.current.scrollLeft += 276
  }

  const widthScreen = useMedia({ minWidth: '426px' })

  const previousImage = (product) => {
    const activeUrl = activeImage[product.id]
    const currentIndex = product.files.findIndex(({ url }) => url === activeUrl)
    const nextIndex =
      currentIndex - 1 < 0 ? product.files.length - 1 : currentIndex - 1
    setActiveImage({
      ...activeImage,
      [product.id]: product.files[nextIndex].url
    })
  }

  const nextImage = (product) => {
    const activeUrl = activeImage[product.id]
    const currentIndex = product.files.findIndex(({ url }) => url === activeUrl)
    const nextIndex =
      currentIndex + 1 > product.files.length - 1 ? 0 : currentIndex + 1
    setActiveImage({
      ...activeImage,
      [product.id]: product.files[nextIndex].url
    })
  }
  const redirectToProduct = (productId: string) => {
    Router.push(
      `${location.protocol}//${data[0]?.store?.formatedName}.${process.env.hostName}/store/product/${productId}`
    )
  }

  const getDiscount = (price: number, discount: number) =>
    price - (price * discount) / 100

  useEffect(() => {
    const newActiveImage = {}
    data.forEach((product) => {
      newActiveImage[product.id] =
        product.files[0]?.url || '/images/capa-small.png'
    })
    setActiveImage(newActiveImage)
  }, [])

  return (
    <Wrapper>
      {widthScreen && (
        <Button onClick={handleScrollLeft} position="left">
          <BiChevronLeft size={26} color="black" />
        </Button>
      )}

      <Container ref={carousel}>
        {data.map((product) => {
          return (
            <Item key={product.id}>
              <div
                className="head"
                onClick={() => redirectToProduct(product.id)}
              >
                <img
                  src={activeImage[product.id]}
                  className="store-banner"
                  alt="banner"
                />
              </div>
              <div
                className="infoProduct"
                onClick={() => redirectToProduct(product.id)}
              >
                <p>{`${product.title.substring(0, 26)}...`}</p>
                <div className="stars">
                  <AiFillStar size={20} color="var(--gold)" />
                  <small>
                    {product.avgStars} ({product.sumOrders} pedidos)
                  </small>
                </div>
                {product.discount && (
                  <>
                    <span>
                      De:{' '}
                      <span style={{ textDecoration: 'line-through' }}>
                        {formatToBrl(product.price)}
                      </span>
                    </span>
                  </>
                )}
                {product.discount ? (
                  <h3>
                    {formatToBrl(getDiscount(product.price, product.discount))}
                  </h3>
                ) : product.parcelAmount > 0 ? (
                  <h3>{formatToBrl(product.price / product.parcelAmount)}</h3>
                ) : (
                  <h3>{formatToBrl(product.price)}</h3>
                )}
                {product.parcelAmount > 1 && (
                  <span>
                    Em até {product.parcelAmount}x sem juros ou{' '}
                    <strong>
                      {formatToBrl(
                        product.discount
                          ? getDiscount(product.price, product.discount)
                          : product.price
                      )}
                    </strong>{' '}
                    à vista
                  </span>
                )}
              </div>
              {widthScreen && (
                <>
                  <ButtonProduct
                    className="btnProductLeft"
                    onClick={() => previousImage(product)}
                  >
                    <BiChevronLeft size={15} color="black" />
                  </ButtonProduct>
                  <ButtonProduct
                    className="btnProductRight"
                    onClick={() => nextImage(product)}
                  >
                    <BiChevronRight size={15} color="black" />
                  </ButtonProduct>
                </>
              )}
              {promo && widthScreen && (
                <div
                  className="promoContainer"
                  onClick={() => redirectToProduct(product.id)}
                >
                  {`${product?.discount?.toFixed(1)}%`}
                  <br></br>OFF
                </div>
              )}
            </Item>
          )
        })}
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
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
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

  .promoContainer {
    display: flex;
    position: absolute;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-left: 70%;
    margin-top: 5%;
    background-image: url('/images/promo.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70px 100px;
    object-fit: contain;
    color: var(--white);
    text-align: center;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xxxxs);
  }
`
