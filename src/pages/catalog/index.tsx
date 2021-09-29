import { FiPlus, FiSearch } from "react-icons/fi";
import CatalogTabs from "../../components/molecules/CatalogTabs";

import DrawerLateral from "../../components/molecules/DrawerLateral";
import { Input } from "../../components/molecules/Input";

import { Container } from "./styles";

const catalog = () => {
  return (
    <>
      <Container>
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
                  <h1>Produtos</h1>
                </div>
              }
              content2={
                <div className="categories-container">
                  <h1>Categorias</h1>
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
