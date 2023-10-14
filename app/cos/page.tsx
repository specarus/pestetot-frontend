import type { Metadata } from "next";
import CartPage from "../components/pages/CartPage";

const CartServerPage = () => {
  return (
    <div className="w-full h-full">
      <CartPage />
    </div>
  );
};

export default CartServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Cos de cumparaturi",
};
