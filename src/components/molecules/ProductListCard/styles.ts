import styled from 'styled-components'

interface ContainerProp {
  isRed: boolean
  isGreen: boolean
}

export const Container = styled.div<ContainerProp>`
  width: auto;
  max-width: 1050px;
  height: 76px;

  display: flex;
  align-items: center;

  margin-bottom: 16px;

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .color {
      width: 810px;
      height: 76px;

      display: flex;
      flex-direction: row;
      align-items: center;

      background: rgba(216, 217, 221, 0.28);
      border-radius: 8px;

      margin-right: 25px;

      .icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 0;

        border-radius: 5px;

        margin-left: 10px;
        margin-right: 10px;
        background-color: white;
      }

      .desc-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: auto;
        height: 76px;
        border-radius: 0;

        padding-right: 50px;

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

          margin-left: 50px;
          margin-bottom: 3px;

          background: rgba(216, 217, 221, 0.48);

          font-family: 'Poppins';
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

          margin-left: 50px;

          font-family: 'Poppins';
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #363f4e;
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

      font-family: 'Poppins';
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;

      &:first-child {
        margin-right: 16px;
      }
    }

    .edit-btn {
      ${(props) => props.isGreen && 'color: #2DD1AC;'}
    }

    .close-btn {
      ${(props) => props.isRed && 'color: #FF4D4B;'}
    }
  }
`
