"use client";

import { useState, useContext, useEffect } from "react";

import Image from "next/image";

import { CartContext } from "../../contexts/CartContext";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const CartProduct = ({ item }: { item: any }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setW(window.innerWidth);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.onresize = function (event) {
      setW(window.innerWidth);
    };
  }

  return (
    <div className="relative w-full desktop:h-24 laptop:h-20">
      <div className="relative desktop:w-24 desktop:h-24 laptop:w-20 laptop:h-20 grid place-content-center shadow-sm p-2 select-none pointer-events-none">
        {/* Cream background */}
        <span className="w-full h-full bg-neutral-400 bg-opacity-10 absolute top-0 left-0" />
        {/* Cream background */}
        <Image
          src={item.coverImg}
          alt="Cart"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="w-full absolute bottom-1 left-[50%] -translate-x-[50%]">
          <p className="text-xs mx-auto bg-primary text-white w-fit px-1">
            {item.option.code}
          </p>
        </div>
      </div>
      <p className="absolute desktop:left-24 laptop:left-20 desktop:text-base laptop:text-sm desktop:top-2 laptop:top-1 px-4">
        {w > 1750 &&
          (item.title.length > 30
            ? item.title.slice(0, 30) + "..."
            : item.title)}
        {w <= 1750 &&
          (item.title.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title)}
      </p>
      <div className="absolute w-full desktop:left-24 laptop:left-20 desktop:top-9 laptop:top-7 flex items-center px-4 desktop:text-base laptop:text-sm">
        <p>
          {Number(item.option.price.split(" ")[0]) * item.amount}
          .00
        </p>
        <p className="ml-1">Lei</p>
      </div>
      <div className="absolute bottom-0 desktop:left-24 laptop:left-20 ml-4 desktop:w-24 laptop:w-20 desktop:h-8 laptop:h-6 grid grid-cols-3 border border-gray-300">
        <button
          onClick={() => decreaseAmount(item._id, item.option)}
          className="desktop:text-base laptop:text-sm col-span-1 h-full border-r grid place-content-center hover:bg-cream transition-all duration-200"
        >
          <AiOutlineMinus />
        </button>
        <span className="desktop:text-base laptop:text-sm col-span-1 h-full border-r grid place-content-center">
          {item.amount}
        </span>
        <button
          onClick={() => increaseAmount(item._id, item.option)}
          className="desktop:text-base laptop:text-sm col-span-1 h-full grid place-content-center hover:bg-cream transition-all duration-200"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id, item.option)}
        className="absolute desktop:right-6 laptop:right-4 top-[50%]"
      >
        <IoMdClose className="desktop:text-lg laptop:text-base hover:text-primary transition-all duration-200" />
      </button>
    </div>
  );
};

export default CartProduct;
