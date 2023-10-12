"use client";

import { createContext, useState } from "react";
import { IFilters } from "../types/HomePageFilters";
import PreviousMap from "postcss/lib/previous-map";

interface HomePageFiltersContextProps {
  showModal: number;
  setShowModal: (value: number) => void;
  selectInStock: () => void;
  selectOutOfStock: () => void;
  selectSortBy: (value: string) => void;
  filters: IFilters;
  setFilters: (value: IFilters) => void;
  resetAvailability: () => void;
  resetPrice: () => void;
  resetAllFilters: () => void;
  handleChangeMinPrice: (event: any) => void;
  handleChangeMaxPrice: (event: any) => void;
  showAppliedFilters: boolean;
  setShowAppliedFilters: (value: boolean) => void;
  removeSingleAvailability: (value: any) => void;
}

export const HomePageFiltersContext =
  createContext<HomePageFiltersContextProps>(null!);

const HomePageFiltersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showModal, setShowModal] = useState(0);
  const [showAppliedFilters, setShowAppliedFilters] = useState(false);

  const [filters, setFilters] = useState<any>({
    availability: [],
    sortBy: "Recomandate",
  });

  function selectInStock() {
    setFilters((prev: IFilters) => {
      if (prev.availability.includes("in stoc") === false) {
        return { ...prev, availability: [...prev.availability, "in stoc"] };
      } else {
        return { ...prev };
      }
    });
  }

  function selectOutOfStock() {
    setFilters((prev: IFilters) => {
      if (prev.availability.includes("stoc epuizat") === false) {
        return {
          ...prev,
          availability: [...prev.availability, "stoc epuizat"],
        };
      } else {
        return { ...prev };
      }
    });
  }

  function resetAvailability() {
    setFilters((prev: IFilters) => {
      return { ...prev, availability: [] };
    });
  }

  function removeSingleAvailability(availability: any) {
    const newAvailability = filters.availability.filter(
      (item: any) => item !== availability
    );

    setFilters((prev: IFilters) => {
      return { ...prev, availability: newAvailability };
    });
  }

  function selectSortBy(sortBy: string) {
    setFilters((prev: IFilters) => {
      return { ...prev, sortBy: sortBy };
    });
  }

  function handleChangeMinPrice(event: any) {
    setFilters((prev: IFilters) => {
      return { ...prev, minPrice: event.target.value };
    });
  }

  function handleChangeMaxPrice(event: any) {
    setFilters((prev: IFilters) => {
      return { ...prev, maxPrice: event.target.value };
    });
  }

  function resetPrice() {
    setFilters((prev: IFilters) => {
      if (prev.minPrice && prev.maxPrice) {
        return { ...prev, minPrice: "", maxPrice: "" };
      } else {
        return { ...prev };
      }
    });
  }

  function resetAllFilters() {
    setFilters({
      availability: [],
      minPrice: "",
      maxPrice: "",
      sortBy: "Recomandate",
    });
  }

  return (
    <HomePageFiltersContext.Provider
      value={{
        showModal,
        setShowModal,
        selectInStock,
        selectOutOfStock,
        selectSortBy,
        filters,
        setFilters,
        resetAvailability,
        resetAllFilters,
        resetPrice,
        handleChangeMinPrice,
        handleChangeMaxPrice,
        showAppliedFilters,
        setShowAppliedFilters,
        removeSingleAvailability,
      }}
    >
      {children}
    </HomePageFiltersContext.Provider>
  );
};

export default HomePageFiltersContextProvider;
