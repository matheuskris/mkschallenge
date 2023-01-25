import { CartContainer, CloseButton } from "./styles";
import CartItem from "../CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/store/cartSlice/cart.selector";
import { Dispatch, SetStateAction } from "react";

type CartMenuProps = {
  isOpen: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CartMenu({ isOpen, setMenu }: CartMenuProps) {
  const cartItems = useSelector(selectCartItems);

  const totalValue = cartItems.reduce((acc, item) => {
    return acc + item.quantity * Number(item.price);
  }, 0);

  return (
    <CartContainer isOpen={isOpen}>
      <div className="content">
        <header>
          <h2>Carrinho de compras</h2>
          <CloseButton onClick={() => setMenu(false)}>X</CloseButton>
        </header>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })
          ) : (
            <p className="empty-message">Seu carrinho está vazio</p>
          )}
        </ul>
        <div className="total">
          <h3>Total</h3>
          <h3>R${totalValue.toFixed()}</h3>
        </div>
      </div>
      <button className="finishCartButton"> Finalizar Compra </button>
    </CartContainer>
  );
}
