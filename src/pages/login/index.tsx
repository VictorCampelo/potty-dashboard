/* eslint-disable no-constant-condition */
import Link from 'next/link'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'
import { Input } from '../../components/molecules/Input'
import { Checkbox } from '../../components/atoms/Checkbox'
import { Button } from '../../components/atoms/Button'
import Header from '../../components/molecules/Header'

import { AuthContext } from '../../contexts/AuthContext'
import { useState, useContext } from 'react'

import { FiLock, FiMail } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

type ToastProps = {
  newMessage?: string
}

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const [rememberUser, setRememberUser] = useState(false)

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

      if (res.status === 200 || res.status === 201) {
        return router.push('/dashboard')
      }
    } catch (e) {
      if (e.message.includes(401) || e.message.includes(404)) {
        return handleSendErrorToast({ newMessage: 'Email ou senha incorretos' })
      } else {
        if (e.message.includes(412)) {
          return router.push('/auth/register/confirmation-token')
        }
        handleSendErrorToast({
          newMessage: 'Erro interno, tente novamente mais tarde'
        })
      }
    }
  }

  const handleSendErrorToast = ({ newMessage }: ToastProps) => {
    const message =
      newMessage || errors?.email?.message || errors?.password?.message
    if (message)
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
  }

  return (
    <Wrapper>
      <Head>
        <title>Login | Último</title>
      </Head>

      <Header />

      <Container>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="title">
            <h1>Login</h1>
          </div>

          <div className="inputContainer">
            <Input
              label="Email"
              type="email"
              placeholder="exemplo@gmail.com"
              error={errors.email !== undefined}
              icon={<FiMail size={20} color="var(--black-800)" />}
              {...register('email')}
            />

            <Input
              label="Senha"
              placeholder="********"
              password
              textError={'Email ou senha incorretos'}
              error={errors.password !== undefined}
              icon={<FiLock size={20} color="var(--black-800)" />}
              {...register('password')}
            />
          </div>

          <Checkbox
            label="Lembrar usuário"
            confirm={rememberUser}
            toggleConfirm={toggleRememberUser}
          />

          <div className="buttonContainer">
            <Button
              isLoading={isSubmitting}
              type="submit"
              title="Entrar"
              disabled={
                getValues('email') === '' || getValues('password') === ''
              }
            />
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
            <Link href="/cadastro">
              <a>Cadastre-se!</a>
            </Link>
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
    </Wrapper>
  )
}

export default Login
