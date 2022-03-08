import React, { useState } from 'react'
import Head from 'next/head'
import Header from 'components/molecules/HeaderShop'
import { Input } from 'components/molecules/SearchInput'
import { AiOutlineSearch } from 'react-icons/ai'

import {
  Container,
  LeftSideContainer,
  MainContent,
  WrapMainContent
} from './styles'
import { api } from 'services/apiClient'

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
}

const Result = () => {
  const [search, setSearch] = useState('')
  const [searchTitle, setSearchTitle] = useState('')
  const [searchData, setSearchData] = useState<ISearchProps>({} as ISearchProps)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchTitle(search)
    getData()
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
            <h1>leonardo</h1>
          </LeftSideContainer>
          <MainContent>
            <p>Lima</p>
          </MainContent>
        </WrapMainContent>
      </Container>
    </>
  )
}

export default Result
