"use client";

import Link from "next/link";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useState, useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import CartPageProductCard from "../components/CartPageProductCard";
import Title from "../components/layout/Title";

import type { Metadata } from "next";

const CartPage = () => {
  const { cart, totalAmount, totalPrice } = useContext(CartContext);

  const [instructions, setInstructions] = useState("");

  return (
    <div className="w-full h-full">
      <section className="px-20 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Cos</p>
        </div>
        <div className="mb-14">
          <Title title="Cos de cumparaturi" />
        </div>
      </section>

      {/* Cart */}
      <section className="px-20">
        {totalAmount > 0 ? (
          <p className="border-b mb-10 select-none">
            {totalAmount} {totalAmount === 1 ? "produs" : "produse"} in cosul
            tau
          </p>
        ) : (
          <p className="border-b">Cosul tau este gol</p>
        )}
      </section>

      <section className="pl-20 pr-96 mb-16">
        <ul className="flex flex-col gap-6">
          {cart.map((item: any) => {
            return (
              <div key={item._id}>
                <CartPageProductCard item={item} />
              </div>
            );
          })}
        </ul>
      </section>
      {/* Cart */}

      {cart.length > 0 ? (
        <div className="pl-20 pr-96">
          {/* Instructions */}
          <section className="relative mb-10">
            <label
              htmlFor="instructions"
              className="absolute -top-3 left-3 bg-white px-2"
            >
              Instructiuni suplimentare
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(ev) => setInstructions(ev.target.value)}
              className="w-[50%] h-40 border border-gray-300 resize-none px-4 py-2 focus:border-gray-400 transition-all duration-200"
            />
          </section>
          {/* Instructions */}

          {/* Checkout */}
          <section className="mb-24 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-2xl select-none">
                <h2>Total de plata:</h2>
                <span className="font-semibold">{totalPrice}.00 Lei</span>
              </div>
              <p className="text-sm">
                Taxe incluse.&nbsp;
                <Link href="/" className="underline">
                  Tranportul
                </Link>
                &nbsp;este calculat la checkout.
              </p>
            </div>
            <div>
              <Link
                href="/cos/checkout"
                className="rounded-full group relative flex justify-center w-40 py-2 bg-primary text-white overflow-hidden"
              >
                <p className="group-hover:translate-x-96 transition-all duration-300">
                  Checkout
                </p>
                <p className="text-2xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                  <BsArrowRight />
                </p>
              </Link>
            </div>
          </section>
          {/* Checkout */}
        </div>
      ) : (
        <div className="px-20 mb-24">
          <Link
            href="/"
            className="rounded-full group relative flex justify-center w-40 py-2 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-x-96 transition-all duration-300">
              Mergi inapoi
            </p>
            <p className="text-2xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

export const metadata: Metadata = {
  title: "PesteTot | Cos",
};
