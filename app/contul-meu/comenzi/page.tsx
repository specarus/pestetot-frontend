import OrdersPage from "@/app/components/pages/OrdersPage";
import type { Metadata } from "next";

const OrdersServerPage = () => {
  return (
    <div className="w-full h-full desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-20">
      <OrdersPage />
    </div>
  );
};

export default OrdersServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Comenzile mele",
};
