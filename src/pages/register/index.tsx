import Header from "../../components/molecules/Header";
import Link from "next/link";
import Head from "next/head";
import { Container } from "../../styles/pages/login";

import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from "../../components/molecules/Input";
import { Checkbox } from "../../components/atoms/Checkbox";
import { useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  function handleNavigateToContinueRegister(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    router.push('register/continue');
  }

  return (
    <>
      <Head>
        <title>Registro | Último</title>
      </Head>

      <Header/>
      <Container>
        <form>
          <div className="title">
            <h1>Cadastro</h1>
          </div>

          <div className="inputContainer">
            <Input label="Email" type="password" icon={<FiMail size={20} color="var(--black-800);" />} />
            <Input label="Senha" password icon={<FiLock size={20} color="var(--black-800);" />} />
            <Input  label="Repetir senha" password icon={<FiLock size={20} color="var(--black-800);" />} />
          </div>
          
          <div className="buttonContainer">
            <Button onClick={handleNavigateToContinueRegister} title="CONTINUAR" />
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
            Já possui conta?
            <Link href="/login">
              <a>{' '}Faça seu login!</a>
            </Link>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
