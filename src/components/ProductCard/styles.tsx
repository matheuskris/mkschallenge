import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 218px;
  height: 285px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    padding: 18px 14px 0px 12px;
    align-items: center;

    p {
      font-size: 10px;
      font-weight: 300;
    }
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
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms;

    :hover {
      background-color: hsl(216, 85%, 30%);
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  margin-inline: auto;
  height: 138px;
  width: 80%;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  gap: 1px;

  h2 {
    font-weight: 400;
    font-size: 16px;
  }
  h3 {
    background-color: black;
    color: white;
    padding: 4px 6px 4px 7px;
    border-radius: 5px;

    font-size: 15px;
    font-weight: 700;
  }
`;
