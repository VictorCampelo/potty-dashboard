import React, { useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  getCategories,
  getProducts,
  getStoreId
} from '../../services/bussiness.services'
import {
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct
} from '../../services/products.services'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { IoIosClose, IoMdCamera } from 'react-icons/io'
import { FaMoneyBill, FaPercentage, FaCoins } from 'react-icons/fa'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import { IoTrashBinOutline } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import { VscSearch } from 'react-icons/vsc'
import {
  MdUpload,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'

import { Button } from '../../components/atoms/Button'
import CatalogTabs from '../../components/molecules/CatalogTabs'
import { CategoryListCard } from '../../components/molecules/CategoryListCard'
import CustomModal from '../../components/molecules/CustomModal'
import DrawerLateral from '../../components/molecules/DrawerLateral'
import { Input } from '../../components/molecules/Input'
import { ProductListCard } from '../../components/molecules/ProductListCard'
import { TextArea } from '../../components/molecules/TextArea'
import {
  AddCategoryModalContainer,
  AddProductModalContainer,
  Container,
  EditCategoryModalContainer,
  ExcludeModalContainer
} from '../../styles/pages/Catalog'
import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'

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
  categories: CategoryType[]
}

interface CatalogType {
  storeId: string;
}

const catalog = ({ storeId }: CatalogType) => {
  const [excludeModal, setExcludeModal] = useState(false)
  const [confirmExclude, setConfirmExclude] = useState(false)

  const [editCategoryModal, setEditCategoryModal] = useState(false)
  const [excludeCategoryModal, setExcludeCategoryModal] = useState(false)

  const [addModal, setAddModal] = useState(false)
  const [addCategoryModal, setCategoryAddModal] = useState(false)

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

  const [toggleState, setToggleState] = useState(1)

  // Modal de adição de categoria
  function toggleAddCategoryModal() {
    setCategoryAddModal(!addCategoryModal)
  }

  // Modal de adição de produtos
  function handleOpenAddModal() {
    setAddModal(true)
  }

  function toggleAddModal() {
    setAddModal(!addModal)
  }

  // Modal de edição de produtos
  function handleOpenEditProduct() {
    setEditProduct(true)
  }

  function toggleEditProduct() {
    setEditProduct(!editProduct)
  }

  // Modal de exclusao produtos

  function handleOpenExcludeModal() {
    setExcludeModal(true)
  }

  function toggleExcludeModal() {
    setExcludeModal(!excludeModal)
  }

  function handleContinueExcludeModal() {
    setConfirmExclude(!confirmExclude)
  }

  // Modal de edição de categoria
  function handleOpenEditCategoryModal() {
    setEditCategoryModal(true)
  }

  // Modal de edição de categoria
  function handleToggleExcludeCategoryModal() {
    setExcludeCategoryModal(!excludeCategoryModal)
  }

  function toggleEditCategoryModal() {
    setEditCategoryModal(!editCategoryModal)
  }

  const notify = useCallback((message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }, [])

  const loadData = async () => {
    try {
      const { data } = await getProducts(storeId)

      const formatedData = data.map((it) => ({
        ...it,
        categories: it.categories.map((cat: CategoryType) => cat.name)
      }))

      setProducts(formatedData)
    } catch (e) {
      console.log(e);
      notify('Erro ao buscar produtos')
    }
    
    try {
      const { data } = await getCategories(storeId)
      
      setCategories(data)
    } catch (e) {
      console.log(e);
      notify('Erro ao buscar categorias')
    }
  }

  const notifySuccess = useCallback((message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }, [])

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

  async function handleCreateProduct() {
    const body = {
      title: titleProduct,
      price: Number(priceProduct.replace('R$ ', '').replaceAll('.', '').replaceAll(',', '.')),
      description: descriptionProduct,
      inventory: Number(inventoryProduct || '0'),
      discount: Number(discountProduct),
    }

    try {
      await createProduct({ data: body })

      toast.success('Produto criado com sucesso', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })

      setAddModal(false)
      setTitleProduct('')
      setPriceProduct('')
      setDescriptionProduct('')
      setInventoryProduct('')
      setDiscountProduct('')
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

      toast.error('Erro ao criar produto', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }

    loadData()
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(deleteProductId)

      notifySuccess('Produto deletado com sucesso!')
      setExcludeModal(false);
      loadData();
    } catch (e) {
      notify('Erro ao excluir produto, tente novamente!')
    }
  }

  const handleUpdateProduct = async () => {
    const body = {
      title: titleProduct,
      price: Number(priceProduct.replace('R$ ', '').replaceAll('.', '').replaceAll(',', '.')),
      description: descriptionProduct,
      inventory: Number(inventoryProduct || '0'),
      discount: Number(discountProduct),
    }

    try {
      await updateProduct(editProductId, body)

      notifySuccess('Produto deletado com sucesso!')
    } catch (e) {
      console.error(e);

      notify('Erro ao editar produto, tente novamente!')
    }

    setTitleProduct('')
    setPriceProduct('')
    setDescriptionProduct('')
    setInventoryProduct('')
    setEditProductId('')
    setDiscountProduct('')
    loadData()
    setEditProduct(false)
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

    loadData();
    setEditCategoryModal(false);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title> Catálogo | Último </title>
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
            Realmente deseja excluir <strong>definitivamente</strong>{' '}
            esse produto?
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
            <button className="cancel-btn">
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
                Realmente deseja excluir <strong>definitivamente</strong>{' '}
                essa categoria?
              </h1>

              <div className="btn-container">
                <button
                  onClick={handleDeleteProduct}
                  className="exclude-btn"
                >
                  Confirmar
                </button>
                <button onClick={() => {
                  toggleExcludeModal()
                  setDeleteProductId('')
                }} className="cancel-btn">
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
              icon={<FiSearch size={20} color="var(--black-800)" />}
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

          <div className="category-btn-container">
            <button onClick={handleUpdateCategory} >
              Confirmar
            </button>
          </div>
        </EditCategoryModalContainer>
      </CustomModal>

      {/* Add produto */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleAddModal}
        modalVisible={addModal}
      >
        <AddProductModalContainer>
          <h1 className="titulo-cadastro">Cadastrar Produto</h1>
          <div className="input-infos">
            <div className="left-area">
              <Input
                label="Nome do produto"
                icon={<FiBox />}
                placeholder="Nome do produto"
                value={titleProduct}
                onChange={(e) => setTitleProduct(e.target.value)}
              />

              <TextArea
                label="Descrição do produto"
                maxLength={600}
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                value={descriptionProduct}
                onChange={(e) => setDescriptionProduct(e.target.value)}
              />

              <Input
                label="Preço"
                icon={<FaMoneyBill />}
                placeholder="R$ 0"
                mask="monetary"
                value={priceProduct}
                onChange={(e) => {
                  setPriceProduct(e.target.value)
                }}
              />

              <div className="desconto">
                <Input
                  label="Desconto"
                  icon={<FaPercentage />}
                  mask="number"
                  placeholder="0.0%"
                  value={discountProduct}
                  onChange={e => setDiscountProduct(e.target.value)}
                />

                <div className="arrows">
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>

                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                />
              </div>
            </div>

            <div className="right-area">
              <Input
                label="Quantidade atual"
                icon={<FaCoins />}
                placeholder="0"
                mask="number"
                value={inventoryProduct}
                onChange={(e) => setInventoryProduct(e.target.value)}
              />

              <Input
                label="Categoria"
                icon={<VscSearch />}
                placeholder="Categoria"
              />
              <h3>{'Categorias adicionadas: ' + 0}</h3>

              <h2>Foto do produto</h2>

              <div className="foto">
                <div className="title-foto">Foto</div>
                <button>
                  Enviar foto
                  <MdUpload size={20} />
                </button>
              </div>

              <div className="array-fotos">
                <MdOutlineArrowBackIosNew />
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
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

            <Button title="Salvar" onClick={handleCreateProduct} />
          </div>
        </AddProductModalContainer>
      </CustomModal>

      {/* Edit product */}
      <CustomModal
        buttons={false}
        setModalOpen={toggleEditProduct}
        modalVisible={editProduct}
      >
        <AddProductModalContainer>
          <h1 className="titulo-cadastro">Editar Produto</h1>
          <div className="input-infos">
            <div className="left-area">
              <Input
                label="Nome do produto"
                icon={<FiBox />}
                placeholder="Nome do produto"
                value={titleProduct}
                onChange={(e) => setTitleProduct(e.target.value)}
              />

              <TextArea
                label="Descrição do produto"
                maxLength={600}
                placeholder="Descrição"
                icon={<GiHamburgerMenu />}
                value={descriptionProduct}
                onChange={(e) => setDescriptionProduct(e.target.value)}
              />

              <Input
                label="Preço"
                icon={<FaMoneyBill />}
                placeholder="R$ 0"
                mask="monetary"
                value={priceProduct}
                onChange={(e) => setPriceProduct(e.target.value)}
                />

              <div className="desconto">
                <Input
                  label="Desconto"
                  icon={<FaPercentage />}
                  placeholder="0.0%"
                  mask="monetary"
                  />
                <div className="arrows">
                  <GoArrowRight size={20} />
                  <GoArrowLeft size={20} className="left-arrow" />
                </div>
                <Input
                  label="Preço com desconto"
                  mask="monetary"
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                />
              </div>
            </div>

            <div className="right-area">
              <Input
                label="Quantidade atual"
                mask="number"
                icon={<FaCoins />}
                placeholder="0"
                value={inventoryProduct}
                onChange={(e) => setInventoryProduct(e.target.value)}
              />

              <Input
                label="Categoria"
                icon={<VscSearch />}
                placeholder="Categoria"
              />
              <h3>{'Categorias adicionadas: ' + 0}</h3>

              <h2>Foto do produto</h2>

              <div className="foto">
                <div className="title-foto">Foto</div>
                <button>
                  Enviar foto
                  <MdUpload size={20} />
                </button>
              </div>

              <div className="array-fotos">
                <MdOutlineArrowBackIosNew />
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
                <div className="card-image">
                  <IoMdCamera size={25} color="#6C7079" />
                </div>
                <MdOutlineArrowForwardIos />
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <Button
              title="Voltar"
              border
              style={{ marginRight: 16 }}
              onClick={toggleEditProduct}
            />

            <Button title="Salvar" onClick={() => handleUpdateProduct()} />
          </div>
        </AddProductModalContainer>
      </CustomModal>

      <Container>
        <DrawerLateral activated={true} greenOption={4} />

        <div className="list-container">
          <header className="header">
            <button
              className="addBtn"
              onClick={
                toggleState == 1 ? handleOpenAddModal : toggleAddCategoryModal
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
              setToggleState={setToggleState}
              toggleState={toggleState}
              content1={
                <div className="products-container">
                  {products.map((product, index) => {
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
                  })}
                </div>
              }
              content2={
                <div className="categories-container">
                  {categories.map((cat, index) => {
                    return (
                      <CategoryListCard
                        key={cat.id + '-' + index}
                        date={products
                          .filter((prd) => prd.categories.includes(cat))
                          .map((data) => ({
                            // ARRUMAR ESSA BUSCA
                            name: data.title,
                            amount: String(data.inventory)
                          }))}
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
                  })}
                </div>
              }
            />
          </main>
        </div>
      </Container>
    </>
  )
}

export default catalog

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const { data } = await apiClient.get("/stores/me");

  return {
    props: {
      storeId: data.id,
    },
  };
});
