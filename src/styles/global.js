import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Kalam', cursive;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    color: black;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button,
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
