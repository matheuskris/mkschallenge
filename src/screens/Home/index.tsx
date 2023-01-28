import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HomeContainer, ProductsContainer } from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productsSlice/productsSlice";
import { AppDispatch } from "@/store/store";
import {
  selectIsLoading,
  selectProducts,
} from "@/store/productsSlice/products.selector";

import ProductCard from "@/components/ProductCard";
import "react-loading-skeleton/dist/skeleton.css";
import { CartItemT } from "@/store/cartSlice/cartSlicer";
import SkeletonCard from "@/components/skeletonCard";

export type Product = {
  id: number;
  brand: string;
  createdAt: string;
  description: string;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
};

// const cartState =
//   '{"cartItems":[{"id":6,"name":"iPad","brand":"Apple","description":"iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.","photo":"https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp","price":"4200.00","createdAt":"2023-01-23T18:17:04.771Z","updatedAt":"2023-01-23T18:17:04.771Z","quantity":2},{"id":5,"name":"Apple Watch Series 7","brand":"Apple","description":"O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.","photo":"https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp","price":"3200.00","createdAt":"2023-01-23T18:17:04.771Z","updatedAt":"2023-01-23T18:17:04.771Z","quantity":1},{"id":1,"name":"Iphone 11 128 GB","brand":"Apple","description":"Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.","photo":"https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp","price":"5000.00","createdAt":"2023-01-23T18:17:04.771Z","updatedAt":"2023-01-23T18:17:04.771Z","quantity":1},{"id":7,"name":"Headset Cloud Revolver","brand":"HyperX","description":"A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.","photo":"https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp","price":"1000.00","createdAt":"2023-01-23T18:17:04.771Z","updatedAt":"2023-01-23T18:17:04.771Z","quantity":1}],"totalItems":5}';
// const parsedCartItems = JSON.parse(cartState).cartItems as CartItemT[];

export default function Home() {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const params = {
      page: "1",
      rows: 8,
      sortBy: "id",
      orderBy: "DESC",
    };
    dispatch(fetchProducts(params));
  }, []);

  console.log(products);

  return (
    <HomeContainer>
      <Navigation />
      <ProductsContainer>
        {isLoading
          ? Array(8)
              .fill("")
              .map((_, i) => {
                return <SkeletonCard key={i} />;
              })
          : products.map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
      </ProductsContainer>
      <Footer />
    </HomeContainer>
  );
}
