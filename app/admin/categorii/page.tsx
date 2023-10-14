import CategoriesAdminPage from "@/app/components/pages/CategoriesAdminPage";
import type { Metadata } from "next";

const CategoriesAdminServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <CategoriesAdminPage />
    </div>
  );
};

export default CategoriesAdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Categorii",
};
