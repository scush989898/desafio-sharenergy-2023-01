import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  form {
    margin-top: 20px;
    width: 100%;
    background-color: white;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    div {
      width: 100%;
    }
  }
  ul {
    overflow-y: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    height: 75%;
    width: 95%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  ul::-webkit-scrollbar{
    display: none;
  }


`;
