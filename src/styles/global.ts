import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 93.75%;
    }

    @media (max-width: 1000px) {
      font-size: 87.5%;
    }

    @media (max-width: 800px) {
      font-size: 81.25%;
    }

    @media (max-width: 600px) {
      font-size: 75%;
    }
  }

    button {
      background-color: none;
      border: none;
      outline: none;
    }

    a {
      text-decoration: none;
      color: inherit;
      outline: none;
    }

    body {
      height: 100vh;
      font-family: 'Lexend', sans-serif;
      font-size: 16px;
    }

    h1 {
      font-family: 'Lexend', sans-serif;
      font-size: 36px;
      font-weight: normal;
    }

    h2 {
      font-family: 'Lexend', sans-serif;
      font-size: 24px;
      font-weight: lighter;
    }

    h3 {
      font-family: 'Lexend', sans-serif;
      font-size: 28px;
      font-weight: normal;
    }
`

export default GlobalStyle;