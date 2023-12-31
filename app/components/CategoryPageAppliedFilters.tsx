"use client";

import { useContext, useEffect } from "react";

import { IoMdClose } from "react-icons/io";

import { CategoryPageFiltersContext } from "../contexts/CategoryPageFiltersContext";

const CategoryPageAppliedFilters = () => {
  const {
    filters,
    setShowAppliedFilters,
    resetPrice,
    removeSingleAvailability,
    removeSingleBrand,
    removeSingleSubCategory,
  } = useContext(CategoryPageFiltersContext);

  useEffect(() => {
    if (
      filters.availability.length === 0 &&
      !filters.maxPrice &&
      !filters.minPrice &&
      filters.brands.length === 0 &&
      filters.subCategories.length === 0
    ) {
      setShowAppliedFilters(false);
    }
  }, [filters]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-4 select-none">
        {filters.availability.length > 0 &&
          filters.availability.map((item) => {
            return (
              <div
                key={item}
                className="flex items-center gap-4 bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm"
              >
                <p>{item}</p>
                <button
                  onClick={() => {
                    removeSingleAvailability(item);
                  }}
                >
                  <IoMdClose className="desktop:text-lg laptop:text-base" />
                </button>
              </div>
            );
          })}
        {filters.minPrice && (
          <div className="bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm">
            {"> " + filters.minPrice + " lei"}
          </div>
        )}
        {filters.maxPrice && (
          <div className="flex items-center gap-4 bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm">
            <p>{"< " + filters.maxPrice + " lei"}</p>
            <button onClick={() => resetPrice()}>
              <IoMdClose className="desktop:text-lg laptop:text-base" />
            </button>
          </div>
        )}
        {filters.subCategories.length > 0 &&
          filters.subCategories.map((subCategory) => {
            return (
              <div
                key={subCategory}
                className="flex items-center gap-4 bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm"
              >
                <p>{subCategory.split("-").join(" ")}</p>
                <button onClick={() => removeSingleSubCategory(subCategory)}>
                  <IoMdClose className="desktop:text-lg laptop:text-base" />
                </button>
              </div>
            );
          })}
        {filters.brands.length > 0 &&
          filters.brands.map((brand) => {
            return (
              <div
                key={brand}
                className="flex items-center gap-4 bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm"
              >
                <p>{brand}</p>
                <button onClick={() => removeSingleBrand(brand)}>
                  <IoMdClose className="desktop:text-lg laptop:text-base" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPageAppliedFilters;
