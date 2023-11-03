import Title from "@/app/components/layout/Title";
import type { Metadata } from "next";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const OrdersPage = () => {
  return (
    <div className="w-full desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-16">
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
      <section className="desktop:mb-24 laptop:mb-16">
        <div className="w-full desktop:text-base laptop:text-sm flex flex-col desktop:gap-32 laptop:gap-24">
          <p className="border-b">Nu aveti nicio comanda!</p>
          <Link
            href="/"
            className="rounded-full group relative flex justify-center w-[30%] py-2 bg-primary text-white overflow-hidden"
          >
            <p className="desktop:text-base laptop:text-sm group-hover:-translate-x-96 transition-all duration-300">
              Exploreaza gama de produse
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OrdersPage;

export const metadata: Metadata = {
  title: "PesteTot | Comenzile mele",
};
