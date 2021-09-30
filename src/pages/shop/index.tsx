import DrawerLateral from "../../components/molecules/DrawerLateral";
import { IoIosClose } from "react-icons/io";

import React, { useState } from "react";
import { Container, ModalContainer } from "./styles";

import DescriptionCard from "../../components/molecules/DescriptionCard";
import InfoCard from "../../components/molecules/InfoCard";
import CustomModal from "../../components/molecules/CustomModal";
import { Button } from "../../components/atoms/Button";
import { Input } from "../../components/molecules/Input";
import { FiSearch } from "react-icons/fi";
import { CategoryCard } from "../../components/molecules/CategoryCard";
import { IoCellular, IoFastFood } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBuildings, BiMapAlt } from 'react-icons/bi';
import { FaRoad } from 'react-icons/fa';


import { IoMdCall } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { FiInstagram } from 'react-icons/fi';

const shop = () => {
  const [timeTableModal, setTimeTableModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [contactModal, setContactModal] = useState(true);

  const [businessState, setBusinessState] = useState("");
  const [businessCity, setBusinessCity] = useState("");
  const [publicPlace, setPublicPlace] = useState("");
  const [number, setNumer] = useState("");
  const [district, setDistrict] = useState("");
  const [cep, setCep] = useState("");

  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [whatsApp, setWhatsApp] = useState("");

  // Categorias
  const [category, setCategory] = useState("");

  // Modal de horarios

  function handleOpenTimeModal() {
    setTimeTableModal(true);
  }

  function toggleTimeModal() {
    setTimeTableModal(!timeTableModal);
  }

  // Modal de categorias

  function handleOpenCategoryModal() {
    setCategoryModal(true);
  }

  function toggleCategoryModal() {
    setCategoryModal(!categoryModal);
  }

  // Modal de localização

  function handleOpenLocationModal() {
    setLocationModal(true);
  }

  function toggleLocationModal() {
    setLocationModal(!locationModal);
  }

  // Modal de contatos

  function handleOpenContactModal() {
    setContactModal(true);
  }

  function toggleContactModal() {
    setContactModal(!contactModal);
  }

  return (
    <>
      <Container>
        <CustomModal
          buttons={false}
          setModalOpen={toggleTimeModal}
          modalVisible={timeTableModal}
        >
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

        <CustomModal
          buttons={false}
          setModalOpen={toggleCategoryModal}
          modalVisible={categoryModal}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Categorias</h1>
              <IoIosClose
                onClick={toggleCategoryModal}
                size={36}
                color={"black"}
              />
            </div>
            <div className="categories-container">
              <Input
                label=""
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                icon={<FiSearch size={20} color="var(--black-800)" />}
              ></Input>
            </div>
            <div className="category-container">
              <CategoryCard
                label="Alimentação"
                icon={<IoFastFood size={20} color="#3C8EFC" />}
              />
              <CategoryCard
                label="Alimentação"
                icon={<IoFastFood size={20} color="red" />}
              />
              <CategoryCard
                label="Eletronicos"
                icon={<IoCellular size={20} color="yellow" />}
              />
              <CategoryCard
                label="Celulares"
                icon={<IoCellular size={20} color="purple" />}
              />
            </div>
            <div className="buttons-container">
              <Button title="Confirmar" border={true}></Button>
            </div>
          </ModalContainer>
        </CustomModal>

        <CustomModal
          buttons={false}
          setModalOpen={toggleLocationModal}
          modalVisible={locationModal}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Localização</h1>
              <IoIosClose
                onClick={toggleLocationModal}
                size={36}
                color={"black"}
              />
            </div>
            <div className="inputRow">
              <Input
                label="Estado"
                placeholder="Estado"
                value={businessState}
                onChange={(e) => setBusinessState(e.target.value)}
                icon={
                  <HiOutlineLocationMarker size={20} color="var(--black-800)" />
                }
              />

              <Input
                label="Cidade"
                placeholder="Cidade"
                value={businessCity}
                onChange={(e) => setBusinessCity(e.target.value)}
                icon={
                  <HiOutlineLocationMarker size={20} color="var(--black-800)" />
                }
              />
            </div>
            <div className="inputRow">
              <Input
                label="Logradouro"
                placeholder="Logradouro"
                flex={3}
                value={publicPlace}
                onChange={(e) => setPublicPlace(e.target.value)}
                icon={<FaRoad size={20} color="var(--black-800)" />}
              />

              <Input
                label="Número"
                placeholder="0000"
                value={number}
                flex={1}
                type="numeric"
                maxLength={6}
                onChange={(e) => setNumer(e.target.value)}
                icon={<BiBuildings size={20} color="var(--black-800)" />}
              />
            </div>
            <div className="last-inputRow">
              <Input
                label="Bairro"
                placeholder="Bairro"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
              />

              <Input
                label="CEP"
                placeholder="000.000.000-00"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
              />
            </div>
            <div className="buttons-container">
              <Button title="Confirmar" border={true}></Button>
            </div>
          </ModalContainer>
        </CustomModal>

        <CustomModal
          buttons={false}
          setModalOpen={toggleContactModal}
          modalVisible={contactModal}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Informações de Contato</h1>
              <IoIosClose
                onClick={toggleContactModal}
                size={36}
                color={"black"}
              />
            </div>
            
            <div className="contact-container">
              <div className="top-inputs">
                <Input
                    label="Telefone"
                    placeholder="(00)0000-0000"
                    value={telefone}
                    flex={2}
                    type="numeric"
                    maxLength={14}
                    onChange={(e) => setTelefone(e.target.value)}
                    icon={<IoMdCall size={20} color="var(--black-800)" />}
                />

                <Input
                    label="Instagram do negócio"
                    placeholder="instagram.com/exemplo"
                    value={instagram}
                    flex={2}
                    type="text"
                    
                    onChange={(e) => setInstagram(e.target.value)}
                    icon={<FiInstagram size={20} color="var(--black-800)" />}
                />
              </div>

              <div className="bottom-inputs">
                <Input
                      label="Facebook do negócio"
                      placeholder="facebook.com/exemplo"
                      value={facebook}
                      flex={2}
                      type="text"
                      
                      onChange={(e) => setFacebook(e.target.value)}
                      icon={<FaFacebook size={20} color="var(--black-800)" />}
                />
                <Input
                      label="WhatsApp do negócio"
                      placeholder="whatsApp.com/exemplo"
                      value={whatsApp}
                      flex={2}
                      type="text"
                    
                      onChange={(e) => setWhatsApp(e.target.value)}
                      icon={<IoLogoWhatsapp size={20} color="var(--black-800)" />}
                />
              </div>
            </div>

            <div className="buttons-container">
              <Button title="Confirmar" border={true}></Button>
            </div>
          </ModalContainer>
        </CustomModal>

        <DrawerLateral greenOption={1} />
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
              instagram="instagram.com/exemplo"
              whatsApp="wa.me/5000000000"
              button={() => handleOpenContactModal()}
            />
          </div>

          <div className="right-area">
            <InfoCard
              title="Horário de funcionamento"
              type="timetable"
              button={() => handleOpenTimeModal()}
              dom={["7:00", "12:00"]}
              seg={["7:00", "12:00"]}
              ter={["7:00", "12:00"]}
              qua={["7:00", "12:00"]}
              qui={["7:00", "12:00"]}
              sex={["7:00", "12:00"]}
              sab={["7:00", "12:00"]}
            />

            <InfoCard
              title="Categorias"
              type="category"
              button={() => handleOpenCategoryModal()}
              category="Alimentação"
            />

            <InfoCard
              title="Localização"
              type="local"
              button={() => handleOpenLocationModal()}
              local="Avenida Paulista, 63892, São Paulo - SP, 000.000-000"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default shop;
