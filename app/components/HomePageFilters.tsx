"use client";

import { useContext } from "react";

import { HomePageFiltersContext } from "../contexts/HomePageFiltersContext";
import { Category } from "../types/Category";

import { BsChevronDown } from "react-icons/bs";
import HomePageAppliedFilters from "./HomePageAppliedFilters";

interface FiltersProps {
  categories: Category[];
  products: any[];
}

const Filters: React.FC<FiltersProps> = () => {
  const {
    showModal,
    setShowModal,
    selectInStock,
    selectOutOfStock,
    selectSortBy,
    handleChangeMinPrice,
    handleChangeMaxPrice,
    resetAvailability,
    resetPrice,
    filters,
    showAppliedFilters,
  } = useContext(HomePageFiltersContext);

  return (
    <div
      className={`${
        showAppliedFilters
          ? "desktop:pb-10 laptop:pb-4"
          : "desktop:pb-32 laptop:pb-28"
      } w-full h-full`}
    >
      {showAppliedFilters ? (
        <div className="desktop:pl-32 laptop:pl-24 desktop:pr-2 laptop:pr-1 border desktop:py-2 laptop:py-1 rounded-full w-fit">
          <HomePageAppliedFilters />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="relative w-full flex justify-between">
            <section>
              <p className="laptop:text-sm desktop:mb-1">Filtre:</p>
              <div className="flex items-center gap-4 mb-1">
                {/* Availability */}
                <button
                  onClick={() => {
                    if (showModal === 1) setShowModal(0);
                    else setShowModal(1);
                  }}
                  className={`${
                    showModal === 1 ? "border-gray-400" : "border-gray-300"
                  } relative border desktop:w-40 laptop:w-36 laptop:px-4 desktop:py-3 laptop:py-2 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p className="desktop:text-base laptop:text-sm">
                      Valabilitate
                    </p>
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
                  <div className="absolute desktop:top-20 laptop:top-16 -left-0 desktop:text-sm laptop:text-xs h-auto desktop:w-80 laptop:w-64 bg-white border border-gray-300 shadow-md">
                    <div className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
                      <p>{filters.availability.length} selectate</p>
                      <button
                        className="underline"
                        onClick={() => {
                          resetAvailability();
                        }}
                      >
                        Reseteaza
                      </button>
                    </div>
                    <ul className="flex flex-col laptop:gap-2 items-start desktop:py-3 laptop:py-2 px-4">
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
                  } relative border laptop:w-24 laptop:px-4 desktop:py-3 laptop:py-2 hover:border-gray-400 transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <p className="desktop:text-base laptop:text-sm">Pret</p>
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
                  <div className="absolute desktop:top-20 laptop:top-16 desktop:left-44 laptop:left-40 h-auto w-auto desktop:text-sm laptop:text-xs bg-white border border-gray-300 shadow-md">
                    <div className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
                      <button
                        className="underline"
                        onClick={() => {
                          resetPrice();
                        }}
                      >
                        Reseteaza
                      </button>
                    </div>
                    <div className="w-full flex items-center desktop:gap-2 laptop:gap-1 desktop:p-2 laptop:p-1">
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="0"
                          value={filters.minPrice}
                          onChange={(event) => handleChangeMinPrice(event)}
                          className="desktop:w-32 laptop:w-28 desktop:h-8 laptop:h-6 pl-10 pr-2 border focus:border-gray-400 transition-all duration-200"
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
                          onChange={(event) => handleChangeMaxPrice(event)}
                          className="desktop:w-32 laptop:w-28 desktop:h-8 laptop:h-6 pl-10 pr-2 border focus:border-gray-400 transition-all duration-200"
                        />
                        <span className="absolute left-2 top-[50%] text-gray-400 -translate-y-[50%]">
                          max
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Price modal */}
              </div>
            </section>

            <section>
              <p className="desktop:mb-1 laptop:text-sm">Sortare dupa:</p>
              {/* Sort by */}
              <button
                onClick={() => {
                  if (showModal === 3) setShowModal(0);
                  else setShowModal(3);
                }}
                className={`${
                  showModal === 3 ? "border-gray-400" : "border-gray-300"
                } relative border desktop:w-52 laptop:w-48 laptop:px-4 desktop:py-3 laptop:py-2 py-3 px-4 hover:border-gray-400 transition-all duration-200`}
              >
                <div className="flex items-center justify-between">
                  <p className="desktop:text-base laptop:text-sm">
                    {filters.sortBy}
                  </p>
                  <BsChevronDown
                    className={`${
                      showModal === 3 && "rotate-180"
                    } text-sm transition-all duration-100`}
                  />
                </div>
              </button>
              {/* Sort by */}

              {/* Sort by modal */}
              {showModal === 3 && (
                <div className="absolute desktop:top-20 laptop:top-16 right-0 h-auto desktop:w-52 laptop:w-48 desktop:text-base laptop:text-sm bg-white border border-gray-300 shadow-md overflow-hidden">
                  <ul className="flex flex-col">
                    <li className="w-full">
                      <button
                        onClick={() => {
                          selectSortBy("Recomandate");
                          setShowModal(0);
                        }}
                        className="w-full flex self-start desktop:py-3 laptop:py-2 px-4 hover:bg-cream transition-all duration-200"
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
                        className="w-full flex self-start desktop:py-3 laptop:py-2 px-4 hover:bg-cream transition-all duration-200"
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
                        className="w-full flex self-start desktop:py-3 laptop:py-2 px-4 hover:bg-cream transition-all duration-200"
                      >
                        Pret crescator
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {/* Sort by modal */}
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
