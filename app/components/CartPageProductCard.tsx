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
      <div className="flex items-center gap-8">
        <div className="relative w-36 h-40 grid place-content-center p-4 shadow-sm select-none pointer-events-none">
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
          <span className="bg-white w-24 border border-gray-300 grid place-content-center absolute bottom-2 left-[50%] -translate-x-[50%] text-sm">
            {item.option.code}
          </span>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <Link
            href={`/detalii/${product.category}/${product.subCategory}/${product.slug}`}
          >
            <h3 className="relative group">
              {item.title}
              <span className="absolute bottom-[2px] left-0 w-0 group-hover:w-full h-[1px] bg-black transition-all duration-200" />
            </h3>
          </Link>
          <p className="text-[16px]">
            {Number(item.option.price.split(" ")[0]) * item.amount}.00 Lei
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="border h-10 w-10 grid place-content-center text-lg">
          {item.amount}
        </p>
        <button
          onClick={() => removeFromCart(item._id, item.option)}
          className="hover:text-primary transition-all duration-200"
        >
          <IoMdClose className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartPageProductCard;
