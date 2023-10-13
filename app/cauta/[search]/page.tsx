import SearchPageProducts from "@/app/components/SearchPageProducts";
import type { Metadata } from "next";

const SearchPage = () => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <SearchPageProducts />
    </div>
  );
};

export default SearchPage;

export const metadata: Metadata = {
  title: "PesteTot | Cauta",
};
