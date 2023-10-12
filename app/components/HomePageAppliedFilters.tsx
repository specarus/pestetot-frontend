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
                className="flex items-center gap-4 bg-yellow-500 text-white rounded-full px-4 py-1"
              >
                <p>{item}</p>
                <button
                  onClick={() => {
                    removeSingleAvailability(item);
                  }}
                >
                  <IoMdClose className="text-lg" />
                </button>
              </div>
            );
          })}
        {filters.minPrice && (
          <div className="bg-yellow-500 text-white rounded-full px-4 py-1">
            {"> " + filters.minPrice + " lei"}
          </div>
        )}
        {filters.maxPrice && (
          <div className="flex items-center gap-4 bg-yellow-500 text-white rounded-full px-4 py-1">
            <p>{"< " + filters.maxPrice + " lei"}</p>
            <button
              onClick={() => {
                resetPrice();
              }}
            >
              <IoMdClose className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageAppliedFilters;
