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
    Router.push('/business-register/finish')
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
            <Input 
              label="Telefone"
              placeholder="(00)0000-0000"
              value={number}
              onChange={e => setNumber(e.target.value)}
              icon={<AiFillPhone size={20} color="var(--black-800)" />} 
            />

            <Input 
              label="Facebook"  
              placeholder="facebook.com/exemplo"  
              value={facebookUrl}
              onChange={e => setFacebookUrl(e.target.value)}
              icon={<AiFillFacebook size={20} color="var(--black-800)" />} 
            />

            <Input 
              label="Linkedin"  
              placeholder="linkedin.com/in/exemplo"  
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
              icon={<AiFillLinkedin size={20} color="var(--black-800)" />} 
            />

            <Input 
              label="Whatsapp"  
              placeholder="wa.me/550000000000"  
              value={whatsappUrl}
              onChange={e => setWhatsappUrl(e.target.value)}
              icon={<AiOutlineWhatsApp size={20} color="var(--black-800)" />} 
            />
          </div>

          <div className="buttonContainer">
            <Button type="button" onClick={handleFinishRegister} title="CONTINUAR" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default BusinessRegister;
