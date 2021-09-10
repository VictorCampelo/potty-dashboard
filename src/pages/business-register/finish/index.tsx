import Header from "../../../components/molecules/Header";
import Head from "next/head";
import { Container } from "../../../styles/pages/preLogin";

import { FiMail, FiUser } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Input } from "../../../components/molecules/Input";
import { useState } from "react";
import { Button } from "../../../components/atoms/Button";
import { FaHome } from "react-icons/fa";
import { BiBuildings, BiMapAlt } from "react-icons/bi";
import Router from "next/router";
import { AiFillFacebook, AiFillLinkedin, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";

const BusinessRegister = () => {
  const [number, setNumber] = useState('');
  const [facebookUrl , setFacebookUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  function handleFinishRegister() {
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header/>
      <Container>
        <form onSubmit={() => {}}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>

          <div className="inputContainer">
           
          </div>

          <div className="buttonContainer">
            <Button type="button" onClick={handleFinishRegister} title="FINALIZAR" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default BusinessRegister;
