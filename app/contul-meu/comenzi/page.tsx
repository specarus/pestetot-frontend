import Title from "@/app/components/layout/Title";
import type { Metadata } from "next";

const OrdersPage = () => {
  return (
    <div className="w-full desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-20">
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

export const metadata: Metadata = {
  title: "PesteTot | Comenzile mele",
};
