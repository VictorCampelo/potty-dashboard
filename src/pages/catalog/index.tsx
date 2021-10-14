import { useState } from "react";
import { BsFilePlus } from "react-icons/bs";
import { FiPlus, FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { IoSearch, IoTrashBinOutline } from "react-icons/io5";
import { RiFileSearchFill } from "react-icons/ri";
import { Button } from '../../components/atoms/Button';
import CatalogTabs from "../../components/molecules/CatalogTabs";
import { CategoryListCard } from "../../components/molecules/CategoryListCard";
import CustomModal from "../../components/molecules/CustomModal";

import DrawerLateral from "../../components/molecules/DrawerLateral";
import { Input } from "../../components/molecules/Input";
import { ProductListCard } from "../../components/molecules/ProductListCard";

import { Container, ModalContainer } from "./styles";

const catalog = () => {
  const FakeAPI = [
    {
      id: 1,
      icon: "./images/coffee.png",
      name: "Café preto",
      code: "6932",
      category: "Alimentação",
      amount: "Ilimitada",
      price: "2,00",
    },
    {
      id: 2,
      icon: "./images/coffee1.png",
      name: "Café ouro",
      code: "41241",
      category: "Alimentação",
      amount: "Ilimitada",
      price: "8,00",
    },
    {
      id: 3,
      icon: "./images/coffee1.png",
      name: "Café ouro",
      code: "41241",
      category: "Alimentação",
      amount: "Ilimitada",
      price: "8,00",
    },
    {
      id: 4,
      icon: "./images/coffee2.png",
      name: "Café",
      code: "46124",
      category: "Alimentação",
      amount: "80",
      price: "15,00",
    },
  ];

  const FakeAPI2 = [
    {
      id: 1,
      category: "Cozinha e Decoração",
      data: [
        {
          name: "Refrigerador Brastemp",
          amount: "7",
        },
        {
          name: "Refrigerador Brastemp",
          amount: "2",
        },
      ],
    },
    {
      id: 2,
      category: "Informática",
      data: [
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7213123313123132132132131",
          amount: "2",
        },
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
        {
          name: "Processador Ryzen 7213123313123132132132131",
          amount: "2",
        },
        {
          name: "Processador Ryzen 7213123313123132132132131",
          amount: "2",
        },
        {
          name: "Processador Ryzen 7213123313123132132132131",
          amount: "2",
        },
        {
          name: "Processador Ryzen 7213123313123132132132131",
          amount: "2",
        },
      ],
    },
    {
      id: 3,
      category: "Informática",
      data: [
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
      ],
    },
    {
      id: 4,
      category: "Informática",
      data: [
        {
          name: "Computador Dell",
          amount: "7",
        },
        {
          name: "Processador Ryzen 7",
          amount: "2",
        },
      ],
    },
    // {
    //   id: 3,
    //   category: "Cozinha e Decoração",
    //   name: "Refrigerador Brastemp",
    //   amount: "2",
    // },
    // {
    //   id: 4,
    //   category: "Cozinha e Decoração",
    //   name: "Refrigerador Brastemp",
    //   amount: "15",
    // },
  ];

  const [excludeModal, setExcludeModal] = useState(false);
  const [confirmExclude, setConfirmExclude] = useState(false);

  const [editCategoryModal, setEditCategoryModal] = useState(false);

  const [isCategory, setIsCategory] = useState(false);

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

  // Modal de exclusao categoria

  function handleOpenCategoryExcludeModal() {
    setIsCategory(true);
    setExcludeModal(true);
  }

  // Modal de edição de categoria

  function handleOpenEditCategoryModal() {
    setEditCategoryModal(true);
  }

  function toggleEditCategoryModal() {
    setEditCategoryModal(!editCategoryModal);
  }

  return (
    <>
      <Container>
        <CustomModal
          buttons={false}
          setModalOpen={toggleExcludeModal}
          modalVisible={excludeModal}
        >
          {isCategory ? (
            <>
              <ModalContainer>
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
              </ModalContainer>
            </>
          ) : (
            <>
              <ModalContainer>
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
              </ModalContainer>
            </>
          )}
        </CustomModal>

        <CustomModal
          buttons={false}
          setModalOpen={toggleEditCategoryModal}
          modalVisible={editCategoryModal}
        >
          <ModalContainer>
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
          </ModalContainer>
        </CustomModal>

        <DrawerLateral greenOption={4} />

        <div className="list-container">
          <header className="header">
            <button className="addBtn">
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
                  {FakeAPI.map((product, index) => {
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
                  {FakeAPI2.map((product, index) => {
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
