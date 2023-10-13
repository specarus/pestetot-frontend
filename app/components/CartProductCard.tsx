"use client";

import { useContext } from "react";

import Image from "next/image";

import { CartContext } from "../contexts/CartContext";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const CartProduct = ({ item }: { item: any }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="relative w-full h-24">
      <div className="relative w-24 h-24 grid place-content-center shadow-sm p-2 select-none pointer-events-none">
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
      <p className="absolute left-24 top-2 px-4">
        {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
      </p>
      <div className="absolute w-full left-24 top-9 flex items-center px-4">
        <p>
          {Number(item.option.price.split(" ")[0]) * item.amount}
          .00
        </p>
        <p className="ml-1">Lei</p>
      </div>
      <div className="absolute bottom-0 left-24 ml-4 w-24 h-8 grid grid-cols-3 border border-gray-300">
        <button
          onClick={() => decreaseAmount(item._id, item.option)}
          className="col-span-1 h-full border-r grid place-content-center hover:bg-cream transition-all duration-200"
        >
          <AiOutlineMinus />
        </button>
        <span className="col-span-1 h-full border-r grid place-content-center">
          {item.amount}
        </span>
        <button
          onClick={() => increaseAmount(item._id, item.option)}
          className="col-span-1 h-full grid place-content-center hover:bg-cream transition-all duration-200"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id, item.option)}
        className="absolute right-6 top-[50%]"
      >
        <IoMdClose className="text-lg hover:text-primary transition-all duration-200" />
      </button>
    </div>
  );
};

export default CartProduct;
