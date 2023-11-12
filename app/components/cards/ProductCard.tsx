"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useContext } from "react";

import { SlBag } from "react-icons/sl";

import { CartContext } from "../../contexts/CartContext";
import { SidebarContext } from "../../contexts/SidebarContext";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hover, setHover] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { setShowCartContent, setShowCartModal } = useContext(SidebarContext);

  return (
    <div
      className="col-span-1 h-auto border border-gray-100 flex flex-col overflow-hidden rounded-md shadow-md"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="relative w-full desktop:h-40 laptop:h-36 grid place-content-center overflow-hidden border-b border-gray-100">
        <span
          className={`${
            product.availability === "in stoc" ? "bg-green-500" : "bg-red-500"
          } absolute desktop:top-2 desktop:left-2 laptop:top-1 laptop:left-1 desktop:w-2 desktop:h-2 laptop:w-1 laptop:h-1 rounded-full`}
        />
        {/* Creme background */}
        <span className="w-full h-full absolute top-0 left-0 bg-neutral-400 bg-opacity-10" />
        {/* Creme background */}
        <Image
          src={product.coverImg}
          alt="Cover"
          priority
          width={500}
          height={500}
          className="w-full h-full object-contain desktop:p-4 laptop:p-6 select-none pointer-events-none"
        />
        {/* Overlay */}
        <Link
          href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
          className={`${
            hover ? "opacity-1 visible" : "opacity-0 invisible"
          } w-full h-full absolute bottom-0 left-0 bg-black bg-opacity-10 transition-all duration-200`}
        />
        {/* Overlay */}

        {/* Button */}
        <button
          onClick={() => {
            addToCart(product, product._id, product.options[0]);
            setTimeout(() => {
              setShowCartModal(true);
              setTimeout(() => setShowCartContent(true), 200);
            }, 150);
          }}
          className={`${
            hover ? "desktop:h-10 laptop:h-8 opacity-1" : "h-0 opacity-0"
          } ${
            product.availability === "in stoc"
              ? "bg-primary"
              : "bg-gray-300 pointer-events-none"
          } group absolute left-0 bottom-0 w-full text-white transition-all duration-200 overflow-hidden`}
        >
          <p
            className={`${
              product.availability === "in stoc" && "group-hover:-translate-y-8"
            } transition-all duration-200 desktop:text-base laptop:text-sm`}
          >
            {product.availability === "in stoc"
              ? "Adauga in cos"
              : "Stoc epuizat"}
          </p>
          <p
            className={`${
              product.availability === "in stoc"
                ? "desktop:group-hover:top-2 laptop:group-hover:top-[6px]"
                : ""
            } absolute laptop:top-10 left-[50%] -translate-x-[50%] transition-all duration-200`}
          >
            <SlBag className="desktop:text-2xl laptop:text-xl" />
          </p>
        </button>
        {/* Button */}
      </div>
      <Link
        onClick={() => {}}
        href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
        className="relative w-full bg-white flex flex-col desktop:p-3 laptop:p-2 desktop:pb-2 laptop:pb-1 justify-between desktop:h-28 laptop:h-20"
      >
        <p className="desktop:text-base laptop:text-sm">{product.title}</p>
        <div className="flex items-center gap-6">
          <div className="w-fit relative flex items-center gap-1 desktop:text-base laptop:text-sm">
            <p>
              {product.options.length > 1 &&
                Number(product.options[0].price.split(" ")[0]) !==
                  Number(product.options[1].price.split(" ")[0]) &&
                "de la"}
            </p>

            {/* Min price */}
            <p>
              {Math.min(
                ...product.options.map((option: any) =>
                  Number(option.price.split(" ")[0])
                )
              )}
            </p>
            {/* Min price */}

            <p className="absolute -top-1 left-full desktop:text-xs laptop:text-[10px]">
              &nbsp;.00
            </p>
          </div>
          <p className="desktop:text-base laptop:text-sm">Lei</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
