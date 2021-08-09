import styled from "styled-components";

const PageHome = styled.div`
    width: 100vw;
    heigth: 100vh;
    background: #FEFAEF;
`; 

const Header = styled.header`
    width: 100%;
    heigth: 50px;
  color: blue;
`;

const IndexLayout = ({ children }: { children: any }) => {
  return (
    <>
      {/*<GlobalStyle />*/}
      <PageHome/>

      {children}
    </>
  );
};

export default IndexLayout;