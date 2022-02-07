import Header from '../../../components/molecules/Header'
import Head from 'next/head'
import {
  Container,
  TermsModalContainer,
  Wrapper
} from '../../../styles/pages/preLogin'

import { DescriptionInput } from '../../../components/molecules/DescriptionInput'
import { ShopImage } from '../../../components/molecules/ShopImage'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import { AiFillShop, AiFillCamera } from 'react-icons/ai'
import Router from 'next/router'

import { ShopkeeperContext } from '../../../contexts/ShopkeeperContext'
import { api } from '../../../services/apiClient'
import { toast } from 'react-toastify'
import { Point } from 'react-easy-crop/types'
import getCroppedImg from 'functions/cropImage'
import Cropper from 'react-easy-crop'
import { CropModalContainer } from 'styles/pages/Catalog'
import CustomModal from 'components/molecules/CustomModal'
import useMedia from 'use-media'
import { CheckboxFilter } from 'components/atoms/CheckboxFilter'
import { FiX } from 'react-icons/fi'

type ShopkeeperUser = {
  email?: string
  firstName?: string
  lastName?: string
  password?: string
  passwordConfirmation?: string
}

const BusinessRegister = () => {
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const rotation = 0

  const [terms, setTerms] = useState(false)
  const [termsModal, setTermsModal] = useState(false)
  function handleTerms() {
    setTerms(!terms)
  }

  function handleTermsModal() {
    setTermsModal(!termsModal)
  }

  const { userDto, storeDto, setStore } = useContext(ShopkeeperContext)

  useEffect(() => {
    const storeData = JSON.parse(sessionStorage.getItem('data'))
    console.log(storeData)

    if (storeData) {
      setStore({
        name: storeData.businessName,
        CNPJ: storeData.cpfCnpj,
        city: storeData.businessCity,
        state: storeData.businessState,
        publicPlace: storeData.publicPlace,
        number: storeData.number,
        district: storeData.district,
        cep: storeData.cep,
        phone: storeData.number,
        facebook_link: storeData.facebookUrl,
        instagram_link: storeData.instagramUrl,
        whatsapp_link: storeData.whatsappUrl
      })
    }
  }, [])
  // Toasts

  function notifySuccess(message: string) {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  function notify(message: string) {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  async function handleFinishRegister() {
    const userData = JSON.parse(sessionStorage.getItem('user'))
    const storeData = JSON.parse(sessionStorage.getItem('data'))
    const body = {
      avatar: image,
      userDto: {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        passwordConfirmation: userData.passwordConfirmation
      },
      storeDto: {
        name: storeData.name,
        CNPJ: storeData.CNPJ,
        phone: storeData.phone,
        city: storeData.city,
        state: storeData.state,
        facebookLink: storeData.facebook_link,
        instagramLink: storeData.instagram_link,
        whatsappLink: storeData.whatsapp_link,
        image: image,
        zipcode: storeData.cep,
        description: desc,
        addressNumber: storeData.number,
        neighborhood: storeData.district,
        street: storeData.publicPlace

        // address: `${storeData.publicPlace}, n° ${storeData.number}, ${storeData.district}, CEP: ${storeData.cep}`
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

  // Image Crop Modal

  function toggleImageModal() {
    setPreviewImage(!previewImage)
  }

  function onZoomChange(newValue) {
    setZoom(newValue)
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  function readFile(file: File) {
    const result = new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
    return result
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length === 1) {
      const file = await readFile(e.target.files[0])
      setPreviewImage(file)
    } else {
      toast.success('Selecione apenas 1 imagem pro vez', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  async function cropImage() {
    // Get cropped image file

    const Image = await getCroppedImg(previewImage, croppedAreaPixels, rotation)

    try {
      setImage(Image)
      notifySuccess('Foto recortada com sucesso!')
      setPreviewImage(null)
      toggleImageModal()
    } catch (e) {
      notify('Erro interno favor tentar novamente mais tarde!')
    }
  }

  const widthScreen = useMedia({ minWidth: '426px' })

  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último </title>
      </Head>

      <Header />
      <Container>
        {/* Crop Image Modal */}
        <CustomModal
          buttons={false}
          setModalOpen={toggleImageModal}
          modalVisible={previewImage}
        >
          <CropModalContainer>
            <section className="crops">
              <div className="cropper-container">
                <div className="crop">
                  <Cropper
                    style={{
                      containerStyle: {
                        background: 'rgba(255, 255, 255, 0.2)',
                        width: 400,
                        height: 400,
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -20%)'
                      },
                      cropAreaStyle: {},
                      mediaStyle: {}
                    }}
                    image={previewImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
                <div className="controls-container">
                  <input
                    type="range"
                    step="0.1"
                    min="1"
                    max="2"
                    value={zoom}
                    onChange={(e) => onZoomChange(e.target.value)}
                  />
                </div>
              </div>
            </section>
            <section className="btns">
              <Button title="Cancelar" onClick={toggleImageModal} />
              <Button title="Recortar" onClick={() => cropImage()} />
            </section>
          </CropModalContainer>
        </CustomModal>

        <CustomModal
          buttons={false}
          modalVisible={termsModal}
          setModalOpen={handleTermsModal}
        >
          <TermsModalContainer>
            <div className="title">
              <h2>Termos e condições</h2>
              <FiX
                size={25}
                onClick={handleTermsModal}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="termsContainer">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sodales lacus non justo blandit, at ultrices libero volutpat.
                Etiam aliquam tincidunt imperdiet. Curabitur elementum consequat
                lorem, in scelerisque mi mollis in. Etiam at eleifend felis, in
                ornare neque. Ut quis varius leo, sed sollicitudin dui. Praesent
                sem arcu, tristique non lacus et, scelerisque maximus magna.
                Donec ligula quam, accumsan ut erat venenatis, faucibus
                ullamcorper augue. Mauris nec ligula felis. Suspendisse sagittis
                diam vel iaculis consectetur. Vivamus eleifend molestie nisi
                eget blandit. Aliquam non lacinia mauris. In at nibh neque.
                Phasellus sit amet libero facilisis, dignissim ligula vel,
                tempus ante. Integer in volutpat turpis. Phasellus rutrum
                suscipit mi, quis luctus risus rhoncus non. Aenean ex felis,
                tempor nec nibh quis, pharetra ullamcorper libero. Sed facilisis
                placerat varius. Duis lobortis odio ut elit porta consequat vel
                vitae libero. Quisque sit amet purus tristique, fermentum lectus
                vitae, accumsan diam. Vestibulum dictum elit ac est blandit, non
                fermentum mi tempor. Vestibulum et laoreet nisi. Praesent
                vestibulum ultricies ligula, condimentum laoreet lectus
                tincidunt placerat. In nec blandit enim. Phasellus rutrum dolor
                sit amet ligula scelerisque feugiat. Nulla nec nibh at felis
                sodales finibus. Sed eu lectus efficitur, laoreet tellus sit
                amet, hendrerit mi. In at urna non lacus egestas pretium.
                Vestibulum tincidunt ipsum lectus, varius molestie nunc
                consequat at. Sed pharetra, augue in aliquam lacinia, enim est
                tincidunt diam, nec pretium erat dolor sit amet mi. Donec
                vulputate eros sapien, finibus finibus odio finibus at. Praesent
                eu tortor a sem mattis luctus. Maecenas tempus ante eu lectus
                iaculis pharetra. Nam euismod gravida est, in tempus enim
                maximus at. Fusce vitae imperdiet ante, nec tempor erat. Sed
                ultricies commodo facilisis. Sed congue mi eros, eu laoreet
                lacus semper nec. Morbi pharetra cursus augue. Proin orci massa,
                suscipit ac nibh non, scelerisque luctus orci. In eget dui
                commodo, dictum mauris at, congue eros. Maecenas sed dapibus
                sapien. Vivamus odio sem, aliquam eu lacus a, lobortis lacinia
                nibh. Aenean blandit ut ligula id dapibus. Nulla id pretium
                nisl. Proin efficitur, sem in commodo pretium, justo erat mattis
                dui, vel scelerisque libero est quis lacus. Sed tincidunt, ante
                quis dignissim malesuada, nisi neque sagittis nulla, id tempus
                nisl eros vel dolor. Duis eget nisi arcu. Phasellus placerat
                posuere turpis at consectetur. Aenean arcu mi, sollicitudin quis
                auctor et, luctus in sapien. Donec pulvinar sagittis dolor. Nunc
                eget diam sit amet metus tempus condimentum. Donec et sodales
                sapien.
              </span>
            </div>
            <div className="buttonContainer">
              <Button title="CONTINUAR" onClick={handleTermsModal} />
            </div>
          </TermsModalContainer>
        </CustomModal>
        <form onSubmit={() => {}}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>

          <div className="imageContainer">
            <ShopImage
              imageSrc={image} // Imagem para o perfil do Shop
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
          <CheckboxFilter confirm={terms} toggleConfirm={handleTerms}>
            <span>
              Li e concordo com os{' '}
              <a onClick={handleTermsModal}>termos de uso</a> e{' '}
              <a href="#">política de privacidade</a>
            </span>
          </CheckboxFilter>
          <div className="buttonContainer">
            <div
              style={
                widthScreen ? { marginRight: '1rem' } : { marginBottom: '1rem' }
              }
            >
              <Button
                type="button"
                onClick={handleFinishRegister}
                title="FINALIZAR"
              />
            </div>
            <div>
              <Button
                type="button"
                onClick={() => Router.back()}
                title="VOLTAR"
                border
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
