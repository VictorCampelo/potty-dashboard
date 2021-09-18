import DrawerLateral from "../../components/molecules/DrawerLateral";

import React, { useState } from 'react';
import { Container } from './styles'; 
import { RiPencilFill } from 'react-icons/ri';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const shop = () => {
  let quantStar = 5;
  let stars = [] //Criando um vetor de estrelas

    quantStar > 5 ? quantStar = 5 : null; //Tratativas para manter o máximo de estrelas como 5

    for (let i = 0; i < quantStar; i++) {
        stars.push(<AiFillStar size={18}  color="#ffe249"/>)
    }
    for (let i = quantStar; i < 5 ; i++) {
        stars.push(<AiOutlineStar size={18} color="#ffe249"/>)
    }
    //adicionando estrelas preenchidas e vazias ao vetor
  
  return (
    <Container>
      <DrawerLateral/>

      <div className="cards-area">
        <div className="left-area">
        
          <div className="card">

            <div className="top">
              <div></div>

              <div className="icon">
                <img src="/images/coffe-place.png" alt="icone da loja"/>
                <h1>Café da Maria</h1>
                <div>{ stars }</div>
              </div> 
              
              <button>
                Editar 
                <RiPencilFill size={15} />
              </button>
            </div>
            
            <div className="bottom">
              <h1>Descrição</h1>
              <p>
                Café da Maria
                <br/>
                <br/>
                Horário de funcionamento: 
                Seg - Sex: 6h - 20h
                Sáb e Dom: 7h - 14h
                <br/>
                <br/>
                Os mais diversos tipos de petiscos para saborear com todos as nossas deliciosas receitas com café!
              </p>
            </div>
          
          </div>
        
        </div>

        <div className="right-area">
          
        </div>

      </div>

    </Container>
  );
};

export default shop;