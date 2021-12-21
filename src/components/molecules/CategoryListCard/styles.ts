import styled from 'styled-components'

interface ContainerProp {
  isRed: boolean
  isGreen: boolean
  isOpen: boolean
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  display: flex;
  margin-bottom: 16px;

  .section {
    display: flex;
    flex-direction: column;
    width: 100%;

    .card-container {
      width: 100%;
      height: 68px;
      z-index: 1;

      display: flex;
      align-items: center;

      background: #f4f5f6;
      border-radius: 8px;

      user-select: none;

      cursor: pointer;

      .icon-btn {
        ${(props) => props.isOpen && 'transform: rotate(180deg);'}
        transition: 0.4s;
        margin: 16px 23px;
      }

      .title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;

        display: flex;
        align-items: center;

        color: #000000;
      }
    }

    .children-container {
      width: 767px;
      margin-left: 40px;

      display: none;
      ${(props) => props.isOpen && 'display: block;'}

      align-items: center;

      margin-top: 15px;

      .items {
        width: 767px;
        height: 29px;

        display: flex;
        align-items: center;

        background: #f4f4f4;
        border-radius: 30px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 13px;

        display: flex;
        align-items: center;

        margin-bottom: 11px;

        color: #000000;

        .text {
          width: 170px;
        }

        .spacer {
          width: 5px;
        }
      }

      p {
        padding: 3px 18px;
      }
    }
  }

  button {
    width: 50px;
    height: 45%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 15px;

    background: #ffffff;
    border-radius: 8px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;

    &:first-child {
      margin-right: 16px;
    }

    :hover {
      background: #f4f5f6;
    }
  }

  .edit-btn {
    ${(props) => props.isGreen && 'color: var(--gray-700);'}
  }

  .close-btn {
    ${(props) => props.isRed && 'color: #FF4D4B;'}
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 64px;
    width: 80px;
    padding: 4px;
    background: white;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.15) 0px 0px 3px 0px;
    z-index: 0;
    margin-top: 2px;

    margin-left: -14px;
    padding-left: 20px;
  }
`
