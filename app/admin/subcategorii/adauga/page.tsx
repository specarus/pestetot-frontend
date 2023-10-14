import NewSubCategoryPage from "@/app/components/pages/NewSubCategoryPage";
import type { Metadata } from "next";

const NewSubCategoryServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <NewSubCategoryPage />
    </div>
  );
};

export default NewSubCategoryServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Adauga o subcategorie",
};
