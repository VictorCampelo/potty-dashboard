import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --background: #FEFAEF;
    --black-1000: #000000;
    --black-800: #363F4E;

    --red: #FF4D4B;

    --gray-100: #F2F4F3;
    --gray-200: #C4C4C4;

    --yellow-600: #F7EAD5;
    --green-confirmation: #2DD1AC;

    --wave-1: #F9EFDC;
    --wave-2: #F5E7CD;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
    color: var(--black-800);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
