"use client";

import Title from "@/app/components/layout/Title";

import { useContext, useEffect } from "react";

import { CartContext } from "@/app/contexts/CartContext";
import { UserContext } from "@/app/contexts/UserContext";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Loading from "@/app/loading";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  const { data: session } = useSession();

  if (!isMounted) {
    return <Loading />;
  }

  if (
    !session ||
    !user?.address.building ||
    !user?.address.city ||
    !user?.address.county ||
    !user?.address.street ||
    !user?.address.postalCode ||
    !user?.phoneNumber ||
    !user?.firstName ||
    !user?.lastName ||
    cart?.length < 1
  )
    redirect("/contul-meu");

  return (
    <div className="w-full h-full">
      <section className="desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p>Cos</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Checkout</p>
        </div>
        <div className="mb-14">
          <Title title="Checkout" />
        </div>
      </section>
      <section className="desktop:pr-80 laptop:pr-[30rem] desktop:mb-24 laptop:mb-16 flex gap-4 desktop:text-base laptop:text-sm">
        <div className="relative w-fit h-fit border rounded-md select-none">
          <h2 className="absolute left-0 -top-8 px-4 rounded-full bg-primary text-white">
            Cosul de cumparaturi
          </h2>
          {cart.map((product: any) => {
            return (
              <div
                key={product._id}
                className="w-full h-16 border-b last-of-type:border-none flex items-center gap-4 pl-1 pr-6"
              >
                <div className="relative w-14 h-14">
                  <img
                    src={product.coverImg}
                    alt="Checkout"
                    className="w-14 h-14 select-none p-1"
                  />
                  <span className="absolute left-0 top-0 w-14 h-14 bg-neutral-400 bg-opacity-10" />
                </div>
                <div className="flex flex-col">
                  <p>
                    {product.title} ~ {product.option.code}
                  </p>
                  <div className="flex gap-1 desktop:text-sm laptop:text-xs">
                    <p>{product.amount} x</p>
                    <p>
                      {Number(product.option.price.split(" ")[0])}
                      .00
                    </p>
                    <p>Lei</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative w-64 h-fit border rounded-md select-none">
          <h2 className="absolute left-0 -top-8 bg-primary text-white px-4 rounded-full">
            Adresa de livrare
          </h2>
          <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
            Romania
          </div>
          {user?.lastName && user?.firstName && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.lastName} {user?.firstName}
            </div>
          )}
          {user?.address.county && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.address.county}
            </div>
          )}
          {user?.address.city && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.address.city}
            </div>
          )}
          {user?.address.street && user?.address.building && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.address.street} {user?.address.building}
            </div>
          )}
          {user?.address.stair && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {"Scara " + user?.address.stair}
            </div>
          )}
          {user?.address.flat && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {"Aparament " + user?.address.flat}
            </div>
          )}
          {user?.address.postalCode && (
            <div className="w-full h-9 border-b px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.address.postalCode}
            </div>
          )}
          {user?.phoneNumber && (
            <div className="w-full h-9 px-4 flex items-center hover:bg-cream transition-all duration-200">
              {user?.phoneNumber}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
