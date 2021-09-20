import DrawerLateral from "../../components/molecules/DrawerLateral";

import React, { useState } from 'react';
import { Container } from './styles'; 

import DescriptionCard from "../../components/molecules/DescriptionCard";
import InfoCard from "../../components/molecules/InfoCard";

const shop = () => {
  return (
    <Container>
      <DrawerLateral greenOption={1}/>

      <div className="cards-area">
        <div className="left-area">
        
        <DescriptionCard 
            imgSrc="/images/coffe-place.png"
            title="Café da Maria"
            quantStar={5}
            description="Café da Maria
                
                Horário de funcionamento: 
                Seg - Sex: 6h - 20h
                Sáb e Dom: 7h - 14h
                
                Os mais diversos tipos de petiscos para saborear com todos as nossas deliciosas receitas com café!
            "
        />

        <InfoCard 
          title="Informações de Contato"
          type="contact"
          cell="(00)0000-0000"
          facebook="facebook.com/exemplo"
          linkedin="linkedin.com/exemplo"
          whatsApp="wa.me/5000000000"
        />
        

        <button className="config-button"> Configurações Adicionais </button>

        </div>

        <div className="right-area">
          <InfoCard 
            title="Horário de funcionamento"
            type="timetable"
            dom={["7:00","12:00"]}
            seg={["7:00","12:00"]}
            ter={["7:00","12:00"]}
            qua={["7:00","12:00"]}
            qui={["7:00","12:00"]}
            sex={["7:00","12:00"]}
            sab={["7:00","12:00"]}
          />

          <InfoCard 
            title="Categorias"
            type="category"
            category="Alimentação"
          />

          <InfoCard 
            title="Localização"
            type="local"
            local="Avenida Paulista, 63892, São Paulo - SP, 000.000-000"
          />
        </div>

      </div>

    </Container>
  );
};

export default shop;