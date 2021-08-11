import Header from "../../components/molecules/Header";
import Link from "next/link";
import Head from "next/head";
import { Container } from "../../styles/pages/login";

import { FiUser } from 'react-icons/fi';
import { Input } from "../../components/molecules/Input";
import { useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

const ContinueRegister = () => {
  const [confirm, setConfirm] = useState(false);

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
            <Input label="Nome" icon={<FiUser size={20} color="var(--black-800);" />} />
            <Input label="Sobrenome" icon={<FiUser size={20} color="var(--black-800);" />} />
          </div>
          
          <div className="buttonContainer">
            <Button title="CADASTRAR" />
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

export default ContinueRegister;
