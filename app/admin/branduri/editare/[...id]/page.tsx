import EditBrandPage from "@/app/components/pages/EditBrandPage";
import type { Metadata } from "next";

const EditBrandServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-40">
      <EditBrandPage />
    </div>
  );
};

export default EditBrandServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Editeaza brandul",
};
