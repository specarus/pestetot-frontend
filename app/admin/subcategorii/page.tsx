import SubCategoriesAdminPage from "@/app/components/pages/SubCategoriesAdminPage";
import type { Metadata } from "next";

const SubCategoriesAdminServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <SubCategoriesAdminPage />
    </div>
  );
};

export default SubCategoriesAdminServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Subcategorii",
};
