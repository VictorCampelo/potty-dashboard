import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 940px;

    background: white;
    border-radius: 0 0 30px 30px;
  }

  .bloc-tabs {
    display: flex;
    width: 500px;

    margin-left: 30px;
  }

  .tabs {
    padding: 15px;

    text-align: center;
    width: 50%;

    background: white;
    cursor: pointer;

    box-sizing: content-box;
    position: relative;
    outline: none;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;

    color: var(--gray-300);

    transition: all 0.2s ease-in-out;
  }

  .active-tabs {
    background: white;
    color: var(--gray-700);
  }

  .active-tabs::before {
    content: "";

    display: block;
    position: absolute;

    bottom: 10px;
    left: 50%;

    transform: translateX(-50%);
    width: calc(150px + 2px);

    height: 5px;

    background: rgb(88, 147, 241);
    border-radius: 2px;
  }

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
  }

  .content {
    background: white;
    width: 100%;
    height: 100%;
    display: none;
  }

  .active-content {
    display: block;
  }
`;