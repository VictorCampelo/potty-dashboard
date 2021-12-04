import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .imageContainer {
    width: 132px;
    height: 132px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid #fff;

    color: var(--white);
    background-color: var(--color-primary);

    .image {
      width: 132px;
      height: 132px;

      border-radius: 50%;
      object-fit: cover;
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

    background-color: #6c7079;

    border-radius: 50%;
    border: 4px solid var(--white);

    label {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
  }
`
