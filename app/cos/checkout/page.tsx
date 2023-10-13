import Title from "@/app/components/layout/Title";

import type { Metadata } from "next";

const CheckoutPage = () => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <section className="mb-6">
        <div className="flex items-center gap-3 mb-6">
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

      <section className="pl-20 pr-96 mb-52 flex flex-col gap-8"></section>
    </div>
  );
};

export default CheckoutPage;

export const metadata: Metadata = {
  title: "PesteTot | Checkout",
};
