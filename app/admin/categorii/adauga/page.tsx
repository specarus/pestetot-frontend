import NewCategoryPage from "@/app/components/pages/NewCategoryPage";
import type { Metadata } from "next";

const NewCategoryServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <NewCategoryPage />
    </div>
  );
};

export default NewCategoryServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Adauga o categorie",
};
