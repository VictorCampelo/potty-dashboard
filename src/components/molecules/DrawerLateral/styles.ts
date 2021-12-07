import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  height: 100%;
  padding: 20px;
  z-index: 1;

  .showNames {
    width: 13vw;
    height: 100%;

    border-radius: 30px;
    background: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    nav {
      width: 100%;
      height: 70%;
      //background-color: lightblue;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .option {
        width: 70%;
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          width: 1.2rem;
          height: 1.2rem;
          margin-bottom: 0.2rem;
        }

        a {
          margin-left: 10px;
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 0.9rem;

          color: #363f4e;
        }

        .red-option {
          margin-left: 10px;
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 0.9rem;

          color: var(--red);
        }
      }
    }
  }

  .noShowNames {
    width: 70px;
    height: 100%;

    border-radius: 30px;
    background: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.3s ease-in-out;

    nav {
      width: 100%;
      height: 70%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .option {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          width: 1.2rem;
          height: 1.2rem;
          margin-bottom: 0.2rem;
        }

        a {
          overflow: hidden;
          height: 0;
          width: 0;
          opacity: 0;
          transition: all 0.3s ease-in-out;
          margin-left: 0px;
        }

        .red-option {
          margin-left: 0px;
          overflow: hidden;
          height: 0;
          width: 0;
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`

type ResizeProps = {
  active: boolean
}

export const ResizeContainer = styled.div<ResizeProps>`
  width: 100%;
  height: 49px;

  display: flex;
  justify-content: flex-end;

  .resbtn {
    width: 50px;
    border-radius: 50px 0 0 50px;
    background: var(--color-primary);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transition: transform 0.5s;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
`
