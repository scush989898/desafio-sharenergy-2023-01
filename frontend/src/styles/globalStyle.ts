import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  font-style: normal;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
  margin: 0;
  padding: 0;
}


#root {
  width: 100vw;
  height:100vh;
}

.App {
  width: 100vw;
  height: 100vh;
}

li{
  list-style-type: none;
}
body::-webkit-scrollbar{
    display: none;
  }
button {
  cursor: pointer;
}
button:disabled{
  cursor: not-allowed;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;
