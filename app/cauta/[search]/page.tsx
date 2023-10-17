import SearchPage from "@/app/components/pages/SearchPage";

import type { Metadata } from "next";

const SearchServerPage = () => {
  return (
    <div className="w-full h-full desktop:px-20 laptop:px-16 desktop:mb-24 laptop:mb-20">
      <SearchPage />
    </div>
  );
};

export default SearchServerPage;

export const metadata: Metadata = {
  title: "PesteTot | Cauta",
};
