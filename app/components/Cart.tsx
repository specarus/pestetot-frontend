"use client";

import Link from "next/link";

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import CartProductCard from "./CartProductCard";

import { SlBag } from "react-icons/sl";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CartProps {
  setShowCartModal: (status: boolean) => void;
  setShowCartContent: (status: boolean) => void;
}

const Cart: React.FC<CartProps> = ({
  setShowCartContent,
  setShowCartModal,
}) => {
  const { cart, totalAmount, totalPrice } = useContext(CartContext);

  return (
    <div className="w-full h-full desktop:py-10 laptop:py-6">
      {cart?.length < 1 ? (
        <div className="w-full h-full desktop:px-10 laptop:px-8">
          <p className="desktop:text-base laptop:text-sm border-b desktop:pb-4 laptop:pb-2 desktop:mb-4 laptop:mb-2">
            Cosul tau este momentan gol.
          </p>
          <button
            onClick={() => {
              setShowCartContent(false);
              setTimeout(() => setShowCartModal(false), 200);
            }}
            className="rounded-full group relative flex justify-center w-full py-2 bg-primary text-white overflow-hidden"
          >
            <p className="desktop:text-base laptop:text-sm group-hover:-translate-x-96 transition-all duration-300">
              Continua navigarea
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </button>
          <Link
            href="/cos"
            onClick={() => {
              setShowCartContent(false);
              setTimeout(() => setShowCartModal(false), 200);
            }}
            className="group absolute bottom-8 right-11 flex items-center gap-2"
          >
            <SlBag className="desktop:text-xl laptop:text-lg" />
            <p className="desktop:text-base laptop:text-sm relative">
              Vezi cosul
              <span className="absolute left-0 bottom-[1px] bg-black w-0 group-hover:w-full h-[1px] transition-all duration-200" />
            </p>
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <div className="desktop:px-10 laptop:px-8">
            <p className="border-b desktop:mb-10 laptop:mb-8 laptop:text-sm desktop:text-base">
              {totalAmount} {totalAmount === 1 ? "produs" : "produse"} in cosul
              tau
            </p>
          </div>
          <ul className="w-full h-auto desktop:mb-10 laptop:mb-8 desktop:px-10 laptop:px-8">
            <div className="w-full desktop:max-h-[36rem] laptop:max-h-[29rem] flex flex-col desktop:gap-6 laptop:gap-4 overflow-y-auto overflow-x-hidden">
              {cart?.map((item: any) => {
                return (
                  <li key={item._id} className="w-full h-auto">
                    <CartProductCard item={item} />
                  </li>
                );
              })}
            </div>
          </ul>
          {/* Total price */}
          <section className="mt-4 flex flex-col gap-2 laptop:mb-10 desktop:px-10 laptop:px-8">
            <div className="desktop:text-2xl laptop:text-xl flex items-center gap-2 select-none">
              <h2>Total:</h2>
              <span className="font-semibold">{totalPrice}.00 lei</span>
            </div>
            <p className="desktop:text-sm laptop:text-xs">
              Taxe incluse.&nbsp;
              <Link href="/" className="underline">
                Tranportul
              </Link>
              &nbsp;este calculat la checkout.
            </p>
          </section>
          {/* Total price */}

          {/* Buttons */}
          <section className="w-full flex items-center gap-4 desktop:px-10 laptop:px-8">
            <button
              onClick={() => {
                setShowCartContent(false);
                setTimeout(() => setShowCartModal(false), 200);
              }}
              className="w-[60%] h-full grid place-content-center"
            >
              <p className="desktop:text-base laptop:text-sm relative group">
                Continua cumparaturile
                <span className="w-0 h-[1px] absolute bottom-[1px] left-0 bg-black group-hover:w-full transition-all duration-200" />
              </p>
            </button>
            <Link
              href="/cos"
              onClick={() => {
                setShowCartContent(false);
                setTimeout(() => setShowCartModal(false), 200);
              }}
              className="rounded-full group relative flex justify-center w-[40%] py-2 bg-primary text-white overflow-hidden"
            >
              <p className="desktop:text-base laptop:text-sm group-hover:translate-x-96 transition-all duration-300">
                Vezi cosul
              </p>
              <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                <BsArrowRight />
              </p>
            </Link>
          </section>
          {/* Buttons */}
        </div>
      )}
    </div>
  );
};

export default Cart;
