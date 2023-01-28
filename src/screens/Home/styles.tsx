import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  margin-block: 100px;
  justify-content: center;
  align-items: flex-start;
  margin-inline: 20px;

  @media (min-width: 420px) {
    margin-inline: 100px;
  }
  @media (min-width: 800px) {
    margin-inline: 200px;
  }
`;
