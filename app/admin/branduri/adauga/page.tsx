import NewBrandPage from "@/app/components/pages/NewBrandPage";
import type { Metadata } from "next";

const NewBrandServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <NewBrandPage />
    </div>
  );
};

export default NewBrandServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Adauga un brand",
};
