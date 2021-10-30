import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getProducts } from '../../services/bussiness.services';
import { createProduct } from "../../services/products.services";

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
  AddProductModalContainer, 
  Container, 
  EditCategoryModalContainer, 
  ExcludeModalContainer 
} from "../../styles/pages/Catalog";
import Head from "next/head";

const catalog = () => {
  const [excludeModal, setExcludeModal] = useState(false);
  const [confirmExclude, setConfirmExclude] = useState(false);

  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const [addModal, setAddModal] = useState(false);
  const [contCateg, setContCateg] = useState(0);

  const [products, setProducts] = useState({})
  const [titleProduct, setTitleProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const [inventoryProduct, setInventoryProduct] = useState('')

  const loadData = async () => {
    try {
      const productsData = await getProducts("7e5608a9-becd-43ef-b417-22b8f0dc498f")

      setProducts(productsData)

    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadData()
  }, []);

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

  async function handleCreateProduct() {
    const body = {
      title: titleProduct,
      price: priceProduct,
      description: descriptionProduct,
      inventory: Number(inventoryProduct || '0')
    }

    try {
      await createProduct(body);

      toast.success("Produto criado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch(e) {
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
                  label="Descição do produto"
                  maxLength={600}
                  placeholder="Descricao"
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
                <h3>{"Categorias adicionadas: " + contCateg}</h3>

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
            <button className="addBtn" onClick={handleOpenAddModal}>
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
              content1={
                <div className="products-container">
                  {[].map((product, index) => {
                    return (
                      <ProductListCard
                        key={product.id + "-" + index}
                        icon={product.icon}
                        name={product.name}
                        code={product.code}
                        category={product.category}
                        amount={product.amount}
                        price={product.price}
                        excludeBtn={handleOpenExcludeModal}
                        editBtn={2}
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
