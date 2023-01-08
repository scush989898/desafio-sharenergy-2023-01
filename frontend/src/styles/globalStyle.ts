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
  color: white;
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
`;
