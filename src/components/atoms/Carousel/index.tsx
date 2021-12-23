import React, { useRef } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import styled from 'styled-components'
import Link from 'next/link'
import { api } from 'services/apiClient'
import useMedia from 'use-media'
import sizes from 'utils/sizes'

interface Carousel {
  data: {
    id: string
    name: string
    formatedName: string
    avgStars: number
    sumStars: number
    city: string
  }[]
  isProduct?: boolean
  promo?: boolean
}

const Carousel = ({ data = [], isProduct = false, promo }: Carousel) => {
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
        {data.map((store) => (
          <Link href={`/store/${store.formatedName}`} key={store.id}>
            <Item isProduct={isProduct}>
              <div
                className="head"
                style={
                  widthScreen
                    ? undefined
                    : isProduct
                    ? undefined
                    : { display: 'none' }
                }
              >
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/19/a4/6c/82/dining-and-bar-area.jpg"
                  className="store-banner"
                  alt="banner"
                />
              </div>

              {!isProduct && (
                <div className="logo">
                  <img
                    src="https://s3.amazonaws.com/thumbnails.venngage.com/template/bcf804f5-e6b0-4389-8c44-d64482f922dc.png"
                    alt="logo"
                  />
                </div>
              )}

              {!isProduct && (
                <>
                  <div className="info">
                    <h3>{store.name}</h3>

                    <div className="stars">
                      {[...new Array(store.avgStars)].map((e) => {
                        return (
                          <AiFillStar
                            key={e + 'fill'}
                            size={24}
                            color="var(--gold)"
                          />
                        )
                      })}
                      {[...new Array(5 - store.avgStars)].map((e) => {
                        return (
                          <AiOutlineStar
                            key={e + 'outline'}
                            size={24}
                            color="var(--gold)"
                          />
                        )
                      })}
                      <small>({store.sumStars})</small>
                    </div>
                    {!widthScreen && (
                      <span className="city">
                        <GoLocation size={15} color="var(--gray-600)" />
                        {store.city}
                      </span>
                    )}
                  </div>
                  {widthScreen && <span className="city">{store.city}</span>}
                </>
              )}
              {isProduct && (
                <div className="infoProduct">
                  <p>{store.name}</p>
                  <div className="stars">
                    <AiFillStar size={20} color="var(--gold)" />
                    <small>{store.sumStars} (110 pedidos)</small>
                  </div>
                  <span>
                    De:{' '}
                    <span style={{ textDecoration: 'line-through' }}>
                      R$ 3.099,99
                    </span>
                  </span>
                  <h3>R$ 289,99</h3>
                  <span>
                    Em até 12x sem juros ou <strong>R$ 2.899,99</strong> à vista
                  </span>
                </div>
              )}
              {isProduct && widthScreen && (
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
          </Link>
        ))}
      </Container>

      {widthScreen && (
        <Button onClick={handleScrollRight} position="right">
          <BiChevronRight size={26} color="black" />
        </Button>
      )}
      {!widthScreen && (
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

export default Carousel

const Wrapper = styled.div`
  width: 114%;
  display: flex;
  /* gap: 2rem; */
  align-items: center;
  transform: translateX(-7%);
  padding: 0 2rem;

  ${[sizes.down('lgMob')]} {
    flex-direction: column;
    padding: 0 0 0 2rem;
    .buttonsContainer {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      gap: 3rem;
      justify-content: flex-end;
      margin-right: 1rem;
    }
  }
`

type ButtonProp = {
  position?: string
}
const Button = styled.button<ButtonProp>`
  width: 4rem;
  height: 4rem;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  ${(props) => props.position === 'right' && 'border-radius: 0 50% 50% 0;'}
  ${(props) => props.position === 'left' && 'border-radius: 50% 0 0 50%;'}
  background: white;
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
  width: 100%;
  /* padding: 0.5rem 2rem; */
  padding: 0.5rem 0.25rem;

  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
type ItemProps = {
  isProduct: boolean
}

const Item = styled.div<ItemProps>`
  width: 260px;
  height: 360px;

  ${[sizes.down('lgMob')]} {
    width: 175px;
    height: 300px;
    border-radius: 16px;
    ${(props) => props.isProduct === false && 'width: 329px;'}
    ${(props) => props.isProduct === false && 'height: 120px;'}
    ${(props) => props.isProduct === false && 'flex-direction: row;'}

  }

  background: white;
  flex: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  margin-top: 1rem;

  .btnProductLeft {
    position: absolute;
    left: 5px;
    top: 30%;
    z-index: 3;
  }

  .btnProductRight {
    position: absolute;
    right: 5px;
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
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    overflow: hidden;
    ${(props) => props.isProduct && 'padding: 1.2rem 1.2rem 0 1.2rem;'}
    ${(props) => props.isProduct && 'height: 300px;'}
    img {
      ${(props) => props.isProduct && 'border-radius: 10px;'}
    }
  }

  .logo {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    text-align: left;
    border: 4px solid white;
    margin-top: -2.5rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    ${[sizes.down('lgMob')]} {
      width: 120px;
      height: 90px;
      margin: auto;
      margin-left: 1rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  img.store-banner {
    width: 100%;
    height: 100%;
  }
  .infoProduct {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.2rem;
    padding: 0 1rem 1rem 1rem;
    width: 100%;
    bottom: 0;
    span {
      font-size: 0.7rem;
    }
    h3 {
      content: '...'
      font-size: 1.5rem;
      color: var(--color-primary);
    }
  }

  .info,
  .infoProduct {
    .stars {
      display: flex;
      align-items: center;

      small {
        font-size: 0.75rem;
        margin-left: 0.25rem;
        color: var(--gray-600);
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--gray-100);

    ${[sizes.down('lgMob')]} {
      border-bottom: 0;
      align-items: flex-start;
      margin-left: 1rem;

      h3 {
        font-size: 1.5rem;
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
    margin-top: 0.6rem;
    color: var(--gray-600);
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
