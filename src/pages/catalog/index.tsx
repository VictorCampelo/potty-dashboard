import { useState } from "react";
import { BsFilePlus } from 'react-icons/bs';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { IoSearch, IoTrashBinOutline } from "react-icons/io5";
import { RiFileSearchFill } from 'react-icons/ri';
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
        }
      ]
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
        }
      ]
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
        }
      ]
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
        }
      ]
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

  const [excludeProductsModal, setExcludeProductsModal] = useState(false);
  const [confirmExcludeProduct, setConfirmExcludeProduct] = useState(false);

  // Modal de exclusao produtos

  function handleOpenExcludeProductsModal() {
    setExcludeProductsModal(true);
  }

  function toggleExcludeProductsModal() {
    setExcludeProductsModal(!excludeProductsModal);
  }

  function handleContinueExcludeProductsModal() {
    setConfirmExcludeProduct(!confirmExcludeProduct);
  }

  return (
    <>
      <Container>
        <CustomModal
          buttons={false}
          setModalOpen={toggleExcludeProductsModal}
          modalVisible={excludeProductsModal}
        >
          <ModalContainer>
            {confirmExcludeProduct ? (
              <>
                <div className="icon">
                  <IoTrashBinOutline size={120} color="#FF4D4B" />
                </div>
                <h1 className="desc">Produto excluído com sucesso!</h1>
                <div className="btn">
                  <button
                    onClick={handleContinueExcludeProductsModal}
                    className="continue-btn"
                  >
                    Continuar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1>
                  Realmente deseja excluir <strong>definitivamente</strong> esse
                  produto?
                </h1>

                <div className="btn-container">
                  <button
                    onClick={() => setConfirmExcludeProduct(true)}
                    className="exclude-btn"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={toggleExcludeProductsModal}
                    className="cancel-btn"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
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
                        excludeBtn={handleOpenExcludeProductsModal}
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
                          amount: data.amount
                        }))}
                        category={product.category}
                        excludeBtn={1}
                        editBtn={2}
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
