import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  max-width: 900px;
  height: 130px;
  background-color: white;
  display: flex;
  border: none;
  border-radius: 10px;
  .img {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 70px;
    height: 70px;
    max-width: 100%;
    border-radius: 50%;
  }
  .descricao {
    padding: 0px 4px;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    h4 {
      width: 100%;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 16px;
    }
  }
  
`;
