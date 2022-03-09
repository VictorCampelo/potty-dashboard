import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from 'components/molecules/HeaderShop'
import { Input } from 'components/molecules/SearchInput'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'
import { useRouter } from 'next/router'

import {
  Container,
  LeftSideContainer,
  MainContent,
  WrapMainContent
} from './styles'
import { api } from 'services/apiClient'

import { CarouselStore } from 'components/atoms/CarouselStore'
import { CardProductSearch } from 'components/atoms/CardProductSearch'

interface ISearchProps {
  productsFound: [
    {
      avgStars: number
      categories: [
        {
          enabled: boolean
          id: string
          name: string
          storeProductsId: string
          type: string
        }
      ]
      description: string
      discount: number
      files: [
        {
          filename: string
          id: string
          name: string
          url: string
        }
      ]
      id: string
      inventory: number
      lastSold: number | null
      parcelAmount: number
      price: number
      storeId: string
      sumFeedbacks: number
      sumOrders: number
      sumStars: number
      tags: string | null
      title: string
    }
  ]
  storesFound: [
    {
      CNPJ: string
      addressNumber: number
      avatar: { id: string; name: string; filename: string; url: string }
      avgStars: number
      background: {
        id: string
        name: string
        filename: string
        url: string
      }
      categories: [
        {
          enabled: boolean
          id: string
          name: string
          storeProductsId: string | null
          type: string
        }
      ]
      city: string
      deliveryFee: number
      description: string
      enabled: boolean
      facebookLink: string
      formatedName: string
      id: string
      instagramLink: string | null
      likes: number
      name: string
      neighborhood: string
      phone: string
      productCategories: [
        {
          enabled: boolean
          id: string
          name: string
          storeProductsId: string
          type: string
        }
      ]
      schedules: {
        dom: []
        qua: []
        qui: []
        sab: []
        seg: []
        sex: []
        ter: []
      }
      state: string
      street: string
      sumFeedbacks: number
      sumOrders: number
      sumStars: number
      whatsappLink: string | null
      zipcode: string
    }
  ]
}

const Result = () => {
  const [search, setSearch] = useState('')
  const [searchTitle, setSearchTitle] = useState('')
  const [searchData, setSearchData] = useState<ISearchProps>({} as ISearchProps)
  const router = useRouter()

  useEffect(() => {
    setSearch(router.query.search as string)
    getData()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchTitle(search)
    getData()
    setSearch('')
  }

  async function getData() {
    const { data } = await api.get('/stores/search?parameter=' + search)
    setSearchData(data)
  }

  return (
    <>
      <Head>
        <title>Search | Boa de Venda</title>
      </Head>
      <Container>
        <Header />
        <form className="wrap-search-content" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise por produto, serviço, estabelecimento ou cidade"
            icon={<AiOutlineSearch size={25} />}
            search
          />
        </form>
        <div className="wrap-result-text">
          <h3>{searchTitle && `Resultados para '${searchTitle}'`}</h3>
        </div>
        <WrapMainContent>
          <LeftSideContainer>
            <h3>Ordenar por:</h3>
            <div className="wrap-order">
              <button>Menor resultado</button>
              <button>Mais pedidos</button>
              <button>Mais recente</button>
              <button>
                Preço <img src="/images/updown.svg" alt="updown" />
              </button>
            </div>

            <h3>Filtrar por:</h3>
            <div className="wrap-filter">
              <div className="wrap-input">
                <label>
                  <input type="checkbox" />
                  <span>
                    <img src="/images/Star.svg" alt="estrela" /> 4.0 ou mais
                  </span>
                </label>
              </div>

              <div className="wrap-input">
                <label>
                  <input type="checkbox" />
                  <span>Desconto</span>
                </label>
              </div>
            </div>

            <h3>Listar como:</h3>
            <div className="wrap-order-icons">
              <IoGridSharp />
              <FaList />
            </div>

            <button className="link">Mostrar somente lojas</button>
          </LeftSideContainer>
          <MainContent>
            {searchData.storesFound ? (
              <>
                <h3>Lojas</h3>
                <div className="wrap-cards-store">
                  <CarouselStore stores={searchData.storesFound} />
                </div>
              </>
            ) : null}

            {searchData.productsFound && <h3>Produtos</h3>}
            <div className="wrap-cards-products">
              {searchData.productsFound &&
                searchData.productsFound.map((product, i) => (
                  <CardProductSearch
                    description={product.description}
                    price={product.price}
                    stars={product.avgStars}
                    imgUrl={product.files[0]?.url}
                    key={i}
                    storeName={product.title}
                  />
                ))}
            </div>
          </MainContent>
        </WrapMainContent>
      </Container>
    </>
  )
}

export default Result
