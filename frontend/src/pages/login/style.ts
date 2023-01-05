import styled from "styled-components";

export const StyledForm = styled.form`
  opacity: 0.9;
  width: 30vw;
  height: 40vh;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px;
  align-items: center;
  justify-content: center;
  div {
    width: 380px;
    max-width: 380px;
  }

  @media (max-width: 1300px) {
    width: 90%;
    min-width: 270px;
    max-width: 600px;
    div {
      width: 100%;
      max-width: 100%;
    }
  }
`;
