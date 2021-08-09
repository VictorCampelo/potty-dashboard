import styled from "styled-components";
import BasicLayout from "../layout/GlobalStyle";
//import IndexLayout from "../styles/pages";
import Header from "../components/molecules/Header";
import GlobalStyle from "../layout/GlobalStyle";

const Home = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
    </div>
  );
};

export default Home;