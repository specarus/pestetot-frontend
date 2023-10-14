import EditSubCategoryPage from "@/app/components/pages/EditSubCategoryPage";
import type { Metadata } from "next";

const EditSubCategoryServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <EditSubCategoryPage />
    </div>
  );
};

export default EditSubCategoryServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Editeaza subcategoria",
};
