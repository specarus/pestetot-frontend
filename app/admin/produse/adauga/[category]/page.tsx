import NewProductPage from "@/app/components/pages/NewProductPage";
import type { Metadata } from "next";

const NewProductServerPage = ({ params }: { params: { category: string } }) => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <NewProductPage params={params} />
    </div>
  );
};

export default NewProductServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Adauga un produs",
};
