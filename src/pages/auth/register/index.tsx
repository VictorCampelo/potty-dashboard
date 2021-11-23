import Header from '../../../components/molecules/Header'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Wrapper } from '../../../styles/pages/preLogin'

import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../../components/molecules/Input'
import { Checkbox } from '../../../components/atoms/Checkbox'
import { useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { signUp } from '../../../services/auth.services'

const Register = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const router = useRouter()

  async function handleSignUp(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()

    try {
      const user = {
        email,
        firstName,
        lastName,
        password,
        passwordConfirmation
      }

      await signUp(user)

      router.push('login')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Registro | Último</title>
      </Head>

      <Header />
      <Container>
        <form>
          <div className="title">
            <h1>Cadastro</h1>
            <Link href="/auth/register-shopkeeper">
              <a>Se cadastrar como lojista</a>
            </Link>
          </div>

          <div className="inputContainer">
            <Input
              label="Primeiro Nome"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              icon={<FiMail size={20} color="var(--black-800)" />}
            />

            <Input
              label="Sobrenome"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              icon={<FiMail size={20} color="var(--black-800)" />}
            />

            <Input
              label="Email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<FiMail size={20} color="var(--black-800)" />}
            />

            <Input
              label="Senha"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              password
              icon={<FiLock size={20} color="var(--black-800)" />}
            />

            <Input
              label="Repetir senha"
              placeholder="********"
              password
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              icon={<FiLock size={20} color="var(--black-800)" />}
            />
          </div>

          <div className="buttonContainer">
            <Button onClick={handleSignUp} title="CONTINUAR" />
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
            <Link href="/auth/login">
              <a>Faça seu login!</a>
            </Link>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default Register