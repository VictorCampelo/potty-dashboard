import DrawerLateral from "../../components/molecules/DrawerLateral";
import { IoIosClose } from 'react-icons/io';

import React, { useState } from 'react';
import { Container, ModalContainer } from './styles'; 

import DescriptionCard from "../../components/molecules/DescriptionCard";
import InfoCard from "../../components/molecules/InfoCard";
import Modal from '../../components/molecules/Modal';
import CustomModal from '../../components/molecules/CustomModal';
import { Button } from '../../components/atoms/Button';

const shop = () => {
  const [timeTableModal, setTimeTableModal] = useState(false)

  function handleOpenTimeModal() {
    setTimeTableModal(true)
  }

  function toggleTimeModal() {
    setTimeTableModal(!timeTableModal);
  }

  function handleCancelOperation() {
    handleOpenTimeModal();
  }

  return (
    <>
    <Container>
      <CustomModal buttons={false} setModalOpen={toggleTimeModal} modalVisible={timeTableModal}>
        <ModalContainer>
          <div className="exit-container">
            <h1>Horário de funcionamento</h1>
            <IoIosClose onClick={toggleTimeModal} size={36} color={"black"} />
          </div>
          <div className="timeTables-container">
            <div className="left-container">
              <div className="dates">
                <p>Segunda:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
              <div className="dates">
                <p>Terça:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
              <div className="dates">
                <p>Quarta:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
              <div className="dates">
                <p>Quinta:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
            </div>
            <div className="right-container">
              <div className="dates">
                <p>Sexta:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
              <div className="dates">
                <p>Sabado:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
              <div className="dates">
                <p>Domingo:</p>
                <input type="datetime" name="time" id="1" />
                <input type="datetime" name="time" id="2" />
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <Button title="Confirmar" border={true}></Button>
          </div>
        </ModalContainer>
      </CustomModal>
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
            button={() => handleOpenTimeModal()}
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

    </>
  );
};

export default shop;