import DrawerLateral from '../../../components/molecules/DrawerLateral'
import DrawerBottom from '../../../components/molecules/DrawerBottom'
import { IoIosClose } from 'react-icons/io'

import { MultiSelect as MyMultSelect } from 'react-multi-select-component'

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
  getStore
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
import { dataURLtoFile, getFileName } from 'functions/imageFileFunctions'

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

type EditBusinessInfo = {
  name: FormDataEntryValue
  description: FormDataEntryValue
  avatar: FormDataEntryValue
  background: FormDataEntryValue
}

type EditContactInfo = {
  phone: string
  whatsapp: string
  instagram: string
  facebook: string
}

type EditLocalizationInfo = {
  CNPJ: string
  address: string
  city: string
  state: string
  publicPlace: string
  number: string
  district: string
  cep: string
}

interface Shop {
  storeId: string
  id: string
}

const Shop = ({ storeId, id }: Shop) => {
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
  const [formatedName, setFormatedName] = useState('')
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
  const [neighborhood, setNeighborhood] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [cep, setCep] = useState('')
  const [addressNumber, setAddressNumber] = useState('')

  const [timeTable, setTimeTable] = useState(false)
  const [dom, setDom] = useState([])
  const [seg, setSeg] = useState([])
  const [ter, setTer] = useState([])
  const [qua, setQua] = useState([])
  const [qui, setQui] = useState([])
  const [sex, setSex] = useState([])
  const [sab, setSab] = useState([])

  const [category, setCategory] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  const { handleSubmit, register } = useForm()
  const router = useRouter()

  //state of edit categories
  const [selected, setSelected] = useState([])

  //Fake data of categories
  const categoriasFake = [
    { label: 'Calçados', value: 'Calçados' },
    { label: 'Eletronicos', value: 'Eletronicos' },
    { label: 'Mesa', value: 'Mesa' },
    { label: 'Cama', value: 'Cama' },
    { label: 'Eletro-Domesticos', value: 'Eletro-Domesticos' },
    { label: 'Informatica', value: 'Informatica' },
    { label: 'Papelaria', value: 'Papelaria' },
    { label: 'Alimentos', value: 'Alimentos' },
    { label: 'Limpeza', value: 'Limpeza' }
  ]

  // Functions

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

  const handleEditBussinesDesc: SubmitHandler<EditBusinessInfo> = async (
    values
  ) => {
    const body = {
      storeDto: {
        name: values.name,
        description: values.description
      }
    }

    const formData = new FormData()
    formData.append('storeDto', JSON.stringify(body.storeDto))
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

  const handleEditContactInfo: SubmitHandler<EditContactInfo> = async (
    values
  ) => {
    const body = {
      storeDto: {
        phone: values.phone,
        facebookLink: values.facebook,
        instagramLink: values.instagram,
        whatsappLink: values.whatsapp
      }
    }
    const formData = new FormData()
    formData.append('storeDto', JSON.stringify(body.storeDto))

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
        toggleContactModal()
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

  const handleEditLocalizationInfo: SubmitHandler<EditLocalizationInfo> =
    async (values) => {
      const body = {
        storeDto: {
          CNPJ: values.CNPJ,
          city: values.city,
          state: values.state,
          address: `${values.publicPlace}, n° ${values.number}, ${values.district}, CEP: ${values.cep}`
        }
      }
      const formData = new FormData()
      formData.append('storeDto', JSON.stringify(body.storeDto))

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
          toggleContactModal()
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

  // MODAL METHODS
  const [modalPayIsOpen, setModalPayIsOpen] = useState(false)

  function handleChangeModalOpen(funcModalClose, funcModalOpen) {
    funcModalClose(true)
    funcModalOpen(false)
  }

  const modalFakeOptions = [
    'Formas de pagamento',
    'Opções de entrega',
    'Opções indefinidas',
    'Opções indefinidas',
    'Opções indefinidas',
    'Opções indefinidas',
    'Excluir loja'
  ]

  // Modal de horarios

  function handleOpenTimeModal() {
    setTimeTableModal(true)
  }

  function toggleTimeModal() {
    setTimeTableModal(!timeTableModal)
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

  function removeThisItem(item) {
    setSelected(() =>
      selected.filter((category) => category.value != item.value)
    )
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
      const { data } = await getStore(`${storeId}`)
      console.log(data)
      setImageIcon(data?.avatar)
      setImageBanner(data?.background)

      setBusinessName(data?.name)
      setFormatedName(data?.formatedName)
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

      // setBusinessAddress(data?.address)
      setBusinessCity(data?.city)
      setBusinessState(data?.state)
      setPublicPlace(data?.street)
      setNeighborhood(data?.neighborhood)
      setAddressNumber(data?.addressNumber)
      // setBusinessAddress()
    } catch (e) {
      console.log(e)
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
          showCloseButton={false}
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
          showCloseButton={false}
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
              {/* <Input
                label=""
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                icon={<FiSearch size={20} color="var(--black-800)" />}
              ></Input> */}
              <MyMultSelect
                options={categoriasFake}
                value={selected}
                onChange={setSelected}
                labelledBy="Categorias"
                overrideStrings={{
                  search: 'Procurar',
                  selectAll: 'Selecionar todos',
                  selectSomeItems: 'Selecione...',
                  allItemsAreSelected: 'Todos os itens selecionados'
                }}
              />

              <div className="wrapper-categories-selecteds">
                {selected.map((item, i) => (
                  <CategoryCard
                    key={i}
                    label={item.value}
                    click={() => removeThisItem(item)}
                  />
                ))}
              </div>
            </div>
            <div className="buttons-container">
              <Button title="Confirmar" border={true}></Button>
            </div>
          </ModalContainer>
        </CustomModal>
        <CustomModal
          buttons={false}
          showCloseButton={false}
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
            <form onSubmit={handleSubmit(handleEditLocalizationInfo)}>
              <div className="inputRow">
                <Input
                  label="Estado"
                  placeholder="Estado"
                  defaultValue={businessState}
                  icon={
                    <HiOutlineLocationMarker
                      size={20}
                      color="var(--black-800)"
                    />
                  }
                  {...register('state')}
                />

                <Input
                  label="Cidade"
                  placeholder="Cidade"
                  defaultValue={businessCity}
                  icon={
                    <HiOutlineLocationMarker
                      size={20}
                      color="var(--black-800)"
                    />
                  }
                  {...register('city')}
                />
              </div>
              <div className="inputRow">
                <Input
                  label="Logradouro"
                  placeholder="Logradouro"
                  flex={3}
                  defaultValue={publicPlace}
                  icon={<FaRoad size={20} color="var(--black-800)" />}
                  {...register('publicPlace')}
                />

                <Input
                  label="Número"
                  placeholder="0000"
                  defaultValue={number}
                  flex={1}
                  type="numeric"
                  maxLength={6}
                  icon={<BiBuildings size={20} color="var(--black-800)" />}
                  {...register('number')}
                />
              </div>
              <div className="last-inputRow">
                <Input
                  label="Bairro"
                  placeholder="Bairro"
                  defaultValue={district}
                  icon={<BiMapAlt size={20} color="var(--black-800)" />}
                  {...register('district')}
                />

                <Input
                  label="CEP"
                  placeholder="000.000.000-00"
                  mask="cep"
                  defaultValue={cep}
                  icon={<BiMapAlt size={20} color="var(--black-800)" />}
                  {...register('cep')}
                />
              </div>
              <div className="buttons-container">
                <Button title="Confirmar" border={true}></Button>
              </div>
            </form>
          </ModalContainer>
        </CustomModal>
        <CustomModal
          buttons={false}
          showCloseButton={false}
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

            <form onSubmit={handleSubmit(handleEditContactInfo)}>
              <div className="contact-container">
                <div className="top-inputs">
                  <Input
                    label="Telefone"
                    placeholder="(00) 0000-0000"
                    mask="phone"
                    defaultValue={telefone}
                    flex={2}
                    maxLength={14}
                    icon={<IoMdCall size={20} color="var(--black-800)" />}
                    {...register('phone')}
                  />

                  <Input
                    label="Instagram do negócio"
                    placeholder="instagram.com/exemplo"
                    defaultValue={instagram}
                    flex={2}
                    type="text"
                    icon={<FiInstagram size={20} color="var(--black-800)" />}
                    {...register('instagram')}
                  />
                </div>

                <div className="bottom-inputs">
                  <Input
                    label="Facebook do negócio"
                    placeholder="facebook.com/exemplo"
                    defaultValue={facebook}
                    flex={2}
                    type="text"
                    icon={<FaFacebook size={20} color="var(--black-800)" />}
                    {...register('facebook')}
                  />
                  <Input
                    label="WhatsApp do negócio"
                    placeholder="whatsApp.com/exemplo"
                    defaultValue={whatsApp}
                    flex={2}
                    type="text"
                    icon={<IoLogoWhatsapp size={20} color="var(--black-800)" />}
                    {...register('whatsApp')}
                  />
                </div>
              </div>

              <div className="buttons-container">
                <Button title="Confirmar" border={true} />
              </div>
            </form>
          </ModalContainer>
        </CustomModal>
        <CustomModal
          buttons={false}
          showCloseButton={false}
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
                      src={
                        previewBanner || imageBanner?.url || '/images/capa.png'
                      }
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
                    imageSrc={previewIcon || imageIcon?.url} // Imagem para o perfil do Shop
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

        {/* ADVANCED OPTIONS MODAL */}
        <CustomModal
          buttons={false}
          showCloseButton={false}
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

            <div className="options">
              {modalFakeOptions.map((opt, ind) => (
                <div key={ind} className="wrap-opts">
                  <a
                    onClick={() =>
                      handleChangeModalOpen(setModalPayIsOpen, setConfigModal)
                    }
                  >
                    {opt}
                  </a>
                </div>
              ))}
            </div>

            <div className="buttons-container">
              <Button
                title="Voltar"
                border={true}
                onClick={() => setConfigModal(!configModal)}
              />
            </div>
          </ModalContainer>
        </CustomModal>

        {/*PAYMENT METHODS*/}
        <CustomModal
          buttons={false}
          showCloseButton={false}
          modalVisible={modalPayIsOpen}
          setModalOpen={() => setModalPayIsOpen(!modalPayIsOpen)}
        >
          <ModalContainer>
            <div className="exit-container">
              <h1>Formas de Pagamento</h1>
              <IoIosClose
                onClick={() => setModalPayIsOpen(!modalPayIsOpen)}
                size={36}
                color={'black'}
              />
            </div>

            <div className="options">
              <a>Pix</a>
            </div>

            <div className="buttons-container">
              <Button
                title="Voltar"
                border={true}
                onClick={() => setModalPayIsOpen(!modalPayIsOpen)}
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
                    aspect={currentImage === 1 ? 96 / 35 : 1 / 1}
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
              imgSrc={imageIcon?.url}
              coverSrc={imageBanner?.url}
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
            <div className="buttonContainer">
              <ConfigButton
                border
                title="Pré-visualização"
                onClick={() =>
                  router.push(
                    `http://${formatedName}.${process.env.hostName}/store`
                  )
                }
              />
              <ConfigButton
                title="CONFIGURAÇÕES ADCIONAIS"
                onClick={() => setConfigModal(true)}
              />
            </div>
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
              local={`${publicPlace}, ${addressNumber}, ${businessCity} - ${businessState}, ${cep}`}
              isLoading={isLoading}
              vazio={vazio}
              voidText="Nenhuma localização foi encontrada..."
            />
          </div>
        </div>
        <DrawerBottom greenOption={1} />
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
      id: data.store.formatedName
    }
  }
})
