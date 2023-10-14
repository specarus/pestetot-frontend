import EditProductPage from "@/app/components/pages/EditProductPage";
import type { Metadata } from "next";

const EditProductServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <EditProductPage />
    </div>
  );
};

export default EditProductServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Editeaza produsul",
};
