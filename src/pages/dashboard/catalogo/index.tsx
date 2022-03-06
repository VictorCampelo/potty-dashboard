import React, { useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { MultiSelect as Select } from 'components/molecules/Select'

import {
  createCupom,
  deleteCupom,
  getCategories,
  getCupom,
  getProducts
} from 'services/bussiness.services'

import {
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct
} from 'services/products.services'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FiPlus, FiSearch, FiArrowLeft } from 'react-icons/fi'
import { IoIosClose, IoMdCamera } from 'react-icons/io'
import { FaMoneyBill, FaPercentage, FaCoins } from 'react-icons/fa'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import { IoTrashBinOutline } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'

import { Button } from 'components/atoms/Button'
import CatalogTabs from 'components/molecules/CatalogTabs'
import { CategoryListCard } from 'components/molecules/CategoryListCard'
import CustomModal from 'components/molecules/CustomModal'
import DrawerLateral from 'components/molecules/DrawerLateral'
import DrawerBottom from 'components/molecules/DrawerBottom'
import { Input } from 'components/molecules/Input'
import { ProductListCard } from 'components/molecules/ProductListCard'
import { TextArea } from 'components/molecules/TextArea'
import {
  AddCategoryModalContainer,
  AddProductModalContainer,
  Container,
  CropModalContainer,
  EditCategoryModalContainer,
  ExcludeModalContainer,
  EmptyContainer
} from 'styles/pages/Catalog'
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
import { format } from 'date-fns'
import { dataURLtoFile, getFileName } from 'functions/imageFileFunctions'
import { Checkbox } from 'components/atoms/Checkbox'
import formatToBrl from 'utils/formatToBrl'
import formatToNumber from 'utils/formatToNumber'

type CategoryType = {
  name: string
  type: string
  id: string
  enabled: false
  createdAt: string
  updatedAt: string
}
type FileProduct = {
  url: string
}

type ProductType = {
  avgStars: number
  createdAt: string
  deletedAt: string
  description: string
  parcelAmount: number
  discount: any
  files: FileProduct[]
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
  const [enableDiscount, setEnableDiscount] = useState(false)

  const [addCupomModal, setAddCupomModal] = useState(false)

  const [editProduct, setEditProduct] = useState(false)
  const [editProductId, setEditProductId] = useState('')
  const [deleteProductId, setDeleteProductId] = useState('')
  const [editCategoryId, setEditCategoryId] = useState('')
  const [deleteCategoryId, setDeleteCategoryId] = useState('')

  const [category, setCategory] = useState('')
  const [products, setProducts] = useState<ProductType[]>([])

  const [categories, setCategories] = useState<CategoryType[]>([])
  const [installments, setInstallments] = useState({
    value: '1',
    label: '1x'
  })

  const [cupons, setCupons] = useState<Cupom[]>([])

  const [cupomCode, setCupomCode] = useState('')
  const [discountPorcent, setDiscountPorcent] = useState('')
  const [maxUsage, setMaxUsage] = useState('')
  const [validate, setValidate] = useState('')

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

  // METHODS/FUNCTIONS FOR EDIT PRODUCT MODAL

  const [productEditValue, setProductEditValue] = useState('')

  function editProductSelected(product: ProductType) {
    console.log(product)
    setEnableDiscount(false)
    setValue('title', product.title)
    setValue('price', product.price)
    setValue('discount', product.discount)
    if (Number(product.discount) > 0) setEnableDiscount(true)

    setProductEditValue(product.description)
    setInstallments({
      value: product.parcelAmount.toString(),
      label: `${product.parcelAmount}x`
    })

    console.log(categories)

    const catSelecteds = categories
      .filter((cat) =>
        product.categories.some((selected) => selected == cat.name)
      )
      .map((item) => ({ label: item.name, value: item.id }))

    setSelectedCategories(catSelecteds)
  }

  // ## -- ##

  const date = new Date()
  date.setDate(date.getDate() + 30)

  const futureDate = format(date, "dd'/'MM'/'Y")
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
    toast.success(message)
  }

  function notify(message: string) {
    toast.error(message)
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

  async function handleCreateCategory(newCategory?: string) {
    try {
      await createCategory(category || newCategory, storeId)

      notifySuccess('Categoria criada com sucesso!')

      setCategory('')
      loadData()
      toggleAddCategoryModal()
    } catch (e) {
      console.error(e)

      notify('Erro ao criar categoria')
    }
  }

  async function handleCreateCupom() {
    try {
      await createCupom({
        code: cupomCode,
        discountPorcent: Number(discountPorcent),
        maxUsage: Number(maxUsage),
        validate: new Date(validate + '-3:00'),
        type: 'percentage',
        range: 'store',
        categoriesIds: selectedCategories.map((it) => it.value)
      })

      notifySuccess('Cupom criado com sucesso!')

      loadData()
      toggleAddCategoryModal()
    } catch (e) {
      console.error(e)

      notify('Erro ao criar cupom')
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

  const { register, handleSubmit, getValues, setValue } = useForm({
    resolver: yupResolver(createProductFormSchema)
  })

  const handleCreateProduct: SubmitHandler<CreateProductFormData> = async (
    values
  ) => {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('price', String(formatToNumber(String(values.price))))
    formData.append('description', values.description)
    formData.append('inventory', values.inventory)
    formData.append('discount', values.discount || '0')
    formData.append(
      'categoriesIds',
      JSON.stringify(selectedCategories.map((cat) => cat.value))
    )
    formData.append('parcelAmount', installments.value)
    formData.append(
      'files',
      imageSrc ? dataURLtoFile(imageSrc, getFileName()) : null
    )
    formData.append(
      'files',
      imageSrc1 ? dataURLtoFile(imageSrc1, getFileName()) : null
    )
    formData.append(
      'files',
      imageSrc2 ? dataURLtoFile(imageSrc2, getFileName()) : null
    )

    try {
      await createProduct(formData)

      toast.success('Produto criado com sucesso')

      setAddModal(false)
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

  const handleDeleteCupom = async (code: string) => {
    try {
      await deleteCupom(code)

      notifySuccess('Cupom deletado com sucesso!')
      // setExcludeCupomModal(false)
      loadData()
    } catch (e) {
      notify('Erro ao excluir cupom, tente novamente!')
      console.error(e)
    }
  }

  const handleUpdateProduct: SubmitHandler<CreateProductFormData> = async (
    values
  ) => {
    const body = {
      title: values.title,
      price: formatToNumber(values.price),
      description: productEditValue,
      inventory: Number(values.inventory || '0'),
      discount: Number(values.discount),
      categoriesIds: selectedCategories.map((cat) => cat.value),
      files: [imageSrc, imageSrc1, imageSrc2],
      parcelAmount: Number(installments.value)
    }

    console.log(body)

    try {
      await updateProduct(editProductId, body)

      notifySuccess('Produto atualizado com sucesso!')
    } catch (e) {
      console.error(e)

      notify('Erro ao editar produto, tente novamente!')
    }

    setEditProductId('')
    setSelectedCategories([])
    loadData()
    setEditProduct(false)
  }

  // Request Back-End

  const loadData = async () => {
    try {
      const { data } = await getProducts(storeId)
      console.log(data)
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

    try {
      const { data } = await getCupom()

      setCupons(data)
    } catch (e) {
      notify('Erro ao buscar cupons')
    }
  }

  const [radioSelected, setRadioSelected] = useState(1)
  const [ilimitedCupom, setIlimitedCupom] = useState(false)

  const [priceWithDiscount, setPriceWithDiscount] = useState(formatToBrl(0))

  const updatePriceWithDiscount = () => {
    const values = Array.from(getValues(['price', 'discount']))
    const price = formatToNumber(values[0])
    const discount = Number(values[1])
    const newPrice = price - price * (discount / 100)
    setPriceWithDiscount(formatToBrl(newPrice < 0 ? 0 : newPrice))
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
        showCloseButton={false}
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

            <Button title="Salvar" onClick={() => handleCreateCategory()} />
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
                flex={0}
                icon={<FiBox />}
                placeholder="Nome do produto"
                {...register('title')}
              />

              <TextArea
                label="Descrição do produto"
                maxLength={600}
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                flex={0}
                {...register('description')}
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
                  disabled={!enableDiscount}
                  icon={<FaPercentage />}
                  mask="number"
                  placeholder="0.0%"
                  {...register('discount')}
                />

                <div className="arrows" onClick={updatePriceWithDiscount}>
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>

                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  disabled
                  icon={<FaMoneyBill />}
                  value={priceWithDiscount}
                  placeholder="R$ 0"
                />
              </div>

              <Checkbox
                confirm={enableDiscount}
                toggleConfirm={() => {
                  setEnableDiscount(!enableDiscount)
                }}
                label="Desconto"
              />
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
                creatable={true}
                formatCreateLabel={(inputValue) =>
                  `➕ Criar categoria "${inputValue}"`
                }
                onCreateOption={handleCreateCategory}
              />
              <span className="text-categories-added">
                Categorias adicionadas: {selectedCategories.length}
              </span>

              <div>
                <h2>Fotos do produto</h2>

                <div className="array-fotos">
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
                </div>
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <Button title="Voltar" border onClick={toggleAddModal} />

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
          <h1 className="titulo-cadastro">Editar Produto</h1>
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
                name="description"
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                flex={0}
                {...register('description')}
                value={productEditValue}
                onChange={(e) => setProductEditValue(e.target.value)}
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
                />
              </div>

              <div className="desconto">
                <Input
                  label="Desconto"
                  disabled={!enableDiscount}
                  icon={<FaPercentage />}
                  mask="number"
                  placeholder="0.0%"
                  {...register('discount')}
                />

                <div className="arrows" onClick={updatePriceWithDiscount}>
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>

                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  value={priceWithDiscount}
                  disabled
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                />
              </div>

              <Checkbox
                confirm={enableDiscount}
                toggleConfirm={() => {
                  setEnableDiscount(!enableDiscount)
                }}
                label="Desconto"
              />
            </div>

            <div className="right-area">
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

              <div>
                <h2>Fotos do produto</h2>

                <div className="array-fotos">
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
                </div>
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

      {/* Add Cupom */}
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
                  <input
                    type="radio"
                    name="type"
                    value="1"
                    id="real"
                    checked={radioSelected === 1}
                    onClick={() => setRadioSelected(1)}
                  />
                  <label htmlFor="all">Real</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="type"
                    value="2"
                    id="perc"
                    checked={radioSelected === 2}
                    onClick={() => setRadioSelected(2)}
                  />
                  <label htmlFor="cat">Porcentagem</label>
                </div>
              </div>

              <Input
                label="Valor do desconto"
                icon={<FaMoneyBill />}
                placeholder={radioSelected === 1 ? 'R$ 0' : '0 %'}
                mask={radioSelected === 1 ? 'monetary' : 'number'}
                value={discountPorcent}
                onChange={(e) => setDiscountPorcent(e.target.value)}
              />

              <div className="row">
                <Input
                  label="Validade"
                  placeholder={String(futureDate)}
                  mask="date"
                  value={validate}
                  onChange={(e) => setValidate(e.target.value)}
                />

                <Input
                  label="N° de cupons"
                  placeholder="0"
                  mask="number"
                  disabled={ilimitedCupom}
                  style={ilimitedCupom ? { cursor: 'default' } : undefined}
                  value={maxUsage}
                  onChange={(e) => setMaxUsage(e.target.value)}
                />
              </div>

              <div className="radio-area">
                <input
                  type="checkbox"
                  name="type"
                  value="1"
                  id="ilim"
                  onClick={() => setIlimitedCupom(true)}
                />
                <label htmlFor="ilim">Cupons ilimitados</label>
              </div>

              <div className="row">
                <Input
                  label="Nome do cupom"
                  placeholder="Nome do cupom  "
                  value={cupomCode}
                  onChange={(e) => setCupomCode(e.target.value)}
                />
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
                  <input type="radio" name="type_discount" value="1" id="cat" />
                  <label htmlFor="cat">Categoria</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="type_discount" value="2" id="all" />
                  <label htmlFor="all">Toda a loja</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="type_discount"
                    value="3"
                    id="first"
                  />
                  <label htmlFor="first">Primeira compra</label>
                </div>
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
              <span className="text-categories-added">
                Categorias adicionadas: {selectedCategories.length}
              </span>

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
              onClick={() => {
                toggleAddCupomModal()
              }}
              type="submit"
            />

            <Button title="Salvar" type="button" onClick={handleCreateCupom} />
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
        <DrawerLateral greenOption={4} />

        <div className="area">
          <div className="list-container">
            <header className="header">
              <a href="/">
                <h1>
                  <FiArrowLeft size={32} color="var(--gray-700)" /> Produtos
                </h1>
              </a>

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
                  icon={<FiSearch size={22} color="var(--black-800)" />}
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
                    {products.length ? (
                      products.map((product) => (
                        <ProductListCard
                          key={product?.id}
                          icon={product?.files?.shift()?.url}
                          name={product?.title}
                          code={product?.id}
                          category={product?.categories}
                          amount={product?.inventory}
                          price={product?.price}
                          excludeBtn={() => {
                            handleOpenExcludeModal()
                            setDeleteProductId(product.id)
                          }}
                          editBtn={() => {
                            setEditProductId(product.id)
                            setEditProduct(true)
                            editProductSelected(product)
                          }}
                          isRed={true}
                          isGreen={true}
                        />
                      ))
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
                          excludeBtn={() => {
                            handleDeleteCupom(it.code)
                          }}
                        />
                      ))
                    ) : (
                      <EmptyContainer>
                        <div>
                          <img src="/images/emptyCategories.svg" />
                          <p>Nenhum cupom cadastrado</p>
                          <Button
                            title="Cadastrar"
                            onClick={toggleAddCupomModal}
                          />
                        </div>
                      </EmptyContainer>
                    )}
                  </div>
                }
              />
            </main>
          </div>
        </div>

        <DrawerBottom greenOption={4} />
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
