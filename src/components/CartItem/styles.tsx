import styled from "styled-components";

export const CartItemContainer = styled.li`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 13px 8px 19px 8px;
  border-radius: 8px;
  position: relative;

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 19px 15px 19px 23px;
  }

  .image-container {
    position: relative;
    width: 130px;
    height: 60px;
  }

  h4 {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
  }

  .numbers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px;

    h3 {
      font-size: 14px;
      font-weight: 700;

      background-color: black;
      color: white;
      border-radius: 8px;
      padding: 6px;

      @media (min-width: 600px) {
        background: none;
        color: black;
        border-radius: 8px;
      }
    }

    @media (min-width: 600px) {
      justify-content: center;
      gap: 10px;
    }
  }

  .delete-item-button {
    background: none;
    text-decoration: none;
    border-style: none;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    font-size: 12px;
    font-weight: 400;
    line-height: 17px;

    position: absolute;
    right: 6px;
    top: 6px;
    z-index: 4;
    scale: 2.2;

    transition: all 200ms;

    cursor: pointer;
    &:hover {
      scale: 1.1;
    }

    @media (min-width: 600px) {
      right: -9px;
      top: -9px;
      scale: 1;
      background-color: black;
      color: white;
    }
  }
`;

export const ChangeButtonsContainer = styled.div`
  width: 50px;
  scale: 1.4;

  p {
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 2px;
    display: none;

    @media (min-width: 600px) {
      display: flex;
    }
  }

  @media (min-width: 600px) {
    transform: translateY(-4px);
    scale: 1;
  }

  div {
    border: 1px solid hsla(0, 0%, 75%, 1);
    border-radius: 4px;
    width: 100%;
    height: 19px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    span {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-size: 8px;
      font-weight: 400;

      &:not(:nth-of-type(2)) {
        cursor: pointer;
      }
      &:not(:last-of-type) {
        border-right: 1px solid hsla(0, 0%, 75%, 1);
      }
    }
  }
`;
