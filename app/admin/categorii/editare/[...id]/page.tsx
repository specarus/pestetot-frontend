import EditCategoryPage from "@/app/components/pages/EditCategoryPage";
import type { Metadata } from "next";

const EditCategoryServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <EditCategoryPage />
    </div>
  );
};

export default EditCategoryServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Editeaza o categorie",
};
