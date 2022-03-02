import Header from '../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'

import { FiMail } from 'react-icons/fi'
import { Input } from '../../components/molecules/Input'
import { Button } from '../../components/atoms/Button'
import { useRouter } from 'next/router'
import { recoverPassword } from '../../services/auth.services'
import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  async function handleNavigateToContinueRecover(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()

    try {
      const res = await recoverPassword(email)

      console.log(res)

      router.push('/recover/token')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Recuperação de senha | Último</title>
      </Head>

      <Header />
      <Container>
        <form>
          <div className="recoverTitle">
            <h1>Recuperação de senha</h1>
            <br></br>
            <p>
              Para recuperar sua senha, informe seu email para receber o token
              para poder realizar a alteração da senha.
            </p>
          </div>

          <div className="inputContainer">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              placeholder="exemplo@gmail.com"
              icon={<FiMail size={20} color="var(--black-800);" />}
            />
          </div>

          <div className="buttonContainer">
            <Button
              onClick={handleNavigateToContinueRecover}
              title="CONTINUAR"
            />
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default Register
