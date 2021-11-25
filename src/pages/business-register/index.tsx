import Header from '../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../styles/pages/preLogin'

import { FiMail, FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Input } from '../../components/molecules/Input'
import { Checkbox } from '../../components/atoms/Checkbox'
import { useState } from 'react'
import { Button } from '../../components/atoms/Button'
import { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiBuildings, BiMapAlt } from 'react-icons/bi'
import Router from 'next/router'
import { ShopkeeperContext } from '../../contexts/ShopkeeperContext'

const BusinessRegister = () => {
  const [businessName, setBusinessName] = useState('')
  const [businessperson, setBusinessperson] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [businessState, setBusinessState] = useState('')
  const [businessCity, setBusinessCity] = useState('')
  const [publicPlace, setPublicPlace] = useState('')
  const [number, setNumer] = useState('')
  const [district, setDistrict] = useState('')
  const [cep, setCep] = useState('')

  const { setStore } = useContext(ShopkeeperContext)

  function handleContinueRegister() {
    const store = {
      name: businessName,
      cpfCnpj,
      address: `${publicPlace}, n° ${number}, ${district}, CEP: ${cep}`,
      city: businessCity,
      state: businessState
    }

    setStore(store)

    Router.push('/business-register/continue')
  }

  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header />
      <Container>
        <form onSubmit={() => {}}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>

          <div className="inputContainer">
            <Input
              label="Nome do negócio"
              placeholder="Nome do negócio"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              icon={<FiMail size={20} color="var(--black-800)" />}
            />

            <Input
              label="CPF/CNPJ"
              placeholder="000.000.000-00"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              icon={<FiUser size={20} color="var(--black-800)" />}
            />

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
                icon={<FaHome size={20} color="var(--black-800)" />}
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

            <div className="inputRow">
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
          </div>

          <div className="buttonContainer">
            <Button
              type="button"
              onClick={handleContinueRegister}
              title="Continuar"
            />
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default BusinessRegister
