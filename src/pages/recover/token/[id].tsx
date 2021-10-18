import Header from "../../../components/molecules/Header";
import Link from "next/link";
import Head from "next/head";
import { Container, Wrapper } from "../../../styles/pages/preLogin";

import { VscKey } from 'react-icons/vsc';
import { FiLock } from 'react-icons/fi';
import { Input } from "../../../components/molecules/Input";
import { Button } from "../../../components/atoms/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { recoverPasswordConfirmation } from "../../../services/auth.services";

const SendTokenRegister = () => {
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [token, setToken] = useState(router.query.id as string);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      password,
      passwordConfirmation,
      token
    }

    try {
      const res = await recoverPasswordConfirmation(body);

      router.push('/login')
    } catch (e) {
      console.error(e)
    }

    router.push('/login')
  }

  return (
    <Wrapper>
      <Head>
        <title>Registro | Último</title>
      </Head>

      <Header/>
      <Container>
        <form onSubmit={handleRegister}>
          <div className="title">
            <h1>Alteração de senha</h1>
            <p>Insira o token de segurança que foi enviado para o seu email e crie uma nova senha.</p>
          </div>

          <div className="inputContainer">
            <Input 
              value={token}
              onChange={e => setToken(e.target.value)}
              label="Token"
              placeholder="12345" 
              icon={<VscKey size={20} color="var(--black-800);" />} 
              />

            <Input 
              value={password}
              onChange={e => setPassword(e.target.value)}
              label="Nova senha" 
              placeholder="********" 
              password 
              icon={<FiLock size={20} color="var(--black-800);" />} 
            />

            <Input 
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              label="Repetir senha" 
              placeholder="********" 
              password 
              icon={<FiLock size={20} color="var(--black-800);" />} 
            />
          </div>
          
          <div className="buttonContainer">
            <Button type="submit" title="CONTINUAR" />
          </div>
        </form>
      </Container>
    </Wrapper>
  );
};

export default SendTokenRegister;
