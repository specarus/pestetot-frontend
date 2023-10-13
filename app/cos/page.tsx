import type { Metadata } from "next";
import CartPageProducts from "../components/CartPageProducts";

const CartPage = () => {
  return (
    <div className="w-full h-full">
      <CartPageProducts />
    </div>
  );
};

export default CartPage;

export const metadata: Metadata = {
  title: "PesteTot | Cos",
};
