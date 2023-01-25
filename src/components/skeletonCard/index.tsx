import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { CardContainer, TitleContainer } from "./styles";

import ShopingBagIcon from "../../../public/shoppingBag.svg";

export default function SkeletonCard() {
  return (
    <CardContainer>
      <div className="content">
        <Skeleton width={140} height={140} />
        <TitleContainer>
          <Skeleton width={120} height={22} />
          <Skeleton width={40} height={22} />
        </TitleContainer>
        <Skeleton width={140} height={14} count={2} />
      </div>
      <button>
        <Image
          width={12}
          height={13}
          src={ShopingBagIcon}
          alt="Shopping Bag Icon"
        />
        COMPRAR
      </button>
    </CardContainer>
  );
}
