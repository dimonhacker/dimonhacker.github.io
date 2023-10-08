import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Fira Code, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.background}
  }
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url("../fonts/Fira_Code/FiraCode-VariableFont_wght.ttf");
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    background-color: unset;
    border:none;
  }
`