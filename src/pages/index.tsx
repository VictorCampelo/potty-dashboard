import styled from "styled-components";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
  color: blue;
`;

const Home = () => {
  return (
    <BasicLayout>
      <h1>hello</h1>
      <Title>Salve Salve Familia</Title>
    </BasicLayout>
  );
};

export default Home;