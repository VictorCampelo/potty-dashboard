import { Wrapper, Container } from 'styles/pages/preLogin'
import Head from 'next/head'
import Header from 'components/molecules/Header'
import Image from 'next/image'
import { Button } from 'components/atoms/Button'
import router from 'next/router'

export default function recommendationSignature() {
  return (
    <Wrapper>
      <Head>
        <title>Recomendação de planos | Boa de Venda</title>
      </Head>
      <Header />
      <Container>
        <div className="container">
          <div className="title">
            <h2>Assine um plano pra continuar!</h2>
            <p>
              <strong>Ficamos felizes que tenha realizado seu cadastro!</strong>
            </p>
            <p className="information">
              Para continuar usufruindo da plataforma,{' '}
              <span>assine um de nossos planos</span> para ter acesso completo à
              nossa experiência
            </p>
          </div>
          <div className="buttonImage">
            <div className="buttonContainer">
              <Button
                title="VER PLANOS"
                onClick={() => {
                  router.push('/landing')
                }}
              />
            </div>
            <div className="imgContainer">
              <Image
                src="/images/recomendaPlano.svg"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
