import Image from "next/image";
import ShopingBagIcon from "../../../public/shoppingBag.svg";
import { Product } from "@/screens/Home";
import { Card, ImageContainer, TitleContainer } from "./styles";
import { addToCart } from "@/store/cartSlice/cartSlicer";
import { useDispatch } from "react-redux";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, description, price, photo } = product;
  const showmPrice = Number(price).toFixed();
  const dispatch = useDispatch();

  function handleAddtoCart() {
    dispatch(addToCart(product));
  }

  return (
    <Card>
      <div className="content">
        <ImageContainer>
          <Image fill src={photo} alt={`${name}`} />
        </ImageContainer>
        <TitleContainer>
          <h2>{name}</h2>
          <h3>R${showmPrice}</h3>
        </TitleContainer>
        <p>{description}</p>
      </div>
      <button onClick={handleAddtoCart}>
        <Image
          width={12}
          height={13}
          src={ShopingBagIcon}
          alt="Shopping Bag Icon"
        />
        COMPRAR
      </button>
    </Card>
  );
}
