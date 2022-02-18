import Header from '../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'

import { Button } from '../../components/atoms/Button'
import router from 'next/router'
import Link from 'next/link'
import { Input } from 'components/molecules/Input'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { HiOutlineKey } from 'react-icons/hi'
import { api } from 'services/apiClient'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
type TokenFormData = {
  tokenDigits: string
}
const tokenFormSchema = yup.object().shape({
  tokenDigits: yup.string().required('Token obrigatório').max(6)
})

const BusinessRegisterConfirm = () => {
  const [tokenDigits, setTokenDigits] = useState('')
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(tokenFormSchema)
  })

  const handleConfirmToken: SubmitHandler<TokenFormData> = async (
    values,
    event
  ) => {
    try {
      setLoading(true)
      await api.patch(`/auth/token?tokenDigits=${values.tokenDigits}`)

      router.push({
        pathname: '/email-confirmation',
        query: { tokenDigits: values.tokenDigits }
      })
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function sendConfirmation() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    setLoading(true)
    try {
      await api.post('/auth/send-confirmation-email', { email: user?.email })
    } catch (e) {
      toast.error(`${e}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
      setLoading(false)
    }
  }
  function getToken() {
    const data = JSON.parse(sessionStorage.getItem('AuthTokens'))

    if (data) {
      setToken(data.token)
    }

    setLoading(false)
  }
  useEffect(() => {
    getToken()
  }, [])

  return (
    <Wrapper>
      <Head>
        <title> Confirmação de cadastro | Boa de venda</title>
      </Head>
      {loading && (
        <div style={{ top: '50%', left: '50%', position: 'absolute' }}>
          <PulseLoader />
        </div>
      )}
      <Header />
      <Container>
        <form
          className="confirmationAuth"
          onSubmit={handleSubmit(handleConfirmToken)}
        >
          <h2>Confirmação de cadastro</h2>
          <p className="subtitle">
            Insira o token de segurança que foi enviado para o seu email e
            verifique sua conta
          </p>
          <div className="inputContainer">
            <Input
              label="Token"
              placeholder="______"
              icon={<HiOutlineKey size={20} />}
              maxLength={6}
              {...register('tokenDigits')}
              error={error || errors.tokenDigits}
              textError={errors.tokenDigits?.message || 'Token inválido'}
            />
          </div>
          <p>Não recebeu o código?</p>

          <span onClick={sendConfirmation}>
            <strong>Reenviar o código</strong>{' '}
          </span>
          <div className="buttonContainer" style={{ marginBottom: '1rem' }}>
            <div>
              <Button
                type="button"
                title="CONTINUAR"
                onClick={() => {
                  sessionStorage.clear()
                  router.push('/landing')
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
