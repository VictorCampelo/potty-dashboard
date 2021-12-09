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

const BusinessRegister = () => {
  const [desc, setDesc] = useState('')
  const [imageSrc, setImageSrc] = useState(null)

  const { userDto, storeDto } = useContext(ShopkeeperContext)

  async function handleFinishRegister() {
    const body = {
      userDto: {
        ...userDto
      },
      storeDto: {
        ...storeDto,
        image: imageSrc,
        description: desc
      }
    }

    try {
      await api.post('/auth/signup-store', body)

      Router.push(`/login`)
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
      setImageSrc(imageDataUrl)
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
              imageSrc={imageSrc} // Imagem para o perfil do Shop
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
                disabled={desc === ''}
              />
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default BusinessRegister
