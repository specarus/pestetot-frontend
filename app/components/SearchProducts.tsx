"use client";

import SearchProductCard from "./SearchProductCard";

interface SearchProductsProps {
  filteredProducts: any[];
  search: string;
  setSearch: (value: string) => void;
  setShowSearchModal: (value: boolean) => void;
  setShowSearchContent: (value: boolean) => void;
}

const SearchProducts: React.FC<SearchProductsProps> = ({
  search,
  filteredProducts,
  setSearch,
  setShowSearchContent,
  setShowSearchModal,
}) => {
  return (
    <div className="w-full h-full">
      <ul className="w-full h-full flex flex-col desktop:gap-4 laptop:gap-2">
        {filteredProducts.map((product) => {
          return (
            <div key={product._id}>
              <SearchProductCard
                product={product}
                search={search}
                setSearch={setSearch}
                setShowSearchContent={setShowSearchContent}
                setShowSearchModal={setShowSearchModal}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchProducts;
