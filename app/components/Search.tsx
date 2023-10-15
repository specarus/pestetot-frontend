"use client";

import Link from "next/link";

import SearchProducts from "./SearchProducts";

import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  products: any[];
  setShowSearchModal: (status: boolean) => void;
  setShowSearchContent: (status: boolean) => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  setSearch,
  products,
  setShowSearchModal,
  setShowSearchContent,
}) => {
  const filteredProducts = products.filter((product) => {
    if (search) {
      return product.title.toLowerCase().includes(search);
    }
  });

  return (
    <div className="w-full h-full">
      <span className="fixed h-full w-2 bg-primary left-0 top-0" />
      {/* Input */}
      <section className="fixed left-0 top-10 desktop:w-80 laptop:w-64 desktop:px-8 laptop:px-6 z-50">
        <div className="w-full relative mb-4">
          <input
            // id="searchInput"
            type="text"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            className="peer w-full h-10 border-b-2 pr-12"
          />
          <span
            className={`${
              search ? "w-full bg-primary" : "w-0"
            } absolute bottom-0 right-0 h-[2px] peer-focus:w-full peer-focus:bg-primary transition-all duration-200`}
          />
          {search ? (
            <Link
              href={`/cauta/${search.split(" ").join("-")}`}
              onClick={() => {
                setTimeout(() => setShowSearchModal(false), 200);
                setShowSearchContent(false);
                setTimeout(() => setSearch(""), 200);
              }}
              className="absolute top-[50%] bg-white -translate-y-[50%] right-0 group flex justify-end items-center overflow-hidden w-10"
            >
              <p className="group-hover:-translate-y-40 transition-all duration-200">
                <IoSearchOutline
                  className={`${
                    search ? "text-primary" : ""
                  } text-gray-200 peer-focus:text-primary text-2xl transition-all duration-200`}
                />
              </p>
              <p className="text-sm absolute translate-y-40 group-hover:translate-y-0 transition-all duration-200">
                Cauta
              </p>
            </Link>
          ) : (
            <IoSearchOutline
              className={`${
                search ? "text-primary" : ""
              } text-gray-200 absolute top-[50%] -translate-y-[50%] right-0 peer-focus:text-primary text-2xl transition-all duration-200`}
            />
          )}
        </div>
        {search && (
          <div className="desktop:text-sm laptop:text-xs border-b flex gap-1 select-none">
            <p>{filteredProducts.length}</p>
            <p>{filteredProducts.length === 1 ? "rezultat" : "rezultate"}</p>
          </div>
        )}
      </section>
      {/* Input */}

      <section className="pt-32 pb-4 w-full h-full desktop:px-8 laptop:px-6">
        <div className="w-full h-full overflow-x-hidden overflow-y-auto">
          <SearchProducts
            filteredProducts={filteredProducts}
            search={search}
            setSearch={setSearch}
            setShowSearchModal={setShowSearchModal}
            setShowSearchContent={setShowSearchContent}
          />
        </div>
      </section>
    </div>
  );
};

export default Search;
