"use client";

import Link from "next/link";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useState, useContext } from "react";

import { CartContext } from "@/app/contexts/CartContext";
import CartPageProductCard from "../cards/CartPageProductCard";
import Title from "../layout/Title";
import { useSession } from "next-auth/react";
import { UserContext } from "@/app/contexts/UserContext";

import Swal from "sweetalert2";
import { Router } from "next/router";

import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, totalAmount, totalPrice } = useContext(CartContext);

  const [instructions, setInstructions] = useState("");

  const { data: session } = useSession();

  const { user, setModal, setShowOverlay, setShowAccountModal } =
    useContext(UserContext);

  const router = useRouter();

  return (
    <div className="w-full h-full">
      <section className="desktop:px-20 laptop:px-16 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Cos</p>
        </div>
        <div className="desktop:mb-14 laptop:mb-10">
          <Title title="Cos de cumparaturi" />
        </div>
      </section>
      {/* Cart */}
      <section className="desktop:px-20 laptop:px-16">
        {totalAmount > 0 ? (
          <p className="border-b desktop:mb-10 laptop:mb-8 select-none desktop:text-base laptop:text-sm">
            {totalAmount} {totalAmount === 1 ? "produs" : "produse"} in cosul
            tau
          </p>
        ) : (
          <p className="border-b desktop:mb-6 laptop:mb-4">
            Cosul tau este gol
          </p>
        )}
      </section>
      <section className="desktop:pl-20 laptop:pl-16 desktop:pr-96 laptop:pr-[30rem] desktop:mb-16 laptop:mb-12">
        <ul className="flex flex-col desktop:gap-6 laptop:gap-4">
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
        <div className="desktop:pl-20 laptop:pl-16 desktop:pr-96 laptop:pr-[30rem]">
          {/* Instructions */}
          <section className="relative desktop:mb-10 laptop:mb-8 desktop:text-base laptop:text-sm">
            <label
              htmlFor="instructions"
              className="absolute desktop:-top-3 laptop:-top-4 left-3 bg-white px-2"
            >
              Instructiuni suplimentare
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(ev) => setInstructions(ev.target.value)}
              className="w-[50%] desktop:h-40 laptop:h-32 border border-gray-300 resize-none px-4 py-2 focus:border-gray-400 transition-all duration-200"
            />
          </section>
          {/* Instructions */}

          {/* Checkout */}
          <section className="desktop:mb-24 laptop:mb-20 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 desktop:text-2xl laptop:text-xl select-none">
                <h2>Total de plata:</h2>
                <span className="font-semibold">{totalPrice}.00 Lei</span>
              </div>
              <p className="desktop:text-sm laptop:text-xs">
                Taxe incluse.&nbsp;
                <Link href="/" className="underline">
                  Tranportul
                </Link>
                &nbsp;este calculat la checkout.
              </p>
            </div>
            <div>
              {session ? (
                !user?.address.building ||
                !user?.address.city ||
                !user?.address.county ||
                !user?.address.street ||
                !user?.address.postalCode ||
                !user?.phoneNumber ||
                !user?.firstName ||
                !user?.lastName ||
                cart?.length < 0 ? (
                  <button
                    onClick={() => {
                      Swal.fire({
                        position: "top",
                        timer: 2000,
                        backdrop: "transparent",
                        title: "Nu ati completat toate detaliile!",
                        timerProgressBar: true,
                        showConfirmButton: false,
                        customClass: {
                          popup: "w-auto h-auto laptop:px-4 pb-2",
                          title: "text-sm font-normal",
                          timerProgressBar: "bg-red-500",
                        },
                      });
                      router.push("/contul-meu");
                    }}
                    className="rounded-full group relative flex justify-center desktop:w-40 laptop:w-36 py-2 bg-primary text-white overflow-hidden"
                  >
                    <p className="group-hover:translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
                      Checkout
                    </p>
                    <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                      <BsArrowRight />
                    </p>
                  </button>
                ) : (
                  <Link
                    href="/cos/checkout"
                    className="rounded-full group relative flex justify-center desktop:w-40 laptop:w-36 py-2 bg-primary text-white overflow-hidden"
                  >
                    <p className="group-hover:translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
                      Checkout
                    </p>
                    <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                      <BsArrowRight />
                    </p>
                  </Link>
                )
              ) : (
                <button
                  onClick={() => {
                    setShowAccountModal(true);
                    setShowOverlay(true);
                    setModal(2);
                  }}
                  className="rounded-full group relative flex justify-center desktop:w-40 laptop:w-36 py-2 bg-primary text-white overflow-hidden"
                >
                  <p className="group-hover:translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
                    Checkout
                  </p>
                  <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                    <BsArrowRight />
                  </p>
                </button>
              )}
            </div>
          </section>
          {/* Checkout */}
        </div>
      ) : (
        <div className="desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-20">
          <Link
            href="/"
            className="rounded-full group relative flex justify-center desktop:w-40 laptop:w-36 desktop:py-2 laptop:py-1 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
              Mergi inapoi
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
