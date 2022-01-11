import DrawerLateral from '../../../components/molecules/DrawerLateral'
import { IoIosClose } from 'react-icons/io'

import React, { useCallback, useState } from 'react'
import {
  ConfigButton,
  Container,
  ModalContainer
} from '../../../styles/pages/Shop'

import DescriptionCard from '../../../components/molecules/DescriptionCard'
import InfoCard from '../../../components/molecules/InfoCard'
import CustomModal from '../../../components/molecules/CustomModal'
import { Button } from '../../../components/atoms/Button'
import { Input } from '../../../components/molecules/Input'
import { FiSearch } from 'react-icons/fi'
import { CategoryCard } from '../../../components/molecules/CategoryCard'
import { IoCellular, IoFastFood } from 'react-icons/io5'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiBuildings, BiMapAlt, BiTimeFive } from 'react-icons/bi'
import { FaBuilding, FaRoad } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { FiInstagram } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  editBussinesInfo,
  editTimeTable,
  getBusiness
} from '../../../services/bussiness.services'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'
import { ShopImage } from 'components/molecules/ShopImage'
import { AiFillCamera, AiFillShop } from 'react-icons/ai'
import { DescriptionInput } from 'components/molecules/DescriptionInput'
import { api } from 'services/apiClient'
import { Point } from 'react-easy-crop/types'
import getCroppedImg from 'functions/cropImage'
import { CropModalContainer } from 'styles/pages/Catalog'
import Cropper from 'react-easy-crop'

type TimeTableArrayType = {
  [0]
  [1]
}

type EditTimeTable = {
  seg: Array<TimeTableArrayType>
  ter: Array<TimeTableArrayType>
  qua: Array<TimeTableArrayType>
  qui: Array<TimeTableArrayType>
  sex: Array<TimeTableArrayType>
  sab: Array<TimeTableArrayType>
  dom: Array<TimeTableArrayType>
}

type EditBussinesInfo = {
  name: FormDataEntryValue
  description: FormDataEntryValue
  avatar: FormDataEntryValue
  background: FormDataEntryValue
}

interface Shop {
  storeId: string
  id: string
  images: Array<TimeTableArrayType>
}

const Shop = ({ storeId, id, images }: Shop) => {
  const [vazio, setVazio] = useState(false)
  const [descModal, setDescModal] = useState(false)
  const [timeTableModal, setTimeTableModal] = useState(false)
  const [categoryModal, setCategoryModal] = useState(false)
  const [locationModal, setLocationModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)
  const [configModal, setConfigModal] = useState(false)

  const [previewImage, setPreviewImage] = useState(null)

  const [previewIcon, setPreviewIcon] = useState(null)
  const [previewBanner, setPreviewBanner] = useState(null)

  const [imageIcon, setImageIcon] = useState(null)
  const [imageBanner, setImageBanner] = useState(null)
  const [currentImage, setCurrentImage] = useState(1)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const rotation = 0

  const [businessName, setBusinessName] = useState('')
  const [stars, setStars] = useState()
  const [desc, setDesc] = useState('')

  const [telefone, setTelefone] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [whatsApp, setWhatsApp] = useState('')

  const [businessAddress, setBusinessAddress] = useState('')

  const [businessState, setBusinessState] = useState('')
  const [businessCity, setBusinessCity] = useState('')
  const [publicPlace, setPublicPlace] = useState('')
  const [number, setNumer] = useState('')
  const [district, setDistrict] = useState('')
  const [cep, setCep] = useState('')

  const [timeTable, setTimeTable] = useState(false)
  const [dom, setDom] = useState([])
  const [seg, setSeg] = useState([])
  const [ter, setTer] = useState([])
  const [qua, setQua] = useState([])
  const [qui, setQui] = useState([])
  const [sex, setSex] = useState([])
  const [sab, setSab] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

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

  // Categorias

  const [category, setCategory] = useState('')

  // Modal de horarios

  function handleOpenTimeModal() {
    setTimeTableModal(true)
  }

  function toggleTimeModal() {
    setTimeTableModal(!timeTableModal)
  }

  const { handleSubmit, register } = useForm()

  const handleEditTimeTable: SubmitHandler<EditTimeTable> = async (values) => {
    const body = {
      schedules: {
        seg: [values.seg[0], values.seg[1]],
        ter: [values.ter[0], values.ter[1]],
        qua: [values.qua[0], values.qua[1]],
        qui: [values.qui[0], values.qui[1]],
        sex: [values.sex[0], values.sex[1]],
        sab: [values.sab[0], values.sab[1]],
        dom: [values.dom[0], values.dom[1]]
      }
    }
    try {
      await editTimeTable(body)

      toast.success('Horários editado(s) com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })

      setTimeout(function () {
        setTimeTableModal(!timeTableModal)
        router.reload()
      }, 2500)
    } catch (e) {
      if (e.message.includes('401')) {
        return toast.error(
          'Usuário deslogado, faça o seu login para prosseguir',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }
        )
      } else {
        toast.error('Erro ao editar horários', {
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
  }

  // Modal de categorias

  function handleOpenCategoryModal() {
    setCategoryModal(true)
  }

  function toggleCategoryModal() {
    setCategoryModal(!categoryModal)
  }

  // Modal de localização

  function handleOpenLocationModal() {
    setLocationModal(true)
  }

  function toggleLocationModal() {
    setLocationModal(!locationModal)
  }

  // Modal de contatos

  function handleOpenContactModal() {
    setContactModal(true)
  }

  function toggleContactModal() {
    setContactModal(!contactModal)
  }

  // Modal de descrição

  function handleOpenDescModal() {
    setDescModal(true)
  }

  function toggleDescModal() {
    setDescModal(!descModal)
    setPreviewImage(null)
    setPreviewIcon(null)
    setPreviewBanner(null)
  }

  const handleEditBussinesDesc: SubmitHandler<EditBussinesInfo> = async (
    values
  ) => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('description', values.description)
    formData.append(
      'avatar',
      previewIcon ? dataURLtoFile(previewIcon, getFileName()) : null
    )
    formData.append(
      'background',
      previewBanner ? dataURLtoFile(previewBanner, getFileName()) : null
    )

    try {
      await editBussinesInfo(formData)

      toast.success('Informações editada(s) com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })

      setTimeout(function () {
        setDescModal(!descModal)
        router.reload()
      }, 2500)
    } catch (e) {
      if (e.message.includes('401')) {
        return toast.error(
          'Usuário deslogado, faça o seu login para prosseguir',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }
        )
      } else {
        toast.error('Erro ao editar informações', {
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
  }

  // Image Crop Modal

  // Generate file name

  function getFileName() {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength = 16
    let name = ''

    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length)
      name += chars.substring(randomNumber, randomNumber + 1)
    }
    const fileName = name
    return fileName
  }

  // DataURL to file

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1)
      n -= 1 // to make eslint happy
    }
    return new File([u8arr], filename, { type: mime })
  }

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

  async function cropImage(current) {
    // Get cropped image file

    const Image = await getCroppedImg(previewImage, croppedAreaPixels, rotation)

    try {
      if (current === 1) {
        setPreviewBanner(Image)
      }
      if (current === 2) {
        setPreviewIcon(Image)
      }
      notifySuccess('Foto recortada com sucesso!')
      setPreviewImage(null)
      toggleImageModal()
    } catch (e) {
      notify('Erro interno favor tentar novamente mais tarde!')
    }
  }

  // Data

  async function loadData() {
    try {
      const { data } = await getBusiness(`${id}`)

      setImageIcon(data?.avatar.url)
      setImageBanner(data?.background.url)

      setBusinessName(data?.name)
      setStars(data?.avgStars)
      setDesc(data?.description)

      if (data?.schedules) {
        setTimeTable(true)
        setDom(data?.schedules?.dom)
        setSeg(data?.schedules?.seg)
        setTer(data?.schedules?.ter)
        setQua(data?.schedules?.qua)
        setQui(data?.schedules?.qui)
        setSex(data?.schedules?.sex)
        setSab(data?.schedules?.sab)
      } else {
        setTimeTable(false)
      }

      setTelefone(data?.phone || '')
      setFacebook(data?.facebookLink || '')
      setInstagram(data?.instagramLink || '')
      setWhatsApp(data?.whatsappLink || '')

      setBusinessAddress(data?.address)
    } catch (e) {
      setVazio(true)
      toast.error('Erro ao buscar dados, tente novamente mais tarde', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleEditContactInfo() {
    console.log(storeId)

    try {
      const res = await api.patch(`stores`, {
        facebookLink: facebook,
        instagramLink: instagram,
        whatsappLink: whatsApp,
        phone: telefone
      })

      toast.success('Informações editadas com sucesso!')
      loadData()
      toggleContactModal()
    } catch (e) {
      toast.error('Houve um erro ao editar suas informações')
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title>Loja | Boa de Venda</title>
      </Head>

      <Container>
        <CustomModal
          buttons={false}
          setModalOpen={toggleTimeModal}
          modalVisible={timeTableModal}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Horário de funcionamento</h1>
              <IoIosClose onClick={toggleTimeModal} size={36} color={'black'} />
            </div>
            <form onSubmit={handleSubmit(handleEditTimeTable)}>
              <div className="timeTables-container">
                <div className="left-container">
                  <div className="dates">
                    <p>Segunda:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={seg[0]}
                      {...register('seg[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={seg[1]}
                      {...register('seg[1]')}
                    />
                  </div>
                  <div className="dates">
                    <p>Terça:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={ter[0]}
                      {...register('ter[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={ter[1]}
                      {...register('ter[1]')}
                    />
                  </div>
                  <div className="dates">
                    <p>Quarta:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={qua[0]}
                      {...register('qua[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={qua[1]}
                      {...register('qua[1]')}
                    />
                  </div>
                  <div className="dates">
                    <p>Quinta:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={qui[0]}
                      {...register('qui[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={qui[1]}
                      {...register('qui[1]')}
                    />
                  </div>
                </div>
                <div className="right-container">
                  <div className="dates">
                    <p>Sexta:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={sex[0]}
                      {...register('sex[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={sex[1]}
                      {...register('sex[1]')}
                    />
                  </div>
                  <div className="dates">
                    <p>Sabado:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={sab[0]}
                      {...register('sab[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={sab[1]}
                      {...register('sab[1]')}
                    />
                  </div>
                  <div className="dates">
                    <p>Domingo:</p>
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={dom[0]}
                      {...register('dom[0]')}
                    />
                    <Input
                      icon={<BiTimeFive />}
                      mask="time"
                      placeholder="00:00"
                      defaultValue={dom[1]}
                      {...register('dom[1]')}
                    />
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <Button title="Confirmar" type="submit" border={true}></Button>
              </div>
            </form>
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
                color={'black'}
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
                color={'black'}
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
                mask="cep"
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
                color={'black'}
              />
            </div>

            <div className="contact-container">
              <div className="top-inputs">
                <Input
                  label="Telefone"
                  placeholder="(00) 0000-0000"
                  mask="phone"
                  value={telefone}
                  flex={2}
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
              <Button
                title="Confirmar"
                onClick={handleEditContactInfo}
                border={true}
              />
            </div>
          </ModalContainer>
        </CustomModal>

        <CustomModal
          buttons={false}
          setModalOpen={toggleDescModal}
          modalVisible={descModal}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Descrição</h1>
              <IoIosClose onClick={toggleDescModal} size={36} color={'black'} />
            </div>

            <form onSubmit={handleSubmit(handleEditBussinesDesc)}>
              <div className="desc-container">
                <div className="top">
                  <section>
                    <img
                      id="banner"
                      src={previewBanner || '/images/capa.png'}
                      alt="Banner"
                    />
                    <button type="button" id="imageBtn">
                      <label htmlFor="banner[]">
                        <AiFillCamera size={23} color="var(--white)" />
                      </label>
                      <input
                        type="file"
                        id="banner[]"
                        name="banner"
                        accept="image/*"
                        multiple={false}
                        onChange={onFileChange}
                        style={{ display: 'none' }}
                        onClick={() => setCurrentImage(1)}
                      />
                    </button>
                  </section>
                  <ShopImage
                    id="icon"
                    imageSrc={previewIcon} // Imagem para o perfil do Shop
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
                        onClick={() => setCurrentImage(2)}
                      />
                    }
                  />
                </div>
                <div className="bottom">
                  <Input
                    label="Nome do negócio"
                    defaultValue={businessName}
                    placeholder="Exemplo: Café da Maria"
                    icon={<FaBuilding size={21} color="var(--black-800)" />}
                    {...register('name')}
                  />
                  <DescriptionInput
                    label="Descrição do negócio"
                    defaultValue={desc}
                    placeholder="Faça uma descrição rápida e útil do seu negócio para seus clientes."
                    {...register('description')}
                  />
                </div>
              </div>

              <div className="buttons-container">
                <Button title="Confirmar" border={true}></Button>
              </div>
            </form>
          </ModalContainer>
        </CustomModal>

        <CustomModal
          buttons={false}
          modalVisible={configModal}
          setModalOpen={() => setConfigModal(!configModal)}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Configurações adicionais</h1>
              <IoIosClose
                onClick={() => setConfigModal(!configModal)}
                size={36}
                color={'black'}
              />
            </div>

            <div className="options"></div>

            <div className="buttons-container">
              <Button
                title="Voltar"
                border={true}
                onClick={() => setConfigModal(!configModal)}
              />
            </div>
          </ModalContainer>
        </CustomModal>

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
                    aspect={currentImage === 1 ? 72 / 25 : 1 / 1}
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
              <Button
                title="Recortar"
                onClick={() => cropImage(currentImage)}
              />
            </section>
          </CropModalContainer>
        </CustomModal>

        <DrawerLateral greenOption={1} />

        <div className="cards-area">
          <div className="left-area">
            <DescriptionCard
              imgSrc={imageIcon}
              coverSrc={imageBanner}
              title={businessName}
              quantStar={stars}
              description={desc}
              button={() => handleOpenDescModal()}
              isLoading={isLoading}
              vazio={vazio}
              voidText="Nenhum descrição foi encontrada..."
            />

            <InfoCard
              title="Informações de Contato"
              type="contact"
              cell={telefone}
              facebook={facebook}
              instagram={instagram}
              whatsApp={whatsApp}
              button={() => handleOpenContactModal()}
              isLoading={isLoading}
              vazio={vazio}
              voidText="Nenhum contato foi encontrada..."
            />

            <ConfigButton
              title="CONFIGURAÇÕES ADCIONAIS"
              onClick={() => setConfigModal(true)}
            />
          </div>

          <div className="right-area">
            {!timeTable ? (
              <>
                <InfoCard
                  title="Horário de funcionamento"
                  type="timetable"
                  button={() => handleOpenTimeModal()}
                  isLoading={isLoading}
                  vazio={true}
                  voidText="Nenhum horário foi encontrada..."
                />
              </>
            ) : (
              <>
                <InfoCard
                  title="Horário de funcionamento"
                  type="timetable"
                  button={() => handleOpenTimeModal()}
                  seg={seg}
                  ter={ter}
                  qua={qua}
                  qui={qui}
                  sex={sex}
                  sab={sab}
                  dom={dom}
                  isLoading={isLoading}
                  vazio={false}
                />
              </>
            )}

            <InfoCard
              title="Categorias"
              type="category"
              button={() => handleOpenCategoryModal()}
              isLoading={isLoading}
              vazio={vazio}
              voidText="Nenhuma categoria foi encontrada..."
            />

            <InfoCard
              title="Localização"
              type="local"
              button={() => handleOpenLocationModal()}
              local={businessAddress}
              isLoading={isLoading}
              vazio={vazio}
              voidText="Nenhuma localização foi encontrada..."
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Shop

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const { data } = await apiClient.get('/stores/me')

  return {
    props: {
      storeId: data.store.id,
      id: data.store.formatedName,
      images: data.files
    }
  }
})
