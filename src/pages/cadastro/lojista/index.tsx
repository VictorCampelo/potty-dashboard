import Header from '../../../components/molecules/Header'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Wrapper } from '../../../styles/pages/preLogin'

import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../../../components/molecules/Input'
import { useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ShopkeeperContext } from '../../../contexts/ShopkeeperContext'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMedia } from 'use-media'

type SignUpFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const registerFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo 8 caracteres')
    .matches(/[A-Z]+/, 'Deve conter, um caracter maiúsculo')
    .matches(/[@$!%*#?&]+/, 'Deve conter, um caracter especial')
    .matches(/\d+/, 'Deve conter, um número'),
  passwordConfirmation: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais')
})

const RegisterShopkeeper = () => {
  const router = useRouter()

  const { setUser } = useContext(ShopkeeperContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({
    resolver: yupResolver(registerFormSchema)
  })

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values, event) => {
    try {
      const user = {
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation
      }

      setUser(user)
      router.push('/business-register')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Registro Lojista | Último</title>
      </Head>

      <Header />
      <Container>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="title">
            <h1>Cadastro lojista</h1>
            <Link href="/cadastro">
              <a>Voltar ao cadastro</a>
            </Link>
          </div>
          <div className="inputContainer">
            <Input
              label="Email"
              placeholder="exemplo@gmail.com"
              className="input"
              icon={<FiMail size={20} color="var(--black-800)" />}
              {...register('email')}
              textError={errors.email?.message}
              error={errors.email}
            />

            <Input
              label="Senha"
              placeholder="********"
              className="input"
              password
              icon={<FiLock size={20} color="var(--black-800)" />}
              {...register('password')}
              textError={errors.password?.message}
              error={errors.password}
            />

            <Input
              label="Repetir senha"
              placeholder="********"
              className="input"
              password
              icon={<FiLock size={20} color="var(--black-800)" />}
              {...register('passwordConfirmation')}
              textError={errors.passwordConfirmation?.message}
              error={errors.passwordConfirmation}
            />
          </div>

          <div className="buttonContainer">
            <Button type="submit" title="CONTINUAR" />
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
            Já possui conta?{' '}
            <Link href="/login">
              <a>Faça seu login!</a>
            </Link>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default RegisterShopkeeper
