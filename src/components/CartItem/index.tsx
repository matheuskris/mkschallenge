import { CartItemContainer, ChangeButtonsContainer } from "./styles";

import {
  addToCart,
  decrementQuantity,
  removeItem,
  CartItemT,
} from "@/store/cartSlice/cartSlicer";
import { useDispatch } from "react-redux";
import Image from "next/image";

type CartItemProps = {
  item: CartItemT;
};

export default function CartItem({ item }: CartItemProps) {
  const { photo, name, price, quantity } = item;
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(item));
  }
  function handleDecrease() {
    dispatch(decrementQuantity(item));
  }
  function handleDelete() {
    dispatch(removeItem(item));
  }

  const itemTotal = Number(price) * quantity;
  return (
    <CartItemContainer>
      <div className="image-container">
        <Image fill src={photo} alt={name} />
      </div>
      <h4>{name}</h4>
      <div className="numbers">
        <ChangeButtonsContainer>
          <p>Qtd:</p>
          <div>
            <span onClick={handleDecrease}> - </span>
            <span>{quantity}</span>
            <span onClick={handleAdd}> + </span>
          </div>
        </ChangeButtonsContainer>
        <h3>R${itemTotal.toFixed()}</h3>
      </div>
      <button className="delete-item-button" onClick={handleDelete}>
        x
      </button>
    </CartItemContainer>
  );
}
