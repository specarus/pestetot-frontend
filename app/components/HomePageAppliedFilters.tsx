"use client";

import { useContext, useEffect } from "react";

import { IoMdClose } from "react-icons/io";

import { HomePageFiltersContext } from "../contexts/HomePageFiltersContext";

const HomePageAppliedFilters = () => {
  const {
    filters,
    setShowAppliedFilters,
    resetPrice,
    removeSingleAvailability,
  } = useContext(HomePageFiltersContext);

  useEffect(() => {
    if (
      filters.availability.length === 0 &&
      !filters.maxPrice &&
      !filters.minPrice
    ) {
      setShowAppliedFilters(false);
    }
  }, [filters]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-4 select-none">
        {filters.availability.length > 0 &&
          filters.availability.map((item, id) => {
            return (
              <div
                key={id}
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
        {filters.minPrice && filters.maxPrice && (
          <div className="bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm">
            {"> " + filters.minPrice + " lei"}
          </div>
        )}
        {filters.maxPrice && filters.minPrice && (
          <div className="flex items-center gap-4 bg-yellow-500 text-white rounded-full laptop:px-4 laptop:py-1 desktop:text-base laptop:text-sm">
            <p>{"< " + filters.maxPrice + " lei"}</p>
            <button
              onClick={() => {
                resetPrice();
              }}
            >
              <IoMdClose className="desktop:text-lg laptop:text-base" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageAppliedFilters;
