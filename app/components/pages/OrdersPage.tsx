"use client";

import Link from "next/link";

import { useContext } from "react";

import { UserContext } from "@/app/contexts/UserContext";

import { BsArrowLeft } from "react-icons/bs";
import Title from "@/app/components/layout/Title";

const OrdersPage = () => {
  const { user } = useContext(UserContext);

  if (!user?._id) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full pb-96 relative">
          <p className="desktop:text-base laptop:text-sm">
            Nu sunteti conectat!
          </p>
          <Link
            href="/"
            className="absolute bottom-10 left-0 rounded-full group flex justify-center desktop:w-44 laptop:w-40 py-2 bg-primary text-white"
          >
            <p className="group-hover:-translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
              Mergeti inapoi
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <section className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p>Contul meu</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Comenzi</p>
        </div>
        <div className="mb-14">
          <Title title="Comenzile mele" />
        </div>
      </section>
    </div>
  );
};

export default OrdersPage;
