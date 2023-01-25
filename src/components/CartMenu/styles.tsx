import styled from "styled-components";

type CartContProps = {
  isOpen: boolean;
};

export const CartContainer = styled.div<CartContProps>`
  height: 100vh;
  width: 90vw;
  background-color: hsla(216, 85%, 39%, 1);

  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  display: flex;
  flex-direction: column;

  transition: all 200ms;
  transform: ${({ isOpen }) => (isOpen ? "" : "translateX(486px)")};

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 36px 22px 0 47px;

      h2 {
        color: white;
        font-weight: 700;
        font-size: 27px;
      }
    }
    ul {
      margin-top: 10px;
      padding: 20px 40px 0 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-height: 390px;

      overflow-y: scroll;

      @media (min-width: 600px) {
        max-height: 410px;
        padding: 20px 60px 0 47px;
      }

      .empty-message {
        margin-top: 30px;
        align-self: center;
        color: white;
        font-size: 18px;
      }
    }
    div.total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: white;
      font-size: 28px;
      font-weight: 700;

      margin-top: auto;
      padding: 20px 20px 26px 20px;

      @media (min-width: 600px) {
        padding: 20px 63px 26px 47px;
      }
    }
  }

  button.finishCartButton {
    background-color: black;
    width: 100%;
    height: 97px;
    margin-top: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-weight: 700;
    font-size: 28px;

    cursor: pointer;
    &:hover {
      background-color: hsl(0, 0%, 20%);
    }
  }

  @media (min-width: 600px) {
    width: 486px;
  }
`;

export const CloseButton = styled.button`
  background-color: black;
  color: white;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  font-size: 28px;
  font-weight: 400;

  cursor: pointer;

  &:hover {
    scale: 1.07;
  }
`;
