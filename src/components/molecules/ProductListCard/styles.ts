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

  margin-bottom: var(--spacing-xxxs);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--border-radius-sm);

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .color {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 1000px;
      height: 76px;

      background-color: #F4F5F6;
      border-radius: 8px;

      z-index: 5;

      .icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 0;

        border-radius: var(--border-radius-xxs);

        background-color: var(--white);

        margin-left: var(--spacing-nano);
        margin-right: var(--spacing-nano);
      }

      .desc-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 76px;
        border-radius: 0;

        padding-right: var(--spacing-md);

        tr {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .title {
          display: flex;
          align-items: center;
          text-align: center;

          width: 100px;
          height: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: var(--spacing-md);
          margin-bottom: var(--spacing-quarck);

          background: #E7E8EA;
          border-radius: var(--border-radius-xxs);

          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-light);
          font-size: var(--font-size-xxxxs);
          line-height: 19px;

          color: #6c7079;
        }

        .children {
          display: flex;
          align-items: center;
          text-align: center;

          width: 100px;
          height: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: var(--spacing-md);

          font-family: var(--font-family-primary);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-light);
          font-size: var(--font-size-xxs);

          line-height: 24px;
          color: #363f4e;
        }
      }
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  width: 200px;
  height: 100%;
  border-radius: var(--border-radius-sm);
  margin-left: calc(var(--spacing-xxs) * -1);
  z-index: 4;
  background-color: var(--white);
  padding-left: var(--spacing-xxxs);

  button {
    background: var(--white);
    color: var(--red);
  }

  .edit-btn {
    color: #000;
  }
`
