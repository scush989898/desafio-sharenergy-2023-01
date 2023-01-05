import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 6vh;
  color: white;
  border: 1px solid white;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 15px;
  }
  a{
    text-decoration: none;
    color: rgba(255,255,255,.5);
    text-transform: capitalize;
  }
  a:hover{
    cursor: pointer;
  }
`;
