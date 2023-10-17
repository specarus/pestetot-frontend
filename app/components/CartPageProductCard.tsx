"use client";

import Link from "next/link";

import Image from "next/image";

import { useContext, useEffect, useState } from "react";

import { CartContext } from "../contexts/CartContext";

import { IoMdClose } from "react-icons/io";
import axios from "axios";

interface CartPageProductCardProps {
  item: any;
}

const CartPageProductCard: React.FC<CartPageProductCardProps> = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const [product, setProduct] = useState({} as any);

  useEffect(() => {
    axios
      .get(`/api/products/edit/${item.category}/${item._id}`)
      .then((res) => setProduct(res.data));
  }, [item.category, item._id]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center desktop:gap-8 laptop:gap-6">
        <div className="relative desktop:w-36 laptop:w-28 desktop:h-40 laptop:h-32 grid place-content-center p-4 shadow-sm select-none pointer-events-none">
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
          <span className="bg-white desktop:w-24 laptop:w-20 desktop:text-base laptop:text-sm border border-gray-300 grid place-content-center absolute bottom-2 left-[50%] -translate-x-[50%] text-sm">
            {item.option.code}
          </span>
        </div>
        <div className="flex flex-col desktop:gap-4 laptop:gap-2 desktop:text-lg laptop:text-base">
          <Link
            href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
          >
            <h3 className="relative group">
              {item.title}
              <span className="absolute bottom-[2px] left-0 w-0 group-hover:w-full h-[1px] bg-black transition-all duration-200" />
            </h3>
          </Link>
          <p className="desktop:text-base laptop:text-sm">
            {Number(item.option.price.split(" ")[0]) * item.amount}.00 Lei
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="border desktop:h-10 desktop:w-10 laptop:w-8 laptop:h-8 grid place-content-center desktop:text-lg laptop:text-base">
          {item.amount}
        </p>
        <button
          onClick={() => removeFromCart(item._id, item.option)}
          className="hover:text-primary transition-all duration-200"
        >
          <IoMdClose className="desktop:text-xl laptop:text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartPageProductCard;
