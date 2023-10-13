import Title from "@/app/components/layout/Title";

import type { Metadata } from "next";

const ShippingPage = () => {
  return (
    <div className="w-full h-full">
      <section className="px-20 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Livrare si transport</p>
        </div>
        <div className="mb-14">
          <Title title="Livrare si transport" />
        </div>
      </section>

      <section className="pl-20 pr-96 mb-52 flex flex-col gap-8"></section>
    </div>
  );
};

export default ShippingPage;

export const metadata: Metadata = {
  title: "PesteTot | Livrare si transport",
};
