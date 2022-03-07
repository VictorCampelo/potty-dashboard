import React from 'react'
import Head from 'next/head'
import Header from 'components/molecules/HeaderShop'
import { Input } from 'components/molecules/SearchInput'
import { AiOutlineSearch } from 'react-icons/ai'

import { Container, LeftSideContainer } from './styles'

const Result = () => {
  const nome = 'Leonardo'

  return (
    <>
      <Head>
        <title>Search | Boa de Venda</title>
      </Head>
      <Container>
        <Header />
        <div className="wrap-search-content">
          <Input
            type="text"
            placeholder="Pesquise por produto, serviço, estabelecimento ou cidade"
            icon={<AiOutlineSearch size={25} />}
            search
          />

          <div className="wrap-result-text">
            <h2>{`Resultados para ${nome}`}</h2>
          </div>
        </div>
        <LeftSideContainer />
      </Container>
    </>
  )
}

export default Result
