import Header from "../../components/molecules/Header";
import Link from "next/link";
import Head from "next/head";
import { Container, Wrapper } from "../../styles/pages/preLogin";

import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from "../../components/molecules/Input";
import { Checkbox } from "../../components/atoms/Checkbox";
import { FormEvent, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Router from "next/router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);

  const { signIn } = useContext(AuthContext);

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();

    try {  
      const res = await signIn({ email, password });

      console.log(res);

      Router.push('/shopkeeper')

    } catch (e) { 
      console.log(e);
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Login | Último</title>
      </Head>

      <Header/>
      <Container>
        <form onSubmit={handleSignIn}>
          <div className="title">
            <h1>Login</h1>
          </div>

          <div className="inputContainer">
            <Input 
              label="Email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              icon={<FiMail size={20} color="var(--black-800)" />} 
            />

            <Input 
              label="Senha" 
              password 
              value={password}
              onChange={e => setPassword(e.target.value)}
              icon={<FiLock size={20} color="var(--black-800)" />} 
            />
          </div>
          
          <Checkbox label="Lembrar usuário" confirm={confirm} toggleConfirm={() => setConfirm(!confirm)} />

          <div className="buttonContainer">
            <Button type="submit" title="ENTRAR" />
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
            Não possui conta?
            <Link href="/register">
              <a>{' '}Cadastre-se!</a>
            </Link>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
