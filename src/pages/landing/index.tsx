import Head from 'next/head'

import { Wrapper, Container } from 'styles/GlobalStyle'

import Header from 'components/molecules/HeaderShop'
import FooterLanding from 'components/organisms/FooterLanding'
import BannerLanding from 'components/organisms/BannerLanding'

const Landing = () => {
  return (
    <Wrapper>
      <Head>
        <title>Landing | Boa de Venda</title>
      </Head>

      <Header />

      <Container>
        <BannerLanding />

        <FooterLanding />
      </Container>
    </Wrapper>
  )
}

export default Landing
