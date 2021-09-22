import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
  }

  :root {
    --white: #FFFFFF;
    --background: #FEFAEF;
    --black-1000: #000000;
    --black-800: #363F4E;
    --black-500: #55637b;

    --red: #FF4D4B;

    --gray-100: #F2F4F3;
    --gray-200: #C4C4C4;
    --gray-300: #B2B5BA;
    --gray-600: #6B7079;
    --gray-700: #363F4E;
    --yellow-600: #F7EAD5;

    --green-confirmation: #2DD1AC;
    --green-confirmation-darker: #24a78a;
    --green-primary-dark: #01AC8A;

    --blue-primary: #3C8EFC;
    --blue-dark: #2A78E1;

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
  
  p {
    color: var(--gray-600);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
