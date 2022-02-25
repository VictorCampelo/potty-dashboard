import Head from 'next/head'

import { Wrapper, Container } from 'styles/GlobalStyle'

import Header from 'components/molecules/HeaderShop'
import FooterLanding from 'components/organisms/FooterLanding'
import BannerLanding from 'components/organisms/BannerLanding'
import BenefitsLanding from 'components/organisms/BenefitsLanding'
import PlansLanding from 'components/organisms/PlansLanding'

import { useNonSubscribe } from 'contexts/NonSubscribeContext'

const Landing = () => {
  const { showModal } = useNonSubscribe()

  return (
    <Wrapper>
      <Head>
        <title>Landing | Boa de Venda</title>
      </Head>

      <Header />

      <Container>
        <button onClick={() => showModal()}>Click me</button>
        <BannerLanding />

        <BenefitsLanding />

        <PlansLanding />

        <FooterLanding />
      </Container>
    </Wrapper>
  )
}

export default Landing
