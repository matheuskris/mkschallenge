import Image from "next/image";
import { LogoContainer, NavContainer, CartContainer } from "./styles";
import CartIcon from "../../../public/shoppingCartIcon.svg";
import CartMenu from "../CartMenu";
import { selectCartTotalItems } from "@/store/cartSlice/cart.selector";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const total = useSelector(selectCartTotalItems);

  return (
    <NavContainer>
      <LogoContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </LogoContainer>
      <CartContainer onClick={() => setIsMenuOpen(true)}>
        <Image width={19} height={18} src={CartIcon} alt="cart svg" />
        <span>{total}</span>
      </CartContainer>
      <CartMenu isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
    </NavContainer>
  );
}
