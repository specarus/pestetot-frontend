import SearchPage from "@/app/components/pages/SearchPage";

import type { Metadata } from "next";

const SearchServerPage = () => {
  return (
    <div className="w-full h-full px-20 mb-20">
      <SearchPage />
    </div>
  );
};

export default SearchServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Cauta",
};
