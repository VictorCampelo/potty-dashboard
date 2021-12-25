import React, { useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { MultiSelect as Select } from 'components/molecules/Select'

import {
  getCategories,
  getProducts
} from '../../../services/bussiness.services'

import {
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct
} from '../../../services/products.services'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { IoIosClose, IoMdCamera } from 'react-icons/io'
import { FaMoneyBill, FaPercentage, FaCoins } from 'react-icons/fa'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import { IoTrashBinOutline } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import {
  MdUpload,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'

import { Button } from '../../../components/atoms/Button'
import CatalogTabs from '../../../components/molecules/CatalogTabs'
import { CategoryListCard } from '../../../components/molecules/CategoryListCard'
import CustomModal from '../../../components/molecules/CustomModal'
import DrawerLateral from '../../../components/molecules/DrawerLateral'
import { Input } from '../../../components/molecules/Input'
import { ProductListCard } from '../../../components/molecules/ProductListCard'
import { TextArea } from '../../../components/molecules/TextArea'
import {
  AddCategoryModalContainer,
  AddProductModalContainer,
  Container,
  CropModalContainer,
  EditCategoryModalContainer,
  ExcludeModalContainer,
  EmptyContainer
} from '../../../styles/pages/Catalog'
import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'
import { MultiSelect } from 'components/molecules/MultiSelect'
import { Point } from 'react-easy-crop/types'
import getCroppedImg from 'functions/cropImage'
import Cropper from 'react-easy-crop'
import CupomItem from 'components/molecules/CupomItem'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type CategoryType = {
  name: string
  type: string
  id: string
  enabled: false
  createdAt: string
  updatedAt: string
}

type ProductType = {
  avgStars: number
  createdAt: string
  deletedAt: string
  description: string
  discount: any
  files: [string]
  id: string
  inventory: number
  lastSold: any
  price: number
  sumFeedbacks: number
  sumOrders: number
  sumStars: number
  tags: any
  title: string
  updatedAt: string
  categories: string[]
}

interface CatalogType {
  storeId: string
}

interface Cupom {
  code: string
  discountPorcent: number
  maxUsage: number
}

type CreateProductFormData = {
  title: string
  price: string
  description: string
  inventory: string
  discount: string
  parcelAmount: string
}

const createProductFormSchema = yup.object().shape({
  title: yup.string(),
  price: yup.string(),
  description: yup.string(),
  inventory: yup.string(),
  discount: yup.string(),
  parcelAmount: yup.string()
})

const catalog = ({ storeId }: CatalogType) => {
  const [excludeModal, setExcludeModal] = useState(false)
  const [confirmExclude, setConfirmExclude] = useState(false)

  const [editCategoryModal, setEditCategoryModal] = useState(false)
  const [excludeCategoryModal, setExcludeCategoryModal] = useState(false)

  const [addModal, setAddModal] = useState(false)
  const [addCategoryModal, setCategoryAddModal] = useState(false)

  const [addCupomModal, setAddCupomModal] = useState(false)

  const [editProduct, setEditProduct] = useState(false)
  const [editProductId, setEditProductId] = useState('')
  const [deleteProductId, setDeleteProductId] = useState('')
  const [editCategoryId, setEditCategoryId] = useState('')
  const [deleteCategoryId, setDeleteCategoryId] = useState('')

  const [category, setCategory] = useState('')
  const [products, setProducts] = useState<ProductType[]>([])

  const [categories, setCategories] = useState<CategoryType[]>([])
  const [titleProduct, setTitleProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const [inventoryProduct, setInventoryProduct] = useState('')
  const [discountProduct, setDiscountProduct] = useState('')
  const [installments, setInstallments] = useState({
    value: '1',
    label: '1x'
  })

  const [cupons, setCupons] = useState<Cupom[]>([
    { code: 'ENFIMNATAL', discountPorcent: 10, maxUsage: 1000 },
    { code: 'DESCONTO10', discountPorcent: 15, maxUsage: 3123 },
    { code: 'DICONTIN', discountPorcent: 3, maxUsage: 10 },
    { code: 'DESCONTAI', discountPorcent: 4, maxUsage: 5 }
  ])

  const [previewImage, setPreviewImage] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [imageSrc1, setImageSrc1] = useState(null)
  const [imageSrc2, setImageSrc2] = useState(null)
  const [currentImage, setCurrentImage] = useState(1)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const rotation = 0

  const [toggleState, setToggleState] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState([])

  const Installments = [...Array(12)].map((it, idx) => ({
    value: String(idx + 1),
    label: idx + 1 + 'x'
  }))

  // Functions Open Modals

  function toggleAddCategoryModal() {
    setCategoryAddModal(!addCategoryModal)
  }

  function handleOpenAddModal() {
    setAddModal(true)
  }

  function toggleAddModal() {
    setAddModal(!addModal)
    setPreviewImage(null)
    setImageSrc(null)
    setImageSrc1(null)
    setImageSrc2(null)
  }

  function toggleEditProduct() {
    setEditProduct(!editProduct)
    setPreviewImage(null)
    setImageSrc(null)
    setImageSrc1(null)
    setImageSrc2(null)
  }

  function handleOpenExcludeModal() {
    setExcludeModal(true)
  }

  function toggleExcludeModal() {
    setExcludeModal(!excludeModal)
  }

  function handleContinueExcludeModal() {
    setConfirmExclude(!confirmExclude)
  }

  function handleOpenEditCategoryModal() {
    setEditCategoryModal(true)
  }

  function handleToggleExcludeCategoryModal() {
    setExcludeCategoryModal(!excludeCategoryModal)
  }

  function toggleEditCategoryModal() {
    setCategory('')
    setEditCategoryModal(!editCategoryModal)
  }

  function toggleAddCupomModal() {
    setAddCupomModal(!addCupomModal)
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
      notify('Selecione apenas 1 imagem pro vez')
    }
  }

  async function cropImage(current) {
    // Get cropped image file

    const Image = await getCroppedImg(previewImage, croppedAreaPixels, rotation)

    try {
      if (current === 1) {
        setImageSrc(Image)
      }
      if (current === 2) {
        setImageSrc1(Image)
      }
      if (current === 3) {
        setImageSrc2(Image)
      }
      notifySuccess('Foto recortada com sucesso!')
      setPreviewImage(null)
      toggleImageModal()
    } catch (e) {
      notify('Erro interno favor tentar novamente mais tarde!')
    }
  }

  // Functions

  async function handleCreateCategory() {
    try {
      await createCategory(category, storeId)

      notifySuccess('Categoria criada com sucesso!')

      setCategory('')
      loadData()
      toggleAddCategoryModal()
    } catch (e) {
      console.error(e)

      notify('Erro ao criar categoria')
    }
  }

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory(deleteCategoryId, storeId)

      notifySuccess('Produto deletado com sucesso!')
    } catch (e) {
      notify('Erro ao excluir produto, tente novamente!')
    }

    setExcludeCategoryModal(false)
    loadData()
  }

  const handleUpdateCategory = async () => {
    const body = {
      name: category,
      storeId
    }

    try {
      await updateCategory(editCategoryId, storeId, body)

      notifySuccess('Produto atualizado com sucesso!')
    } catch (e) {
      notify('Erro ao editar produto, tente novamente!')
    }
    setCategory('')
    loadData()
    setEditCategoryModal(false)
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(createProductFormSchema)
  })

  const handleCreateProduct: SubmitHandler<CreateProductFormData> = async (
    values,
    event
  ) => {
    const body = {
      title: values.title,
      price: Number(
        values.price.replace('R$ ', '').replaceAll('.', '').replaceAll(',', '.')
      ),
      description: descriptionProduct,
      inventory: Number(values.inventory || '0'),
      discount: Number(values.discount),
      categoriesIds: selectedCategories.map((cat) => cat.value),
      files: [imageSrc, imageSrc1, imageSrc2],
      parcelAmount: Number(installments.value)
    }

    try {
      await createProduct({ data: body })

      toast.success('Produto criado com sucesso')

      setAddModal(false)
      setTitleProduct('')
      setPriceProduct('')
      setDescriptionProduct('')
      setInventoryProduct('')
      setDiscountProduct('')
      setSelectedCategories([])
    } catch (e) {
      console.error(e)

      if (e.status == 401) {
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
      }

      toast.error('Erro ao criar produto')
    }

    loadData()
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(deleteProductId)

      notifySuccess('Produto deletado com sucesso!')
      setExcludeModal(false)
      loadData()
    } catch (e) {
      notify('Erro ao excluir produto, tente novamente!')
    }
  }

  const handleUpdateProduct: SubmitHandler<CreateProductFormData> = async (
    values,
    event
  ) => {
    const body = {
      title: values.title,
      price: Number(
        values.price.replace('R$ ', '').replaceAll('.', '').replaceAll(',', '.')
      ),
      description: descriptionProduct,
      inventory: Number(values.inventory || '0'),
      discount: Number(values.discount),
      categoriesIds: selectedCategories.map((cat) => cat.value),
      files: [imageSrc, imageSrc1, imageSrc2],
      parcelAmount: Number(installments.value)
    }

    try {
      await updateProduct(editProductId, body)

      notifySuccess('Produto deletado com sucesso!')
    } catch (e) {
      console.error(e)

      notify('Erro ao editar produto, tente novamente!')
    }

    setTitleProduct('')
    setPriceProduct('')
    setDescriptionProduct('')
    setInventoryProduct('')
    setEditProductId('')
    setDiscountProduct('')
    setSelectedCategories([])
    loadData()
    setEditProduct(false)
  }

  // Request Back-End

  const loadData = async () => {
    try {
      const { data } = await getProducts(storeId)

      const formatedData = data.map((it) => ({
        ...it,
        categories: it.categories.map((cat: CategoryType) => cat.name)
      }))

      setProducts(formatedData)
    } catch (e) {
      notify('Erro ao buscar produtos')
    }

    try {
      const { data } = await getCategories(storeId)

      setCategories(data)
    } catch (e) {
      notify('Erro ao buscar categorias')
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title> Catálogo | Boa de Venda </title>
      </Head>

      {/* Remove category */}
      <CustomModal
        buttons={false}
        setModalOpen={() => {
          handleToggleExcludeCategoryModal()
        }}
        modalVisible={excludeCategoryModal}
      >
        <ExcludeModalContainer>
          <h1>
            Realmente deseja excluir <strong>definitivamente</strong> esse
            produto?
          </h1>

          <div className="btn-container">
            <button
              onClick={() => {
                handleDeleteCategory()
              }}
              className="exclude-btn"
            >
              Confirmar
            </button>
            <button
              onClick={handleToggleExcludeCategoryModal}
              className="cancel-btn"
            >
              Cancelar
            </button>
          </div>
        </ExcludeModalContainer>
      </CustomModal>

      {/* Remove product */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleExcludeModal}
        modalVisible={excludeModal}
      >
        <ExcludeModalContainer>
          {confirmExclude ? (
            <>
              <div className="icon">
                <IoTrashBinOutline size={120} color="var(--red)" />
              </div>
              <h1 className="desc">Categoria excluído com sucesso!</h1>
              <div className="btn">
                <button
                  onClick={handleContinueExcludeModal}
                  className="continue-btn"
                >
                  Continuar
                </button>
              </div>
            </>
          ) : (
            <>
              <h1>
                Realmente deseja excluir <strong>definitivamente</strong> essa
                categoria?
              </h1>

              <div className="btn-container">
                <button onClick={handleDeleteProduct} className="exclude-btn">
                  Confirmar
                </button>
                <button
                  onClick={() => {
                    toggleExcludeModal()
                    setDeleteProductId('')
                  }}
                  className="cancel-btn"
                >
                  Cancelar
                </button>
              </div>
            </>
          )}
        </ExcludeModalContainer>
      </CustomModal>

      {/* Add category */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleAddCategoryModal}
        modalVisible={addCategoryModal}
      >
        <AddCategoryModalContainer>
          <div className="exit-container">
            <h1>Adicionar Categoria</h1>

            <IoIosClose
              onClick={toggleAddCategoryModal}
              size={36}
              color={'black'}
            />
          </div>

          <div className="inputContainer">
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Categoria"
            />
          </div>

          <div className="buttonContainer">
            <Button
              title="Voltar"
              border
              style={{ marginRight: 16 }}
              onClick={toggleAddCategoryModal}
            />

            <Button title="Salvar" onClick={handleCreateCategory} />
          </div>
        </AddCategoryModalContainer>
      </CustomModal>

      {/* Edit category */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleEditCategoryModal}
        modalVisible={editCategoryModal}
      >
        <EditCategoryModalContainer>
          <div className="exit-container">
            <h1>Editar Categoria</h1>
            <IoIosClose
              onClick={toggleEditCategoryModal}
              size={36}
              color={'black'}
            />
          </div>

          <div className="category-container">
            <Input
              label="Nome da categoria"
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="category-btn-container">
            <button onClick={handleUpdateCategory}>Confirmar</button>
          </div>
        </EditCategoryModalContainer>
      </CustomModal>

      {/* Add product */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleAddModal}
        modalVisible={addModal}
      >
        <AddProductModalContainer onSubmit={handleSubmit(handleCreateProduct)}>
          <h1 className="titulo-cadastro">Cadastrar Produto</h1>
          <div className="input-infos">
            <div className="left-area">
              <Input
                label="Nome do produto"
                icon={<FiBox />}
                placeholder="Nome do produto"
                {...register('title')}
              />

              <TextArea
                label="Descrição do produto"
                maxLength={600}
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                value={descriptionProduct}
                {...register('description')}
                onChange={(e) => setDescriptionProduct(e.target.value)}
              />

              <div className="row">
                <Input
                  label="Preço"
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                  mask="monetary"
                  {...register('price')}
                />

                <Select
                  name="Parcelamento"
                  options={Installments}
                  selectedValue={installments}
                  setSelectedValue={setInstallments}
                  loading={false}
                  placeholder="Selecione o número de parcelas"
                  style={{ width: '50%' }}
                />
              </div>

              <div className="desconto">
                <Input
                  label="Desconto"
                  icon={<FaPercentage />}
                  mask="number"
                  placeholder="0.0%"
                  {...register('discount')}
                />

                <div className="arrows">
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>

                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  value={(
                    (Number(
                      getValues?.('discount')
                        ?.replace('R$ ', '')
                        ?.replaceAll('.', '')
                        ?.replaceAll(',', '.') || '0'
                    ) *
                      Number(discountProduct)) /
                    100
                  ).toFixed(2)}
                  disabled
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                />
              </div>
            </div>

            <div className="right-area">
              <div className="input-container">
                <Input
                  label="Quantidade atual"
                  icon={<FaCoins />}
                  placeholder="0"
                  mask="number"
                  {...register('inventory')}
                />
              </div>

              <MultiSelect
                loading={false}
                name="Categorias"
                options={categories.map((cat) => ({
                  value: String(cat.id),
                  label: cat.name
                }))}
                placeholder="Suas categorias"
                selectedValue={selectedCategories}
                setSelectedValue={setSelectedCategories}
              />
              <h3>{'Categorias adicionadas: ' + selectedCategories.length}</h3>

              <h2>Foto do produto</h2>

              {/*<div className="foto">
                 <div className="title-foto">Foto</div>
                 <label htmlFor="image">
                  Enviar foto
                  <MdUpload size={20} />
                </label>
              </div> */}

              <div className="array-fotos">
                <MdOutlineArrowBackIosNew />
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(1)}
                />
                <input
                  id="image1"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(2)}
                />
                <input
                  id="image2"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(3)}
                />
                <label htmlFor="image">
                  <div className="card-image">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <label htmlFor="image1">
                  <div className="card-image">
                    {imageSrc1 ? (
                      <img
                        src={imageSrc1}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <label htmlFor="image2">
                  <div className="card-image">
                    {imageSrc2 ? (
                      <img
                        src={imageSrc2}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <MdOutlineArrowForwardIos />
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <Button
              title="Voltar"
              border
              style={{ marginRight: 16 }}
              onClick={toggleAddModal}
            />

            <Button title="Salvar" type="submit" />
          </div>
        </AddProductModalContainer>
      </CustomModal>

      {/* Edit product */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleEditProduct}
        modalVisible={editProduct}
      >
        <AddProductModalContainer onSubmit={handleSubmit(handleUpdateProduct)}>
          <h1 className="titulo-cadastro">Cadastrar Produto</h1>
          <div className="input-infos">
            <div className="left-area">
              <Input
                label="Nome do produto"
                icon={<FiBox />}
                placeholder="Nome do produto"
                {...register('title')}
              />

              <TextArea
                label="Descrição do produto"
                maxLength={600}
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                value={descriptionProduct}
                {...register('description')}
                onChange={(e) => setDescriptionProduct(e.target.value)}
              />

              <div className="row">
                <Input
                  label="Preço"
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                  mask="monetary"
                  {...register('price')}
                />

                <Select
                  name="Parcelamento"
                  options={Installments}
                  selectedValue={installments}
                  setSelectedValue={setInstallments}
                  loading={false}
                  placeholder="Selecione o número de parcelas"
                  style={{ width: '50%' }}
                />
              </div>

              <div className="desconto">
                <Input
                  label="Desconto"
                  icon={<FaPercentage />}
                  mask="number"
                  placeholder="0.0%"
                  {...register('discount')}
                />

                <div className="arrows">
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>

                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  value={(
                    (Number(
                      getValues?.('discount')
                        ?.replace('R$ ', '')
                        ?.replaceAll('.', '')
                        ?.replaceAll(',', '.') || '0'
                    ) *
                      Number(discountProduct)) /
                    100
                  ).toFixed(2)}
                  disabled
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                />
              </div>
            </div>

            <div className="right-area">
              <div className="input-container">
                <Input
                  label="Quantidade atual"
                  icon={<FaCoins />}
                  placeholder="0"
                  mask="number"
                  {...register('inventory')}
                />
              </div>

              <MultiSelect
                loading={false}
                name="Categorias"
                options={categories.map((cat) => ({
                  value: String(cat.id),
                  label: cat.name
                }))}
                placeholder="Suas categorias"
                selectedValue={selectedCategories}
                setSelectedValue={setSelectedCategories}
              />
              <h3>{'Categorias adicionadas: ' + selectedCategories.length}</h3>

              <h2>Foto do produto</h2>

              {/*<div className="foto">
                 <div className="title-foto">Foto</div>
                 <label htmlFor="image">
                  Enviar foto
                  <MdUpload size={20} />
                </label>
              </div> */}

              <div className="array-fotos">
                <MdOutlineArrowBackIosNew />
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(1)}
                />
                <input
                  id="image1"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(2)}
                />
                <input
                  id="image2"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                  maxLength={1}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  onClick={() => setCurrentImage(3)}
                />
                <label htmlFor="image">
                  <div className="card-image">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <label htmlFor="image1">
                  <div className="card-image">
                    {imageSrc1 ? (
                      <img
                        src={imageSrc1}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <label htmlFor="image2">
                  <div className="card-image">
                    {imageSrc2 ? (
                      <img
                        src={imageSrc2}
                        width="100%"
                        height="100%"
                        alt="Foto Produto"
                      />
                    ) : (
                      <IoMdCamera size={25} color="#6C7079" />
                    )}
                  </div>
                </label>
                <MdOutlineArrowForwardIos />
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <Button
              title="Voltar"
              border
              style={{ marginRight: 16 }}
              onClick={toggleAddModal}
            />

            <Button title="Salvar" type="submit" />
          </div>
        </AddProductModalContainer>
      </CustomModal>

      {/* Add product */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleAddCupomModal}
        modalVisible={addCupomModal}
      >
        <AddProductModalContainer>
          <h1 className="titulo-cadastro">Cadastrar Cupom</h1>
          <div className="input-infos">
            <div className="left-area">
              <div className="radio-area">
                <span>Valor do desconto</span>
                <div className="radio-container">
                  <input type="radio" name="type" value="1" id="real" />
                  <label htmlFor="all">Real</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="type" value="2" id="perc" />
                  <label htmlFor="cat">Porcentagem</label>
                </div>
              </div>

              <Input
                label="Valor do desconto"
                icon={<FaMoneyBill />}
                placeholder="R$ 0"
                mask="monetary"
              />

              <div className="row">
                <Input label="Validade" placeholder="02/12/2021" mask="date" />

                <Input label="N° de cupons" placeholder="0" mask="number" />
              </div>

              <div className="radio-area">
                <input type="checkbox" name="type" value="1" id="ilim" />
                <label htmlFor="ilim">Cupons ilimitados</label>
              </div>

              <div className="row">
                <Input label="Nome do cupom" placeholder="CUPOM10" />
              </div>

              <small>
                Código que será digitado pelo cliente, deverá possuir apenas
                letras e número.
              </small>
            </div>

            <div className="right-area">
              <div className="radio-area">
                <span>Tipo de desconto</span>
                <div className="radio-container">
                  <input type="radio" name="type" value="1" id="all" />
                  <label htmlFor="all">Toda a loja</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="type" value="2" id="cat" />
                  <label htmlFor="cat">Categorias selecionadas</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="type" value="3" id="first" />
                  <label htmlFor="first">Primeira compra</label>
                </div>
              </div>

              <div className="input-container">
                <Input
                  label="Quantidade atual"
                  icon={<FaCoins />}
                  placeholder="0"
                  mask="number"
                />
              </div>

              <MultiSelect
                loading={false}
                name="Categorias"
                options={categories.map((cat) => ({
                  value: String(cat.id),
                  label: cat.name
                }))}
                placeholder="Suas categorias"
                selectedValue={selectedCategories}
                setSelectedValue={setSelectedCategories}
              />
              <h3>{'Categorias adicionadas: ' + selectedCategories.length}</h3>

              <div className="radio-area">
                <input type="checkbox" name="type" value="1" id="priv" />
                <label htmlFor="priv">Cupom privado</label>
                <br />
                <small>
                  Cupons privados só serão acessíveis para quem tiver o nome do
                  cupom.
                </small>
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <Button
              title="Voltar"
              border
              style={{ marginRight: 16 }}
              onClick={toggleAddCupomModal}
              type="button"
            />

            <Button title="Salvar" />
          </div>
        </AddProductModalContainer>
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
            <Button title="Recortar" onClick={() => cropImage(currentImage)} />
          </section>
        </CropModalContainer>
      </CustomModal>

      <Container>
        <DrawerLateral activated={true} greenOption={4} />

        <div className="area">
          <div className="list-container">
            <header className="header">
              <button
                className="addBtn"
                onClick={
                  toggleState == 1
                    ? handleOpenAddModal
                    : toggleState == 2
                    ? toggleAddCategoryModal
                    : toggleAddCupomModal
                }
              >
                <FiPlus size={20} color="var(--white)" />
                Adicionar
              </button>
              <div className="input-container">
                <Input
                  className="searchInput"
                  label=""
                  placeholder="Pesquisar"
                  icon={<FiSearch size={18} color="var(--black-800)" />}
                />
              </div>
            </header>

            <main>
              <CatalogTabs
                tab1="Produtos"
                tab2="Categorias"
                tab3="Cupons"
                setToggleState={setToggleState}
                toggleState={toggleState}
                content1={
                  <div className="products-container">
                    {products.length > 0 ? (
                      products.map((product, index) => {
                        return (
                          <ProductListCard
                            key={product?.id + '-' + index}
                            icon=""
                            name={product?.title}
                            code={product?.id}
                            category={product?.tags}
                            amount={product?.inventory}
                            price={product?.price}
                            excludeBtn={() => {
                              handleOpenExcludeModal()
                              setDeleteProductId(product.id)
                            }}
                            editBtn={() => {
                              setEditProductId(product.id)
                              setEditProduct(true)
                            }}
                            isRed={true}
                            isGreen={true}
                          />
                        )
                      })
                    ) : (
                      <EmptyContainer>
                        <div>
                          <img src="/images/emptyProducts.svg" />
                          <p>Nenhum produto cadastrado</p>
                          <Button
                            title="Cadastrar"
                            onClick={handleOpenAddModal}
                          />
                        </div>
                      </EmptyContainer>
                    )}
                  </div>
                }
                content2={
                  <div className="categories-container">
                    {categories.length > 0 ? (
                      categories.map((cat, index) => {
                        return (
                          <CategoryListCard
                            key={cat.id + '-' + index}
                            date={products
                              .filter((prd) =>
                                prd.categories.includes(cat.name)
                              )
                              .map((data) => {
                                return {
                                  name: data.title,
                                  amount: String(data.inventory)
                                }
                              })}
                            category={cat.name}
                            excludeBtn={() => {
                              setDeleteCategoryId(cat.id)
                              handleToggleExcludeCategoryModal()
                            }}
                            editBtn={() => {
                              setEditCategoryId(cat.id)
                              handleOpenEditCategoryModal()
                            }}
                            isGreen={true}
                            isRed={true}
                          />
                        )
                      })
                    ) : (
                      <EmptyContainer>
                        <div>
                          <img src="/images/emptyCategories.svg" />
                          <p>Nenhuma categoria cadastrada</p>
                          <Button
                            title="Cadastrar"
                            onClick={toggleAddCategoryModal}
                          />
                        </div>
                      </EmptyContainer>
                    )}
                  </div>
                }
                content3={
                  <div className="cupons-container">
                    {cupons.length !== 0 ? (
                      cupons.map((it) => (
                        <CupomItem
                          code={it.code}
                          info={`Desconto de ${it.discountPorcent} com o máximo de usos: ${it.maxUsage}`}
                          key={it.code}
                        />
                      ))
                    ) : (
                      <EmptyContainer>
                        <div>
                          <img src="/images/emptyCategories.svg" />
                          <p>Nenhuma cupom cadastrado</p>
                          <Button title="Cadastrar" onClick={() => {}} />
                        </div>
                      </EmptyContainer>
                    )}
                  </div>
                }
              />
            </main>
          </div>
        </div>
      </Container>
    </>
  )
}

export default catalog

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const { data } = await apiClient.get('/stores/me')

  return {
    props: {
      storeId: data.store.id
    }
  }
})
