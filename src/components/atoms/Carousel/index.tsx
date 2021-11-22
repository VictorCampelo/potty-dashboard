import React, { useRef } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'
import Link from 'next/link'
import { api } from 'services/apiClient'

interface Carousel {
  data: {
    id: string
    name: string
    formatedName: string
    avgStars: number
    sumStars: number
    city: string
  }[]
}

const Carousel = ({ data = [] }: Carousel) => {
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

  return (
    <Wrapper>
      <Button onClick={handleScrollLeft}>
        <BiChevronLeft size={26} color="black" />
      </Button>

      <Container ref={carousel}>
        {data.map((store) => (
          <Link href={`/store/${store.formatedName}`} key={store.id}>
            <Item>
              <div className="head">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/19/a4/6c/82/dining-and-bar-area.jpg"
                  className="store-banner"
                  alt="banner"
                />
              </div>

              <div className="logo">
                <img
                  src="https://s3.amazonaws.com/thumbnails.venngage.com/template/bcf804f5-e6b0-4389-8c44-d64482f922dc.png"
                  alt="logo"
                />
              </div>

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
              </div>

              <span className="city">{store.city}</span>
            </Item>
          </Link>
        ))}
      </Container>

      <Button onClick={handleScrollRight}>
        <BiChevronRight size={26} color="black" />
      </Button>
    </Wrapper>
  )
}

export default Carousel

const Wrapper = styled.div`
  width: 114%;
  display: flex;
  gap: 2rem;
  align-items: center;
  transform: translateX(-7%);
`

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.25rem;

  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.div`
  width: 260px;
  height: 340px;
  background: white;
  flex: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  margin-top: 1rem;

  .head {
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .logo {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    border: 4px solid white;
    margin-top: -2.5rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  img.store-banner {
    width: 100%;
    height: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--gray-100);

    .stars {
      display: flex;
      align-items: center;
      padding-left: 0.8rem;

      small {
        font-size: 0.75rem;
        margin-left: 0.25rem;
        color: var(--gray-600);
      }
    }
  }

  .city {
    margin-top: 0.6rem;
    color: var(--gray-600);
  }
`
