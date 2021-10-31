import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getProducts, getStoreId } from '../../services/bussiness.services';
import { createCategory, createProduct } from "../../services/products.services";

import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus, FiSearch } from "react-icons/fi";
import { IoIosClose, IoMdCamera } from "react-icons/io";
import { FaMoneyBill, FaPercentage, FaCoins } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import {
  MdUpload,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { Button } from "../../components/atoms/Button";
import CatalogTabs from "../../components/molecules/CatalogTabs";
import { CategoryListCard } from "../../components/molecules/CategoryListCard";
import CustomModal from "../../components/molecules/CustomModal";
import DrawerLateral from "../../components/molecules/DrawerLateral";
import { Input } from "../../components/molecules/Input";
import { ProductListCard } from "../../components/molecules/ProductListCard";
import { TextArea } from "../../components/molecules/TextArea";
import { 
  AddCategoryModalContainer,
  AddProductModalContainer, 
  Container, 
  EditCategoryModalContainer, 
  ExcludeModalContainer 
} from "../../styles/pages/Catalog";
import Head from "next/head";
import { useRouter } from "next/router";

type ProductType = {
  avgStars: number;
  createdAt: string;
  deletedAt: string;
  description: string;
  discount: any;
  files: [string];
  id: string
  inventory: number
  lastSold: any
  price: number;
  sumFeedbacks: number;
  sumOrders: number;
  sumStars: number;
  tags: any
  title: string;
  updatedAt: string;
}

const catalog = () => {
  const [excludeModal, setExcludeModal] = useState(false);
  const [confirmExclude, setConfirmExclude] = useState(false);

  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const [addModal, setAddModal] = useState(false);
  const [addCategoryModal, setCategoryAddModal] = useState(false);

  const [category, setCategory] = useState('')
  const [products, setProducts] = useState<ProductType[]>([])
  const [titleProduct, setTitleProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const [inventoryProduct, setInventoryProduct] = useState('')
  const [storeId, setStoreId] = useState('')
  const [toggleState, setToggleState] = useState(1);

  const router = useRouter();
  const { id } = router.query;

  const loadData = async () => {
    let store = ''

    try {
      store = await getStoreId(String(id || ''));
      setStoreId(store)
    } catch(e) {
      toast.error("Erro ao buscar loja", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    try {
      const { data } = await getProducts(store)

      console.log(data);
      
      setProducts(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if(id) loadData()
  }, [id]);

  // Modal de adição de categoria
  
  function toggleAddCategoryModal() {
    setCategoryAddModal(!addCategoryModal);
  }

  // Modal de adição de produtos

  function handleOpenAddModal() {
    setAddModal(true);
  }
  
  function toggleAddModal() {
    setAddModal(!addModal);
  }
  
  // Modal de exclusao produtos

  function handleOpenExcludeModal() {
    setIsCategory(false);
    setExcludeModal(true);
  }

  function toggleExcludeModal() {
    setExcludeModal(!excludeModal);
  }

  function handleContinueExcludeModal() {
    setConfirmExclude(!confirmExclude);
  }

  // Modal de edição de categoria

  function handleOpenEditCategoryModal() {
    setEditCategoryModal(true);
  }

  function toggleEditCategoryModal() {
    setEditCategoryModal(!editCategoryModal);
  }

  // Modal de exclusao categoria

  function handleOpenCategoryExcludeModal() {
    setIsCategory(true);
    setExcludeModal(true);
  }

  async function handleCreateCategory() { 
    try {
      await createCategory(category)

      toast.success("Categoria criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setCategory('')
      toggleAddCategoryModal()
    } catch (e) {
      console.error(e);

      toast.error("Erro ao criar categoria", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  async function handleCreateProduct() {
    const body = {
      title: titleProduct,
      price: Number(priceProduct),
      description: descriptionProduct,
      inventory: Number(inventoryProduct || '0')  
    }

    try {
      await createProduct({ data: body });

      toast.success("Produto criado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setAddModal(false)
      setTitleProduct('')
      setPriceProduct('')
      setDescriptionProduct('')
      setInventoryProduct('')
    } catch(e) {
      console.error(e);

      if(e.status == 401) {
        return toast.error("Usuário deslogado, faça o seu login para prosseguir", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      toast.error("Erro ao criar produto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    loadData()
  }

  return (
    <>
      <Head>
        <title> Catálogo | Último </title>
      </Head>

      <Container>
        {/* ExcludeModal */}
        <CustomModal
          buttons={false}
          setModalOpen={toggleExcludeModal}
          modalVisible={excludeModal}
        >
          {isCategory ? (
            <>
              <ExcludeModalContainer>
                {confirmExclude ? (
                  <>
                    <div className="icon">
                      <IoTrashBinOutline size={120} color="#FF4D4B" />
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
                      Realmente deseja excluir <strong>definitivamente</strong>{" "}
                      essa categoria?
                    </h1>

                    <div className="btn-container">
                      <button
                        onClick={() => setConfirmExclude(true)}
                        className="exclude-btn"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={toggleExcludeModal}
                        className="cancel-btn"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
              </ExcludeModalContainer>
            </>
          ) : (
            <>
              <ExcludeModalContainer>
                {confirmExclude ? (
                  <>
                    <div className="icon">
                      <IoTrashBinOutline size={120} color="#FF4D4B" />
                    </div>
                    <h1 className="desc">Produto excluído com sucesso!</h1>
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
                      Realmente deseja excluir <strong>definitivamente</strong>{" "}
                      esse produto?
                    </h1>

                    <div className="btn-container">
                      <button
                        onClick={() => setConfirmExclude(true)}
                        className="exclude-btn"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={toggleExcludeModal}
                        className="cancel-btn"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
              </ExcludeModalContainer>
            </>
          )}
        </CustomModal>

        {/* Add modal category */}
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
                color={"black"}
              />
            </div>
            
            <div className="inputContainer">
              <Input 
                value={category} 
                onChange={e => setCategory(e.target.value)}
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

              <Button 
                title="Salvar" 
                onClick={handleCreateCategory}
              />
            </div>
          </AddCategoryModalContainer>
        </CustomModal>

        {/* EditCategoryModal */}
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
                color={"black"}
              />
            </div>
            <div className="category-container">
              <Input
                label="Nome da categoria"
                placeholder="Categoria"
                icon={<FiSearch size={20} color="var(--black-800)" />}
              ></Input>
            </div>
            <div className="category-btn-container">
              <button>Confirmar</button>
            </div>
          </EditCategoryModalContainer>
        </CustomModal>

        {/* Modal de add produto */}
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
                  onChange={e => setTitleProduct(e.target.value)}
                />

                <TextArea
                  label="Descrição do produto"
                  maxLength={600}
                  placeholder="Descrição"
                  icon={<GiHamburgerMenu />}
                  value={descriptionProduct}
                  onChange={e => setDescriptionProduct(e.target.value)}
                />

                <Input
                  label="Preço"
                  icon={<FaMoneyBill />}
                  placeholder="R$ 0"
                  value={priceProduct}
                  onChange={e => setPriceProduct(e.target.value)}
                />

                <div className="desconto">
                  <Input
                    label="Desconto"
                    icon={<FaPercentage />}
                    placeholder="0.0%"
                  />
                  <div className="arrows">
                    <GoArrowRight size={20} />
                    <GoArrowLeft size={20} className="left-arrow" />
                  </div>
                  <Input
                    label="Preço com desconto"
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
                  value={inventoryProduct}
                  onChange={e => setInventoryProduct                                                                                  (e.target.value)}
                />

                <Input
                  label="Categoria"
                  icon={<VscSearch />}
                  placeholder="Categoria"
                />
                <h3>{"Categorias adicionadas: " + 0}</h3>

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

              <Button 
                title="Salvar" 
                onClick={handleCreateProduct}
              />
            </div>
          </AddProductModalContainer>
        </CustomModal>

        <DrawerLateral activated={true} greenOption={4} />

        <div className="list-container">
          <header className="header">
            <button className="addBtn" onClick={ toggleState == 1 ? handleOpenAddModal: toggleAddCategoryModal }>
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
                        key={product?.id + "-" + index}
                        icon=''
                        name={product?.title}
                        code={product?.id}
                        category={product?.tags}
                        amount={product?.inventory}
                        price={product?.price}
                        excludeBtn={handleOpenExcludeModal}
                        editBtn={() => {}}
                        isRed={true}
                        isGreen={true}
                      />
                    );
                  })}
                </div>
              }
              content2={
                <div className="categories-container">
                  {[].map((product, index) => {
                    return (
                      <CategoryListCard
                        key={product.id + "-" + index}
                        date={product.data.map((data) => ({
                          name: data.name,
                          amount: data.amount,
                        }))}
                        category={product.category}
                        excludeBtn={handleOpenCategoryExcludeModal}
                        editBtn={handleOpenEditCategoryModal}
                        isGreen={true}
                        isRed={true}
                      />
                    );
                  })}
                </div>
              }
            />
          </main>
        </div>
      </Container>
    </>
  );
};

export default catalog;
