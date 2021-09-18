import Header from "../../../components/molecules/Header";
import Head from "next/head";
import { Container, Wrapper } from "../../../styles/pages/preLogin";

import { DescriptionInput } from "../../../components/molecules/DescriptionInput";
import { ShopImage } from "../../../components/molecules/ShopImage"
import { useState } from "react";
import { Button } from "../../../components/atoms/Button";
import { AiFillShop, AiFillCamera } from "react-icons/ai";
import Router from "next/router";

const BusinessRegister = () => {
  const [desc, setDesc] = useState('');
  

  function handleFinishRegister() {
    Router.push('/')
  }

  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header/>
      <Container>
        <form onSubmit={() => {}}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>

          <div className="imageContainer">
            <ShopImage 
              // image={"/images/shop-test.png"} // Imagem para o perfil do Shop
              icon={<AiFillShop size={70} color="var(--white)" />}
              btnIcon={<AiFillCamera size={23} color="var(--white)"/>}
            />
          </div>

          <div className="inputContainer">
            <DescriptionInput
              label="Descrição do negócio"  
              placeholder="Faça uma descrição rápida e útil do seu negócio para seus clientes."
              value={desc}
              onChange={text => setDesc(text.target.value)}
            />
          </div>

          <div className="buttonContainer">
            <Button type="button" onClick={handleFinishRegister} title="FINALIZAR" />
          </div>
        </form>
      </Container>
    </Wrapper>
  );
};

export default BusinessRegister;
