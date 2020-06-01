import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *:before, *:after {  
    box-sizing: inherit;
  } 
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    font-family: 'Electrolize', sans-serif;
  }
  
  #root {
    padding: 0;
    width: 100%;
    }

`;

export default GlobalStyle;
