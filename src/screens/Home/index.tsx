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
  }, [dispatch]);

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
