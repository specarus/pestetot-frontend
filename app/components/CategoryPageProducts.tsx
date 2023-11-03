"use client";

import Image from "next/image";

import { useContext, useState, useEffect } from "react";

import { CategoryPageFiltersContext } from "../contexts/CategoryPageFiltersContext";

import { FaFilter } from "react-icons/fa";

import ProductCard from "./ProductCard";
import BrandCard from "./BrandCard";

import { Brand } from "../types/Brand";

interface CategoryPageProductsProps {
  products: any[];
  brands: Brand[];
}

const CategoryPageProducts: React.FC<CategoryPageProductsProps> = ({
  products,
  brands,
}) => {
  const { filters } = useContext(CategoryPageFiltersContext);

  const filter = products.filter((product) => {
    if (filters.availability.length > 0) {
      if (filters.minPrice || filters.maxPrice) {
        if (filters.brands.length > 0) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.brands.includes(product.brand) &&
              filters.subCategories.includes(product.subCategory)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.brands.includes(product.brand)
          );
        } else if (filters.subCategories.length > 0) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.brands.includes(product.brand) &&
              filters.subCategories.includes(product.subCategory)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory)
          );
        }
        return (
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice &&
          filters.availability.includes(product.availability)
        );
      } else if (filters.subCategories.length > 0) {
        if (filters.brands.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory) &&
            filters.brands.includes(product.brand)
          );
        } else if (filters.minPrice || filters.maxPrice) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory)
          );
        }
        return (
          filters.availability.includes(product.availability) &&
          filters.subCategories.includes(product.subCategory)
        );
      } else if (filters.brands.length > 0) {
        if (filters.subCategories.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.availability.includes(product.availability) &&
            filters.brands.includes(product.brand) &&
            filters.subCategories.includes(product.subCategory)
          );
        } else if (filters.minPrice || filters.maxPrice) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.brands.includes(product.brand) &&
            filters.availability.includes(product.availability)
          );
        }
        return (
          filters.availability.includes(product.availability) &&
          filters.brands.includes(product.brand)
        );
      }
      return filters.availability.includes(product.availability);
    } else if (filters.subCategories.length > 0) {
      if (filters.minPrice || filters.maxPrice) {
        if (filters.availability.length > 0) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        } else if (filters.brands.length > 0) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand) &&
              filters.availability.includes(product.availability)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.subCategories.includes(product.subCategory) &&
            filters.brands.includes(product.brand)
          );
        }
        return (
          filters.subCategories.includes(product.subCategory) &&
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
        );
      } else if (filters.availability.length > 0) {
        if (filters.minPrice || filters.maxPrice) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory)
          );
        } else if (filters.brands.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory) &&
            filters.brands.includes(product.brand)
          );
        }
        return (
          filters.availability.includes(product.availability) &&
          filters.subCategories.includes(product.subCategory)
        );
      } else if (filters.brands.length > 0) {
        if (filters.minPrice || filters.maxPrice) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.brands.includes(product.brand) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
          );
        } else if (filters.availability.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.brands.includes(product.brand) &&
            filters.availability.includes(product.availability)
          );
        }
        return (
          filters.subCategories.includes(product.subCategory) &&
          filters.brands.includes(product.brand)
        );
      }
      return filters.subCategories.includes(product.subCategory);
    } else if (filters.brands.length > 0) {
      if (filters.availability.length > 0) {
        if (filters.maxPrice && filters.minPrice) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.brands.includes(product.brand)
          );
        } else if (filters.subCategories.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.availability.includes(product.availability) &&
            filters.brands.includes(product.brand)
          );
        }
        return (
          filters.availability.includes(product.availability) &&
          filters.brands.includes(product.brand)
        );
      } else if (filters.subCategories.length > 0) {
        if (filters.availability.length > 0) {
          if (filters.minPrice || filters.maxPrice) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.brands.includes(product.brand) &&
            filters.subCategories.includes(product.subCategory) &&
            filters.availability.includes(product.availability)
          );
        } else if (filters.minPrice || filters.maxPrice) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.brands.includes(product.brand) &&
            filters.subCategories.includes(product.subCategory)
          );
        }
        return (
          filters.brands.includes(product.brand) &&
          filters.subCategories.includes(product.subCategory)
        );
      } else if (filters.minPrice || filters.maxPrice) {
        if (filters.availability.length > 0) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.brands.includes(product.brand) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        } else if (filters.subCategories.length > 0) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.brands.includes(product.brand) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.subCategories.includes(product.subCategory)
          );
        }
        return (
          filters.brands.includes(product.brand) &&
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
        );
      }
      return filters.brands.includes(product.brand);
    } else if (filters.minPrice || filters.maxPrice) {
      if (filters.availability.length > 0) {
        if (filters.subCategories.length > 0) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability) &&
            filters.subCategories.includes(product.subCategory)
          );
        } else if (filters.brands.length > 0) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.brands.includes(product.brand) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        }
        return (
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice &&
          filters.availability.includes(product.availability)
        );
      } else if (filters.subCategories.length > 0) {
        if (filters.brands.length > 0) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.brands.includes(product.brand)
          );
        } else if (filters.availability.length > 0) {
          if (filters.brands.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        }
        return (
          filters.subCategories.includes(product.subCategory) &&
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
        );
      } else if (filters.brands.length > 0) {
        if (filters.availability.length > 0) {
          if (filters.subCategories.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.brands.includes(product.brand) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        } else if (filters.subCategories.length > 0) {
          if (filters.availability.length > 0) {
            return (
              filters.minPrice <=
                Number(product.options[0].price.split(" ")[0]) &&
              Number(product.options[0].price.split(" ")[0]) <=
                filters.maxPrice &&
              filters.availability.includes(product.availability) &&
              filters.subCategories.includes(product.subCategory) &&
              filters.brands.includes(product.brand)
            );
          }
          return (
            filters.subCategories.includes(product.subCategory) &&
            filters.minPrice <=
              Number(product.options[0].price.split(" ")[0]) &&
            Number(product.options[0].price.split(" ")[0]) <=
              filters.maxPrice &&
            filters.availability.includes(product.availability)
          );
        }
        return (
          filters.brands.includes(product.brand) &&
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
        );
      }
      return (
        filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
        Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
      );
    } else return product;
  });

  const sort =
    filters.sortBy === "Pret crescator"
      ? filter.sort(
          (a, b) =>
            Math.min(
              ...a.options.map((option: any) =>
                Number(option.price.split(" ")[0])
              )
            ) -
            Math.min(
              ...b.options.map((option: any) =>
                Number(option.price.split(" ")[0])
              )
            )
        )
      : filters.sortBy === "Pret descrescator"
      ? filter.sort(
          (a, b) =>
            Math.min(
              ...b.options.map((option: any) =>
                Number(option.price.split(" ")[0])
              )
            ) -
            Math.min(
              ...a.options.map((option: any) =>
                Number(option.price.split(" ")[0])
              )
            )
        )
      : filter;

  const [imageSlider, setImageSlider] = useState("");

  function slideLeft() {
    setImageSlider("");
  }

  function slideRight() {
    setImageSlider("-translate-x-[50%]");
  }

  const [filteredProducts, setFilteredProducts] = useState([] as any[]);

  const {
    resetAllFilters,
    setShowModal,
    showAppliedFilters,
    setShowAppliedFilters,
  } = useContext(CategoryPageFiltersContext);

  useEffect(() => {
    if (showAppliedFilters) {
      setFilteredProducts(sort);
    }
  }, [filters]);

  useEffect(() => {
    setFilteredProducts(sort);
  }, [filters.sortBy]);

  useEffect(() => {
    setFilteredProducts(sort);
    resetAllFilters();
  }, []);

  function applyFilters() {
    setFilteredProducts(sort);
    setShowModal(0);

    if (
      filters.availability.length > 0 ||
      (filters.minPrice && filters.maxPrice) ||
      filters.subCategories.length > 0 ||
      filters.brands.length > 0
    ) {
      setShowAppliedFilters(true);
    }
  }

  function resetFilters() {
    setFilteredProducts(products);
    resetAllFilters();
    setShowModal(0);
    setShowAppliedFilters(false);
  }

  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setW(window.innerWidth);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.onresize = function (event) {
      setW(window.innerWidth);
    };
  }

  return (
    <div className="w-full h-full">
      {!showAppliedFilters && (
        <div className="absolute desktop:left-[40rem] desktop:top-[10.7rem] laptop:left-[36rem] laptop:top-[8.3rem] z-10 flex items-center gap-4">
          {/* Apply button */}
          <button
            onClick={() => applyFilters()}
            className="text-white bg-yellow-500 desktop:px-4 laptop:px-2 desktop:py-2 laptop:py-1 rounded-full active:translate-y-[2px] transition-all duration-200"
          >
            <FaFilter className="desktop:text-sm laptop:text-xs" />
          </button>
          {/* Apply button */}
        </div>
      )}

      {/* Reset button */}
      {showAppliedFilters && (
        <button onClick={() => resetFilters()}>
          <p className="absolute desktop:left-28 laptop:left-[5.5rem] desktop:top-[9.5rem] laptop:top-[7.2rem] group desktop:text-sm laptop:text-xs">
            Reseteaza
            <span className="absolute bottom-[2px] left-0 w-0 bg-black h-[1px] group-hover:w-full transition-all duration-200" />
          </p>
        </button>
      )}
      {/* Reset button */}

      <section className="relative desktop:px-20 laptop:px-16 w-full grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5 desktop:mb-10 laptop:mb-8">
        {filteredProducts.length > 0 && (
          <div className="absolute desktop:text-sm laptop:text-xs flex items-center gap-1 desktop:-top-8 laptop:-top-6 desktop:left-20 laptop:left-16 select-none pointer-events-none">
            <p>{filteredProducts.length}</p>
            <p>{filteredProducts.length === 1 ? "produs" : "produse"}</p>
          </div>
        )}
        {filteredProducts.length === 0 ? (
          <div className="w-[90rem] laptop:w-[65rem] border-b desktop:pb-1 desktop:text-base laptop:text-sm">
            <p>Niciun rezultat</p>
          </div>
        ) : w > 1750 ? (
          filteredProducts.slice(0, 14).map((product: any) => {
            return (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            );
          })
        ) : (
          filteredProducts.slice(0, 12).map((product: any) => {
            return (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            );
          })
        )}
      </section>
      {(w > 1750
        ? filteredProducts.length > 14
        : filteredProducts.length > 12) && (
        <section className="desktop:px-10 laptop:px-8">
          <div className="relative w-full flex desktop:h-80 laptop:h-72 desktop:mb-10 laptop:mb-8 border">
            <Image
              src="/assets/images/boat-top.jpg"
              className="w-full h-full object-cover"
              width={2000}
              height={2000}
              alt="Fishing"
            />
            <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" />

            <div className="absolute top-0 right-0 desktop:w-[35%] laptop:w-[45%] h-full bg-black bg-opacity-30 desktop:p-4 laptop:p-6">
              <p className="w-full h-full desktop:text-7xl laptop:text-6xl font-medium text-white">
                Cine se trezeste de dimineata, prinde peste!
              </p>
            </div>
          </div>
        </section>
      )}
      <section className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5 desktop:mb-10 laptop:mb-8 desktop:px-20 laptop:px-16">
        {w > 1750
          ? filteredProducts.slice(14, 35).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })
          : filteredProducts.slice(12, 30).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
      </section>
      {(w > 1750
        ? filteredProducts.length > 35
        : filteredProducts.length > 30) && (
        <section className="relative desktop:px-16 laptop:px-8 pb-4">
          <div className="w-full desktop:h-80 laptop:h-72 desktop:mb-10 laptop:mb-8 border overflow-hidden">
            <div
              className={`relative w-[200%] flex h-full ${imageSlider} transition-all duration-700 ease-in-out`}
            >
              <Image
                src="/assets/images/boat-on-water.jpg"
                className="w-full h-full object-cover"
                width={2000}
                height={2000}
                alt="Fishing"
              />
              <Image
                src="/assets/images/sunset-2.jpg"
                className="w-full h-full object-cover"
                width={2000}
                height={2000}
                alt="Fishing"
              />
              <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" />
            </div>
          </div>

          <div className="absolute bottom-8 left-[50%] -translate-x-[50%] flex desktop:gap-4 laptop:gap-2">
            <button
              onClick={() => slideLeft()}
              className={`${
                imageSlider === "" ? "bg-yellow-500" : "bg-gray-300"
              } desktop:w-[10px] laptop:w-[8px] desktop:h-[10px] laptop:h-[8px] rounded-full transition-all duration-200`}
            />
            <button
              onClick={() => slideRight()}
              className={`${
                imageSlider === "-translate-x-[50%]"
                  ? "bg-yellow-500"
                  : "bg-gray-300"
              } desktop:w-[10px] laptop:w-[8px] desktop:h-[10px] laptop:h-[8px] rounded-full transition-all duration-200`}
            />
          </div>
        </section>
      )}
      <section className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5 desktop:mb-10 laptop:mb-8 desktop:px-20 laptop:px-16">
        {w > 1750
          ? filteredProducts.slice(35, 56).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })
          : filteredProducts.slice(30, 48).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
      </section>
      {(w > 1750
        ? filteredProducts.length > 56
        : filteredProducts.length > 48) && (
        <section>
          <div className="w-full desktop:px-20 laptop:px-16 desktop:py-10 laptop:py-8 bg-cream border-t border-b desktop:mb-10 laptop:mb-8">
            <div className="w-full flex desktop:gap-8 laptop:gap-4">
              {brands.slice(7, 14).map((brand) => {
                return (
                  <div
                    key={brand._id}
                    className="w-44 desktop:h-24 laptop:h-20 border border-gray-100 bg-white shadow-md rounded-md hover:shadow-lg hover:-translate-y-1 grid place-content-center transition-all duration-200"
                  >
                    <BrandCard brand={brand} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5 desktop:mb-10 laptop:mb-8 desktop:px-20 laptop:px-16">
        {w > 1750
          ? filteredProducts.slice(56, 77).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })
          : filteredProducts.slice(48, 66).map((product: any) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
      </section>
      {(w > 1750
        ? filteredProducts.length > 77
        : filteredProducts.length > 66) && (
        <section>
          <div className="w-full desktop:px-20 laptop:px-16 desktop:py-10 laptop:py-8 bg-cream border-t border-b desktop:mb-10 laptop:mb-8">
            <div className="w-full flex desktop:gap-8 laptop:gap-4">
              {brands.slice(14, 21).map((brand) => {
                return (
                  <div
                    key={brand._id}
                    className="w-44 desktop:h-24 laptop:h-20 bg-white border border-gray-100 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 grid place-content-center transition-all duration-200"
                  >
                    <BrandCard brand={brand} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5 desktop:mb-10 laptop:mb-8 desktop:px-20 laptop:px-16">
        {w > 1750
          ? filteredProducts
              .slice(77, filteredProducts.length)
              .map((product: any) => {
                return (
                  <div key={product._id}>
                    <ProductCard product={product} />
                  </div>
                );
              })
          : filteredProducts
              .slice(66, filteredProducts.length)
              .map((product: any) => {
                return (
                  <div key={product._id}>
                    <ProductCard product={product} />
                  </div>
                );
              })}
      </section>
    </div>
  );
};

export default CategoryPageProducts;
