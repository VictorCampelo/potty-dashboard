import styled from "styled-components";

interface ContainerProp {
  isRed: boolean;
  isGreen: boolean;
  isOpen: boolean;
}

export const Container = styled.div<ContainerProp>`
  width: auto;
  max-width: 1050px;

  display: flex;
  align-items: flex-start;

  margin-bottom: 16px;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 22px;

    .card-container {
      width: 808px;
      height: 54px;

      display: flex;
      align-items: center;

      background: #ffffff;
      box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      
      user-select: none;

      cursor: pointer;

      .icon-btn {
        ${(props) => props.isOpen && "transform: rotate(180deg);"}
        transition: 0.4s;
        margin: 16px 23px;
      }

      .title {
        font-family: "Poppins";
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

      display: none;
      ${(props) => props.isOpen && "display: block;"}

      align-items: center;

      margin-top: 15px;
      
      .items {
        width: 767px;
        height: 29px;

        display: flex;
        align-items: center;

        background: #ebf3fe;
        border-radius: 30px;

        font-family: "Poppins";
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
    width: 99px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 15px;

    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;

    &:first-child {
      margin-right: 16px;
    }
  }

  .edit-btn {
    ${(props) => props.isGreen && "color: #2DD1AC;"}
  }

  .close-btn {
    ${(props) => props.isRed && "color: #FF4D4B;"}
  }
`;
