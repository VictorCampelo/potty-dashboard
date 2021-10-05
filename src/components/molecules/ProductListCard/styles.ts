import styled from "styled-components";

interface ContainerProp {
  isRed: boolean;
  isGreen: boolean;
}

export const Container = styled.div<ContainerProp>`
  width: auto;
  max-width: 1050px;
  height: 76px;

  display: flex;
  align-items: center;

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon {
      width: 60px;
      height: 60px;

      border-radius: 5px;

      margin-right: 55px;
    }

    .desc-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 76px;
      border-radius: 0;

      tr {
        display: flex;
        flex-direction: row;
      }

      .title {
        width: 86px;
        height: 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 55px;
        margin-bottom: 3px;

        background: rgba(216, 217, 221, 0.48);

        font-family: "Poppins";
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #6c7079;
      }

      .children {
        width: 86px;
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 55px;

        font-family: "Poppins";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #363F4E;
      }
    }

    button {
      width: 99px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 15px;

      background: #FFFFFF;
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
      ${props => props.isGreen && "color: #2DD1AC;"}
    }

    .close-btn {
      ${props => props.isRed && "color: #FF4D4B;"}
    }

  }
`;
