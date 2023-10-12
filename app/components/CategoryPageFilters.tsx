"use client";

import { useContext } from "react";

import { CategoryPageFiltersContext } from "../contexts/CategoryPageFiltersContext";

import { BsChevronDown } from "react-icons/bs";

import { SubCategory } from "../types/SubCategory";
import { Brand } from "../types/Brand";
import CategoryPageAppliedFilters from "./CategoryPageAppliedFilters";

interface CategoryPageFiltersProps {
  subCategories: SubCategory[];
  brands: Brand[];
}

const CategoryPageFilters: React.FC<CategoryPageFiltersProps> = ({
  subCategories,
  brands,
}) => {
  const {
    showModal,
    setShowModal,
    selectSortBy,
    selectInStock,
    selectOutOfStock,
    selectSubCategory,
    selectBrand,
    resetAvailability,
    resetPrice,
    resetSubCategories,
    resetBrands,
    handleChangeMinPrice,
    handleChangeMaxPrice,
    filters,
    showAppliedFilters,
  } = useContext(CategoryPageFiltersContext);

  return (
    <div className={`${showAppliedFilters ? "pb-10" : "pb-32"} w-full h-full`}>
      {showAppliedFilters ? (
        <div className="pl-32 pr-2 border py-2 rounded-full w-fit">
          <CategoryPageAppliedFilters />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="relative w-full flex justify-between">
            <section>
              <p className="text-sm mb-1">Filtre:</p>
              <div className="flex items-center gap-4 mb-1">
                {/* Availability */}
                <button
                  onClick={() => {
                    if (showModal === 1) setShowModal(0);
                    else setShowModal(1);
                  }}
                  className={`${
                    showModal === 1 ? "border-gray-400" : "border-gray-300"
                  } relative border w-40 px-4 py-3 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p>Valabilitate</p>
                    <BsChevronDown
                      className={`${
                        showModal === 1 && "rotate-180"
                      } text-sm transition-all duration-100`}
                    />
                  </div>
                </button>
                {/* Availability */}

                {/* Availability modal */}
                {showModal === 1 && (
                  <div className="absolute top-20 -left-0 text-sm h-auto w-80 bg-white border border-gray-300 shadow-md">
                    <div className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
                      <p>{filters.availability.length} selectate</p>
                      <button
                        onClick={() => {
                          resetAvailability();
                        }}
                        className="underline"
                      >
                        Reseteaza
                      </button>
                    </div>
                    <ul className="flex flex-col gap-2 items-start py-3 px-4">
                      <li>
                        <button
                          onClick={() => selectInStock()}
                          className="flex items-center gap-4"
                        >
                          <span
                            className={`${
                              filters.availability.includes("in stoc") &&
                              "bg-primary"
                            } w-4 h-4 rounded-full border border-gray-300`}
                          />
                          <p>in stoc</p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => selectOutOfStock()}
                          className="flex items-center gap-4"
                        >
                          <span
                            className={`${
                              filters.availability.includes("stoc epuizat") &&
                              "bg-primary"
                            } w-4 h-4 rounded-full border border-gray-300`}
                          />
                          <p>stoc epuizat</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                {/* Availability modal */}

                {/* Price */}
                <button
                  onClick={() => {
                    if (showModal === 2) setShowModal(0);
                    else setShowModal(2);
                  }}
                  className={`${
                    showModal === 2 ? "border-gray-400" : "border-gray-300"
                  } relative border px-4 w-24 py-3 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p>Pret</p>
                    <BsChevronDown
                      className={`${
                        showModal === 2 && "rotate-180"
                      } text-sm transition-all duration-100`}
                    />
                  </div>
                </button>
                {/* Price */}

                {/* Price modal */}
                {showModal === 2 && (
                  <div className="absolute top-20 left-44 h-auto w-auto text-sm bg-white border border-gray-300 shadow-md">
                    <div className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
                      <button
                        onClick={() => {
                          resetPrice();
                        }}
                        className="underline"
                      >
                        Reseteaza
                      </button>
                    </div>
                    <div className="w-full flex items-center gap-2 p-2">
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="0"
                          value={filters.minPrice}
                          onChange={(ev) => handleChangeMinPrice(ev)}
                          className="w-32 h-8 pl-10 pr-2 border focus:border-gray-400 transition-all duration-200"
                        />
                        <span className="absolute left-2 top-[50%] text-gray-400 -translate-y-[50%]">
                          min
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="0"
                          value={filters.maxPrice}
                          onChange={(ev) => handleChangeMaxPrice(ev)}
                          className="w-32 h-8 pl-10 pr-2 border focus:border-gray-400 transition-all duration-200"
                        />
                        <span className="absolute left-2 top-[50%] text-gray-400 -translate-y-[50%]">
                          max
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Price modal */}

                {/* Subcategory */}
                <button
                  onClick={() => {
                    if (showModal === 3) setShowModal(0);
                    else setShowModal(3);
                  }}
                  className={`${
                    showModal === 3 ? "border-gray-400" : "border-gray-300"
                  } relative border px-4 py-3 w-24 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p>Tip</p>
                    <BsChevronDown
                      className={`${
                        showModal === 3 && "rotate-180"
                      } text-sm transition-all duration-100`}
                    />
                  </div>
                </button>
                {/* Subcategory */}

                {/* Subcategory modal */}
                {showModal === 3 && (
                  <div className="absolute top-20 left-72 h-auto w-auto bg-white border border-gray-300 shadow-md text-sm flex flex-col">
                    <div className="flex items-center gap-12 justify-between py-2 px-4 border-b border-gray-300">
                      <p>{filters.subCategories.length} selectate</p>
                      <button
                        onClick={() => {
                          resetSubCategories();
                        }}
                        className="underline"
                      >
                        Reseteaza
                      </button>
                    </div>
                    <ul className="w-full h-auto flex flex-col py-1">
                      {subCategories.map((subCategory) => {
                        return (
                          <li key={subCategory._id} className="px-4 py-1">
                            <button
                              onClick={() =>
                                selectSubCategory(subCategory.slug)
                              }
                              className="flex items-center gap-4"
                            >
                              <span
                                className={`${
                                  filters.subCategories.includes(
                                    `${subCategory.slug}`
                                  ) && "bg-primary"
                                } w-4 h-4 rounded-full border border-gray-300`}
                              />
                              <p>{subCategory.title}</p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {/* Subcategory modal */}

                {/* Brand */}
                <button
                  onClick={() => {
                    if (showModal === 4) setShowModal(0);
                    else setShowModal(4);
                  }}
                  className={`${
                    showModal === 4 ? "border-gray-400" : "border-gray-300"
                  } relative border px-4 py-3 w-36 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p>Brand</p>
                    <BsChevronDown
                      className={`${
                        showModal === 4 && "rotate-180"
                      } text-sm transition-all duration-100`}
                    />
                  </div>
                </button>
                {/* Brand */}

                {/* Brand modal */}
                {showModal === 4 && (
                  <div className="absolute top-20 left-[25rem] h-auto w-auto bg-white border border-gray-300 shadow-md text-sm flex flex-col">
                    <div className="flex items-center justify-between gap-12 py-2 px-4 border-b border-gray-300">
                      <p>{filters.brands.length} selectate</p>
                      <button
                        onClick={() => {
                          resetBrands();
                        }}
                        className="underline"
                      >
                        Reseteaza
                      </button>
                    </div>
                    <ul className="w-full h-auto flex flex-col py-1">
                      {brands.map((brand) => {
                        return (
                          <li key={brand._id} className="px-4 py-1">
                            <button
                              onClick={() => selectBrand(brand.title)}
                              className="flex items-center gap-4"
                            >
                              <span
                                className={`${
                                  filters.brands.includes(`${brand.title}`) &&
                                  "bg-primary"
                                } w-4 h-4 rounded-full border border-gray-300`}
                              />
                              <p>{brand.title}</p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {/* Brand modal */}
              </div>
            </section>
            <section>
              {/* Sort by */}
              <p className="mb-1 text-sm">Sortare dupa:</p>
              <button
                onClick={() => {
                  if (showModal === 5) setShowModal(0);
                  else setShowModal(5);
                }}
                className={`${
                  showModal === 5 ? "border-gray-400" : "border-gray-300"
                } relative border py-3 px-4 w-52 hover:border-gray-400 transition-all duration-200`}
              >
                <div className="flex items-center justify-between">
                  <p>{filters.sortBy}</p>
                  <BsChevronDown
                    className={`${
                      showModal === 5 && "rotate-180"
                    } text-sm transition-all duration-100`}
                  />
                </div>
              </button>
              {/* Sort by */}
            </section>
            {/* Sort by modal */}
            {showModal === 5 && (
              <div className="absolute top-20 right-0 h-auto w-52 bg-white border border-gray-300 shadow-md overflow-hidden">
                <ul className="flex flex-col">
                  <li className="w-full">
                    <button
                      onClick={() => {
                        selectSortBy("Recomandate");
                        setShowModal(0);
                      }}
                      className="w-full flex self-start py-3 px-4 hover:bg-cream transition-all duration-200"
                    >
                      Recomandate
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      onClick={() => {
                        selectSortBy("Pret descrescator");
                        setShowModal(0);
                      }}
                      className="w-full flex self-start py-3 px-4 hover:bg-cream transition-all duration-200"
                    >
                      Pret descrescator
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      onClick={() => {
                        selectSortBy("Pret crescator");
                        setShowModal(0);
                      }}
                      className="w-full flex self-start py-3 hover:bg-cream px-4 transition-all duration-200"
                    >
                      Pret crescator
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {/* Sort by modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPageFilters;
