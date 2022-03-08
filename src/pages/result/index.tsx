import React, { useState } from 'react'
import Head from 'next/head'
import Header from 'components/molecules/HeaderShop'
import { Input } from 'components/molecules/SearchInput'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'

import {
  Container,
  LeftSideContainer,
  MainContent,
  WrapMainContent
} from './styles'
import { api } from 'services/apiClient'
import Carousel from 'components/atoms/Carousel'
import { CardStoreItem } from 'components/atoms/CardStoreItem'

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchTitle(search)
    getData()
    setSearch('')
  }

  async function getData() {
    const { data } = await api.get('/stores/search?parameter=' + search)
    console.log(data)
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
              <a href="">Menor resultado</a>
              <a href="">Mais pedidos</a>
              <a href="">Mais recente</a>
              <a href="">Preço</a>
            </div>

            <h3>Filtrar por:</h3>
            <div className="wrap-filter">
              <label>
                <input type="checkbox" />
                4.0 ou mais
              </label>
              <label>
                <input type="checkbox" />
                Desconto
              </label>
            </div>

            <h3>Listar como:</h3>
            <div className="wrap-order-icons">
              <IoGridSharp />
              <FaList />
            </div>

            <a href="">Mostrar somente lojas</a>
          </LeftSideContainer>
          <MainContent>
            <h3>Lojas</h3>
            <div>
              <CardStoreItem />
            </div>
          </MainContent>
        </WrapMainContent>
      </Container>
    </>
  )
}

export default Result
