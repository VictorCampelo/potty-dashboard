import Header from '../../components/molecules/Header'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'

import { FiLock, FiMail, FiChevronLeft } from 'react-icons/fi'
import { Input } from '../../components/molecules/Input'
import { Checkbox } from '../../components/atoms/Checkbox'
import { useState, useEffect } from 'react'
import { Button } from '../../components/atoms/Button'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { signUp } from '../../services/auth.services'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorToast } from 'utils/toasts'
import { useMedia } from 'use-media'

type SignUpFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const registerFormSchema = yup.object().shape({
  firstName: yup.string().required('Primeiro nome obrigatório'),
  lastName: yup.string().required('Último nome obrigatório'),
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

const Register = () => {
  const router = useRouter()
  // Estado para fazer a responsividade
  const [show, setShow] = useState(1)
  const widthWindow = useMedia({ minWidth: '426px' })

  function showPrimary(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setShow(1)
  }

  function showSecondary(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setShow(2)
  }

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
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation
      }

      const res = await signUp(user)

      if (res.status === 200 || res.status === 201) {
        return router.push('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Registro | Último</title>
      </Head>

      <Header />
      <Container>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="title">
            <div className="mainTitle">
              {show === 2 && !widthWindow ? (
                <FiChevronLeft
                  className="arrowLeft"
                  size={25}
                  color="var(--black-800)"
                  onClick={showPrimary}
                />
              ) : (
                <></>
              )}
              <h1>Cadastro</h1>
            </div>
            <Link href="/cadastro/lojista">
              <a>Se cadastrar como lojista</a>
            </Link>
          </div>

          {widthWindow ? (
            <div className="inputContainer">
              <Input
                label="Primeiro Nome"
                placeholder="Nome"
                icon={<FiMail size={20} color="var(--black-800)" />}
                {...register('firstName')}
                textError={errors.firstName?.message}
                error={errors.firstName}
              />

              <Input
                label="Sobrenome"
                placeholder="Sobrenome"
                className="name"
                icon={<FiMail size={20} color="var(--black-800)" />}
                {...register('lastName')}
                textError={errors.lastName?.message}
                error={errors.lastName}
              />
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
          ) : show === 1 ? (
            <div className="inputContainer">
              <Input
                label="Primeiro Nome"
                placeholder="Nome"
                icon={<FiMail size={20} color="var(--black-800)" />}
                {...register('firstName')}
                textError={errors.firstName ? errors.firstName : ''}
                error={errors.firstName}
              />

              <Input
                label="Sobrenome"
                placeholder="Sobrenome"
                className="name"
                icon={<FiMail size={20} color="var(--black-800)" />}
                {...register('lastName')}
                textError={errors.lastName ? errors.lastName : ''}
                error={errors.lastName}
              />
            </div>
          ) : (
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
          )}

          <div className="buttonContainer">
            {widthWindow || show === 2 ? (
              <Button title="CONTINUAR" type="submit" />
            ) : (
              <Button title="CONTINUAR" onClick={showSecondary} />
            )}
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

export default Register
