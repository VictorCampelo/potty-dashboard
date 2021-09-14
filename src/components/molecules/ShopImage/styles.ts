import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  .imageContainer {
    width: 132px;
    height: 132px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: var(--white);
    background-color: var(--green-confirmation);
    .image {
      border-radius: 50%;
    }
  }
  .imageBtn {
      position: relative;
      left: 30px;
      bottom: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 41px;
      height: 41px;

      background-color: #6C7079;

      border-radius: 50%;
      border: 4px solid var(--white);
    }
`