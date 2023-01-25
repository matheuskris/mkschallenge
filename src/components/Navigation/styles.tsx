import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  background-color: hsla(216, 85%, 39%, 1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;

  @media (min-width: 400px) {
    height: 101px;
    padding-inline: 65px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 40px;
  }
  span {
    color: white;
    font-size: 20px;
    font-weight: 300;
    transform: translateY(4px);
  }
`;

export const CartContainer = styled.div`
  padding: 11px 12px 12px 14px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  cursor: pointer;

  img {
    transform: rotate(0deg);
    transition: transform 200ms;
  }

  span {
    font-weight: 700;
    font-size: 18px;
  }

  &:hover {
    img {
      transform: rotate(-90deg);
    }
  }
`;
