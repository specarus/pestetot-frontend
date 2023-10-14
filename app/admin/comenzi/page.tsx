import OrdersAdminPage from "@/app/components/pages/OrdersAdminPage";
import type { Metadata } from "next";

const OrdersAdminServerPage = () => {
  return (
    <div className="w-full h-full mb-40 px-20">
      <OrdersAdminPage />
    </div>
  );
};

export default OrdersAdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Comenzi",
};
