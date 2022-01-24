import Header from '../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'

import { Button } from '../../components/atoms/Button'
import router from 'next/router'

const BusinessRegisterConfirm = () => {
  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header />
      <Container>
        <form className="confirmationAuth">
          <img src="/images/usercard.png" className="confirmImg" />

          <h2>Cadastro efetuado com sucesso!</h2>

          <div className="buttonContainer">
            <div>
              <Button
                type="button"
                title="CONTINUAR"
                onClick={() => {
                  sessionStorage.clear()
                  router.push('/login')
                }}
              />
            </div>
          </div>
        </form>
      </Container>

      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '85%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave1.svg"
        alt="wave 1"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '65%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave2.svg"
        alt="wave 2"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '55%',
          zIndex: -1
        }}
        src="/images/illustration1.svg"
        alt="illustration 1"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '50%',
          zIndex: -1
        }}
        src="/images/illustration2.svg"
        alt="illustration 2"
      />
    </Wrapper>
  )
}

export default BusinessRegisterConfirm
