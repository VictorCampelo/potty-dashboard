import Header from '../../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../../styles/pages/preLogin'

import { DescriptionInput } from '../../../components/molecules/DescriptionInput'
import { ShopImage } from '../../../components/molecules/ShopImage'
import { useContext, useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import { AiFillShop, AiFillCamera } from 'react-icons/ai'
import Router from 'next/router'

import { ShopkeeperContext } from '../../../contexts/ShopkeeperContext'
import { api } from '../../../services/apiClient'

type ImageProps = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

const BusinessRegister = () => {
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  const { userDto, storeDto } = useContext(ShopkeeperContext)

  async function handleFinishRegister() {
    const body = {
      avatar: image,
      userDto: {
        ...userDto
      },
      storeDto: {
        name: storeDto.name,
        CNPJ: storeDto.CNPJ,
        phone: storeDto.phone,
        city: storeDto.city,
        state: storeDto.state,
        facebook_link: storeDto.facebook_link,
        instagram_link: storeDto.instagram_link,
        whatsapp_link: storeDto.whatsapp_link,
        image: image,
        description: desc,
        address: `${storeDto.publicPlace}, n° ${storeDto.number}, ${storeDto.district}, CEP: ${storeDto.cep}`
      }
    }

    try {
      const formData = new FormData()
      formData.append('avatar', JSON.stringify(body.avatar))
      formData.append('userDto', JSON.stringify(body.userDto))
      formData.append('storeDto', JSON.stringify(body.storeDto))

      await api.post('/auth/signup-store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      Router.push(`/confirmacao-cadastro`)
    } catch (e) {
      console.error(e)
    }
  }

  function readFile(file: File) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)
      console.log(file)
      setImage(String(imageDataUrl))
    }
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

          <div className="imageContainer">
            <ShopImage
              imageSrc={image} // Imagem para o perfil do Shop
              icon={<AiFillShop size={70} color="var(--white)" />}
              btnIcon={<AiFillCamera size={23} color="var(--white)" />}
              btn={
                <input
                  type="file"
                  id="icon[]"
                  name="icon"
                  accept="image/*"
                  multiple={false}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                />
              }
            />
          </div>

          <div className="inputContainer">
            <DescriptionInput
              label="Descrição do negócio"
              placeholder="Faça uma descrição rápida e útil do seu negócio para seus clientes."
              value={desc}
              onChange={(text) => setDesc(text.target.value)}
              maxLength={45}
            />
          </div>

          <div className="buttonContainer">
            <div style={{ marginRight: '1rem' }}>
              <Button
                type="button"
                onClick={() => Router.back()}
                title="VOLTAR"
                border
              />
            </div>
            <div>
              <Button
                type="button"
                onClick={handleFinishRegister}
                title="FINALIZAR"
              />
            </div>
          </div>
        </form>
      </Container>
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '85%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave1.svg"
        alt="wave 1"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '65%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave2.svg"
        alt="wave 2"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '55%',
          zIndex: -1
        }}
        src="/images/illustration1.svg"
        alt="illustration 1"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '50%',
          zIndex: -1
        }}
        src="/images/illustration2.svg"
        alt="illustration 2"
      />
    </Wrapper>
  )
}

export default BusinessRegister
