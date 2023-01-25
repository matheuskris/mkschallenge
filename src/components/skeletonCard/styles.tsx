import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 218px;
  height: 285px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 18px 14px 0px 12px;
    align-items: center;
  }

  button {
    margin-top: auto;
    width: 100%;
    height: 32px;
    background-color: #0f52ba;
    color: white;
    border: none;
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
