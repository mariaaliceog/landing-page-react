import { createGlobalStyle } from "styled-components";
import { device } from './devices';

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

    @media ${device.mobileM} {    
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
      font-family: 'DM Serif Text', sans-serif;
      font-size: 20px;
      font-weight: 500;
    }

    h1 {
      font-family: 'DM Serif Text', sans-serif;
      font-size: 36px;
      font-weight: bold;
    }

    h2 {
      font-family: 'Red Hat Display', sans-serif;
      font-size: 28px;
      font-weight: lighter;
    }

    h3 {
      font-family:'DM Serif Text', sans-serif;
      font-size: 24px;
      font-weight: normal;
    }

    h4 {
      font-family:'Red Hat Display', sans-serif;
      font-size: 20px;
      font-weight: normal;
    }

    h5 {
      font-family:'Red Hat Display', sans-serif;
      font-size: 18px;
      font-weight: normal;
    }
`

export default GlobalStyle;