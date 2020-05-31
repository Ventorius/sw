import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    font-family: 'Roboto', sans-serif;
    
    h1,h2,h3 {
      font-family: 'Montserrat', sans-serif;
    }
    
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  } 
  
  #root {
    padding: 0;
    width: 100%;
    }
    
    .fullscreen {
      z-index: 4;
    }
`;

export default GlobalStyle;
