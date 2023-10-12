"use client";

import Link from "next/link";

import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";

interface SearchProductCartProps {
  product: any;
  search: string;
  setSearch: (value: string) => void;
  setShowSearchModal: (value: boolean) => void;
  setShowSearchContent: (value: boolean) => void;
}

const SearchProductCard: React.FC<SearchProductCartProps> = ({
  product,
  setSearch,
  setShowSearchContent,
  setShowSearchModal,
}) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
      className="relative block w-full h-20"
    >
      <Link
        href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
        onClick={() => {
          setTimeout(() => setShowSearchModal(false), 200);
          setShowSearchContent(false);
          setTimeout(() => setSearch(""), 200);
        }}
        className={`${
          showButton
            ? "translate-x-0 opacity-1 visible"
            : "translate-x-10 opacity-0 invisible"
        } rounded-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] py-1 px-6 bg-primary text-white overflow-hidden transition-all duration-200 shadow-md z-50`}
      >
        <BsArrowRight className="text-xl" />
      </Link>
      <div
        className={`${
          showButton && "blur-[1px]"
        } w-full h-full flex transition-all duration-200`}
      >
        <div className="relative w-20 h-full grid place-content-center">
          <img
            src={product.coverImg}
            alt="Search"
            className="w-full h-full object-contain select-none pointer-events-none"
          />

          <span
            className={`${
              product.availability === "in stoc" ? "bg-green-500" : "bg-red-500"
            } absolute bottom-[6px] right-[6px] w-[6px] h-[6px] rounded-full`}
          />
        </div>
        <div className="px-6 text-sm h-full flex items-center w-44 select-none">
          <p id="productTitle">{product.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchProductCard;
