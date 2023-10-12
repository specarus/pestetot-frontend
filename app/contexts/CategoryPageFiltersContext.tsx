"use client";

import { createContext, useState } from "react";
import { IFilters } from "../types/CategoryPageFilters";

interface CategoryPageFiltersContextProps {
  showModal: number;
  setShowModal: (value: number) => void;
  filters: IFilters;
  setFilters: (value: IFilters) => void;
  selectSortBy: (value: string) => void;
  selectInStock: () => void;
  selectOutOfStock: () => void;
  selectSubCategory: (value: string) => void;
  selectBrand: (value: string) => void;
  resetAvailability: () => void;
  resetSubCategories: () => void;
  resetPrice: () => void;
  resetBrands: () => void;
  resetAllFilters: () => void;
  handleChangeMinPrice: (event: any) => void;
  handleChangeMaxPrice: (event: any) => void;
  showAppliedFilters: boolean;
  setShowAppliedFilters: (value: boolean) => void;
  removeSingleAvailability: (value: any) => void;
  removeSingleBrand: (value: any) => void;
  removeSingleSubCategory: (value: any) => void;
}

export const CategoryPageFiltersContext =
  createContext<CategoryPageFiltersContextProps>(null!);

const CategoryPageFiltersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showModal, setShowModal] = useState(0);
  const [showAppliedFilters, setShowAppliedFilters] = useState(false);

  const [filters, setFilters] = useState<any>({
    availability: [],
    subCategories: [],
    brands: [],
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

  function selectSortBy(sortBy: string) {
    setFilters((prev: IFilters) => {
      return { ...prev, sortBy: sortBy };
    });
  }

  function selectBrand(brandTitle: string) {
    setFilters((prev: IFilters) => {
      if (prev.brands.includes(brandTitle) === false) {
        return { ...prev, brands: [...prev.brands, `${brandTitle}`] };
      } else {
        return { ...prev };
      }
    });
  }

  function selectSubCategory(subCategoryTitle: string) {
    setFilters((prev: IFilters) => {
      if (prev.subCategories.includes(subCategoryTitle) === false) {
        return {
          ...prev,
          subCategories: [...prev.subCategories, `${subCategoryTitle}`],
        };
      } else {
        return { ...prev };
      }
    });
  }

  function resetSubCategories() {
    setFilters((prev: IFilters) => {
      return { ...prev, subCategories: [] };
    });
  }

  function resetBrands() {
    setFilters((prev: IFilters) => {
      return { ...prev, brands: [] };
    });
  }

  function resetAllFilters() {
    setFilters({
      subCategories: [],
      availability: [],
      brands: [],
      minPrice: "",
      maxPrice: "",
      sortBy: "Recomandate",
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

  function removeSingleBrand(brand: any) {
    const newBrands = filters.brands.filter((item: any) => item !== brand);

    setFilters((prev: IFilters) => {
      return { ...prev, brands: newBrands };
    });
  }

  function removeSingleSubCategory(subCategory: any) {
    const newSubCategories = filters.subCategories.filter(
      (item: any) => item !== subCategory
    );

    setFilters((prev: IFilters) => {
      return { ...prev, subCategories: newSubCategories };
    });
  }

  return (
    <CategoryPageFiltersContext.Provider
      value={{
        showModal,
        setShowModal,
        filters,
        setFilters,
        selectSortBy,
        selectInStock,
        selectOutOfStock,
        selectSubCategory,
        selectBrand,
        resetAvailability,
        resetPrice,
        resetAllFilters,
        resetSubCategories,
        resetBrands,
        handleChangeMinPrice,
        handleChangeMaxPrice,
        showAppliedFilters,
        setShowAppliedFilters,
        removeSingleAvailability,
        removeSingleBrand,
        removeSingleSubCategory,
      }}
    >
      {children}
    </CategoryPageFiltersContext.Provider>
  );
};

export default CategoryPageFiltersContextProvider;
