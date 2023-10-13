import type { Metadata } from "next";
import Orders from "@/app/components/Orders";

const OrdersPage = () => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <Orders />
    </div>
  );
};

export default OrdersPage;

export const metadata: Metadata = {
  title: "PesteTot | Comenzi",
};
