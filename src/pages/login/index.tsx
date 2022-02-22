/* eslint-disable no-constant-condition */
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Wrapper } from '../../styles/pages/preLogin'
import { Input } from '../../components/molecules/Input'
import { Checkbox } from '../../components/atoms/Checkbox'
import { Button } from '../../components/atoms/Button'
import CustomModal from '../../components/molecules/CustomModal'

import Header from '../../components/molecules/Header'

import { AuthContext } from '../../contexts/AuthContext'
import { useState, useContext } from 'react'

import { FiLock, FiMail, FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaFacebookF } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ErrorToast } from 'utils/toasts'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo 8 caracteres')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const [rememberUser, setRememberUser] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)

  function toggleModalVisible() {
    setModalVisible(!modalVisible)
  }
  const router = useRouter()

  const { signIn } = useContext(AuthContext)

  function toggleRememberUser() {
    setRememberUser(!rememberUser)
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    try {
      const user = {
        email: values.email,
        password: values.password
      }

      const res = await signIn(user)

      if (res.data.user.role === 'USER') {
        return router.push('/')
      }
      if (res.data.user.role === 'OWNER') {
        return router.push('/dashboard')
      }
    } catch (e) {
      if (e.message.includes(401) || e.message.includes(404)) {
        return ErrorToast({ newMessage: 'Email ou senha incorretos' })
      } else {
        if (e.message.includes(412)) {
          return router.push('/auth/register/confirmation-token')
        }
        ErrorToast({
          newMessage: 'Erro interno, tente novamente mais tarde'
        })
      }
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Login | Último</title>
      </Head>

      <Header />

      <Container style={{ marginBottom: 'var(--spacing-xxs)' }}>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="title logo">
            <h1>Login</h1>
            <img src="/images/logo.svg" alt="logo" width={150} height={150} />
          </div>

          <div className="inputContainer">
            <Input
              label="Email"
              type="email"
              placeholder="exemplo@gmail.com"
              icon={<FiMail size={20} color="var(--black-800)" />}
              {...register('email')}
              textError={errors.email?.message}
              error={errors.email}
            />

            <Input
              label="Senha"
              placeholder="********"
              password
              icon={<FiLock size={20} color="var(--black-800)" />}
              {...register('password')}
              textError={errors.password?.message}
              error={errors.password}
            />
          </div>

          <Checkbox
            label="Lembrar usuário"
            confirm={rememberUser}
            toggleConfirm={toggleRememberUser}
            recovery
          />

          <div className="buttonContainer">
            <Button isLoading={isSubmitting} type="submit" title="Entrar" />
          </div>

          <div className="divisorContainer">
            <div className="divisor" />
            ou
            <div className="divisor" />
          </div>

          <div className="social">
            <AiFillGoogleCircle size={50} color="var(--gray-700)" />
            <FaFacebook size={50} color="var(--gray-700)" />
          </div>

          <div className="register">
            Não possui conta?{' '}
            <button
              type="button"
              onClick={() => setModalVisible(true)}
              style={{
                border: 0,
                backgroundColor: 'var(--white)',
                textDecoration: 'underline'
              }}
            >
              <strong>Cadastre-se!</strong>
            </button>
            <CustomModal
              buttons={false}
              setModalOpen={toggleModalVisible}
              modalVisible={modalVisible}
            >
              <div className="modalAuth">
                <div
                  className="title"
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '1rem',
                    marginRight: '2rem'
                  }}
                >
                  <h1 style={{ color: '#363F4E', fontSize: '1.5rem' }}>
                    Formas de cadastro
                  </h1>
                  <FiX
                    size={25}
                    color="var(--black-800)"
                    onClick={toggleModalVisible}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      right: 20,
                      top: 30
                    }}
                  />
                </div>
                <div className="buttonsContainer">
                  <Button
                    title="LOJISTA"
                    style={{ marginBottom: 'var(--spacing-xxs)' }}
                    onClick={() => {
                      router.push('/cadastro/lojista')
                    }}
                  />

                  <Button
                    border
                    title="CLIENTE"
                    onClick={() => {
                      router.push('/cadastro')
                    }}
                  />
                </div>
              </div>
            </CustomModal>
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

export default Login
