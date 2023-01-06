import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 6vh;
  color: white;
  display: flex;
  flex-direction: row;

  .firstUL {
    padding-left: 30px;
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 17px;
    justify-content: left;
    align-items: center;
  }
  .secondUL {
    padding-right: 30px;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    text-transform: capitalize;
    font-size: 22px;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 550px) {
    a {
      font-size: 15px;
    }
  }
`;
