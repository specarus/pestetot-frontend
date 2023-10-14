import ProductsAdminPage from "@/app/components/pages/ProductsAdminPage";
import type { Metadata } from "next";

const ProductsAdminServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <ProductsAdminPage />
    </div>
  );
};

export default ProductsAdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Produse",
};
