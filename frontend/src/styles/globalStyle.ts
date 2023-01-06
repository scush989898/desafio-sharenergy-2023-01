import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  font-style: normal;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
  margin: 0;
  padding: 0;
}


body{
  background-color: #121214;
}
#root {
  /* width: 100%;
  height:100%; */
  width: 100vw;
  height:100vh;
}

.App {
  color: white;
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  /* justify-content: center; */
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
