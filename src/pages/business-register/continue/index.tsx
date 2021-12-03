import Header from '../../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../../styles/pages/preLogin'

import { Input } from '../../../components/molecules/Input'
import { useContext, useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import Router from 'next/router'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineWhatsApp
} from 'react-icons/ai'
import { ShopkeeperContext } from '../../../contexts/ShopkeeperContext'

const BusinessRegister = () => {
  const [number, setNumber] = useState('')
  const [facebookUrl, setFacebookUrl] = useState('')
  const [instagramUrl, setInstagramUrl] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const { setStore, storeDto } = useContext(ShopkeeperContext)

  function handleFinishRegister() {
    const store = {
      ...storeDto,
      phone: number,
      facebook_link: facebookUrl,
      instagram_link: instagramUrl,
      whatsapp_link: whatsappUrl
    }

    setStore(store)

    Router.push('/business-register/finish')
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
              label="Telefone"
              placeholder="(00) 00000-0000"
              mask="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              icon={<AiFillPhone size={20} color="var(--black-800)" />}
            />

            <Input
              label="Facebook"
              placeholder="facebook.com/exemplo"
              value={facebookUrl}
              onChange={(e) => setFacebookUrl(e.target.value)}
              icon={<AiFillFacebook size={20} color="var(--black-800)" />}
            />

            <Input
              label="Instagram"
              placeholder="instagram.com/exemplo"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
              icon={<AiFillInstagram size={20} color="var(--black-800)" />}
            />

            <Input
              label="Whatsapp"
              placeholder="wa.me/550000000000"
              value={whatsappUrl}
              onChange={(e) => setWhatsappUrl(e.target.value)}
              icon={<AiOutlineWhatsApp size={20} color="var(--black-800)" />}
            />
          </div>

          <div className="buttonContainer">
            <Button
              type="button"
              onClick={handleFinishRegister}
              title="CONTINUAR"
            />
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default BusinessRegister
