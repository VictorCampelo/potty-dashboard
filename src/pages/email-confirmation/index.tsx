import { useState } from 'react'
import { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import { api } from '../../services/apiClient'
import Header from '../../components/molecules/Header'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { Container, Wrapper } from '../../styles/pages/preLogin'
import { Button } from 'components/atoms/Button'
import router, { useRouter } from 'next/router'
import { copyFileSync } from 'fs'

export default function confirmation() {
  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState('')

  const { token, tokenDigits } = useRouter().query

  async function confirmEmail() {
    if (token) {
      await api
        .patch(`/auth/token?tokenUrl=${token}`)
        .catch((error) => {
          toast.error(`${error}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else if (tokenDigits) {
      setIsLoading(false)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    if (token || tokenDigits) {
      confirmEmail()
    }
  }, [token, tokenDigits])

  return (
    <Wrapper>
      <Head>
        <title>Confirmação de cadastro | Boa de venda</title>
      </Head>
      <Header />
      {isLoading ? (
        <div
          style={{
            left: '50%',
            top: '50%',
            width: 100,
            position: 'absolute'
          }}
        >
          <PulseLoader />
        </div>
      ) : (
        <Container>
          <form className="confirmationAuth" style={{ textAlign: 'center' }}>
            <img src="/images/right.svg" className="confirmImg" />

            <h2>Cadastro confirmado com sucesso</h2>
            <div className="buttonContainer">
              <div>
                <Button
                  type="button"
                  title="CONTINUAR"
                  onClick={() => {
                    router.push('/login')
                  }}
                />
              </div>
            </div>
          </form>
        </Container>
      )}
    </Wrapper>
  )
}
