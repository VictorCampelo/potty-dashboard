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
import image from 'next/image'

type imageProps = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
const BusinessRegister = () => {
  const [desc, setDesc] = useState('')
  const [imageSrc, setImageSrc] = useState('nul')

  const { userDto, storeDto } = useContext(ShopkeeperContext)

  async function handleFinishRegister() {
    const body = {
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
        image: imageSrc,
        description: desc,
        address: `${storeDto.publicPlace}, n° ${storeDto.number}, ${storeDto.district}, CEP: ${storeDto.cep}`
      }
    }

    // storeDto2.append("name", storeDto.name)
    // storeDto2.append("CNPJ", storeDto.CNPJ)
    // storeDto2.append("phone", storeDto.phone)
    // storeDto2.append("city", storeDto.city)
    // storeDto2.append("state", storeDto.state)
    // storeDto2.append("facebook_link", storeDto.facebook_link)
    // storeDto2.append("instagram_link", storeDto.instagram_link)
    // storeDto2.append("whatsapp_link", storeDto.whatsapp_link)
    // storeDto2.append("imagem", imageSrc)
    // storeDto2.append("description", desc)
    // storeDto2.append("address", `${storeDto.publicPlace}, nº ${storeDto.number}, ${storeDto.district}, CEP: ${storeDto.cep}`)

    try {
      // function updateUser(data) {
      //   let state = store.getState().profileImage.image;

      //   let validate = validateFile(state);

      //   if(validate == true){
      //     const fd = new FormData();
      //     if(state != ''){
      //       fd.append('file', state);
      //     }
      //     fd.append('name', data.name);
      //     fd.append('date_of_birth', convertDateToBack(data.date_of_birth));
      //     fd.append('phone', data.phone);
      //     fd.append('course', data.course);
      //     fd.append('occupation', data.occupation);

      //     return axios.put(`/user`, fd).then(response => {
      //     });
      //   } else {
      //     window.location.href = '/user/home'
      //   }
      // }
      const storeDto2 = new FormData()
      storeDto2.append('avatar', imageSrc)
      storeDto2.append('userDto', JSON.stringify(body.userDto))
      storeDto2.append('storeDto', JSON.stringify(body.storeDto))
      // storeDto2.append('avatar', imageSrc)

      // storeDto2.append('userDto', body.userDto)
      // storeDto2.append('storeDto', body.storeDto)
      // for (let key in imageSrc) {
      //   storeDto2.append(key, imageSrc[key])
      // }
      // for (let key in body.userDto) {
      //   storeDto2.append(key, body.userDto[key])
      // }
      // for (let key in body.storeDto) {
      //   storeDto2.append(key, body.storeDto[key])
      // }
      // for (let key of storeDto2.entries()) {
      //   console.log(key[0] + ', ' + key[1])
      // }
      // await api.post('/auth/signup-store', body)

      await api.post('/auth/signup-store', storeDto2, {
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
      // setImageSrc(imageDataUrl)
      console.log(file)
      setImageSrc(file)
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
