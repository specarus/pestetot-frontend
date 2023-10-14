import BrandsAdminPage from "@/app/components/pages/BrandsAdminPage";
import type { Metadata } from "next";

const BrandsAdminServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <BrandsAdminPage />
    </div>
  );
};

export default BrandsAdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Branduri",
};
