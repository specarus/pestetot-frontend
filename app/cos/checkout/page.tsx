import CheckoutPage from "@/app/components/pages/CheckoutPage";
import type { Metadata } from "next";

const CheckoutServerPage = () => {
  return (
    <div className="w-full h-full desktop:px-20 laptop:px-16">
      <CheckoutPage />
    </div>
  );
};

export default CheckoutServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Checkout",
};
