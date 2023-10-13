"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useContext } from "react";

import { SlBag } from "react-icons/sl";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hover, setHover] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { setShowCartContent, setShowCartModal } = useContext(SidebarContext);

  return (
    <div
      className="col-span-1 h-auto border border-gray-100 flex flex-col overflow-hidden rounded-md shadow-sm"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="relative w-full h-40 grid place-content-center overflow-hidden border-b border-gray-100">
        <span
          className={`${
            product.availability === "in stoc" ? "bg-green-500" : "bg-red-500"
          } absolute top-2 left-2 w-2 h-2 rounded-full`}
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
          className="w-full h-full object-contain p-4 select-none pointer-events-none"
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
          className={`${hover ? "h-10 opacity-1" : "h-0 opacity-0"} ${
            product.availability === "in stoc"
              ? "bg-primary"
              : "bg-gray-300 pointer-events-none"
          } group absolute left-0 bottom-0 w-full text-white transition-all duration-200 overflow-hidden`}
        >
          <p
            className={`${
              product.availability === "in stoc" && "group-hover:-translate-y-8"
            } transition-all duration-200`}
          >
            {product.availability === "in stoc"
              ? "Adauga in cos"
              : "Stoc epuizat"}
          </p>
          <p
            className={`${
              product.availability === "in stoc" ? "group-hover:top-2" : ""
            } absolute top-10 left-[50%] -translate-x-[50%] transition-all duration-200`}
          >
            <SlBag className="text-2xl" />
          </p>
        </button>
        {/* Button */}
      </div>
      <Link
        onClick={() => {}}
        href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
        className="relative w-full bg-white flex flex-col p-3 pb-2 justify-between h-28"
      >
        <p>{product.title}</p>
        <div className="flex items-center gap-6">
          <div className="w-fit relative flex items-center gap-1">
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

            <p className="absolute -top-1 left-full text-xs">&nbsp;.00</p>
          </div>
          <p>Lei</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
