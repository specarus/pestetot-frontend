"use client";

import { HomePageFiltersContext } from "../contexts/HomePageFiltersContext";

import { useContext, useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import BrandCard from "./BrandCard";

import Image from "next/image";

import FeaturedProducts from "./FeaturedProducts";

import { FaFilter } from "react-icons/fa";
import { Brand } from "../types/Brand";
import Link from "next/link";

interface HomePageProductsProps {
  products: any[];
  brands: Brand[];
}

const HomePageProducts: React.FC<HomePageProductsProps> = ({
  products,
  brands,
}) => {
  const { filters, setShowAppliedFilters } = useContext(HomePageFiltersContext);

  const filter = products.filter((product) => {
    if (filters.availability.length > 0) {
      if (filters.minPrice && filters.maxPrice) {
        return (
          filters.availability.includes(product.availability) &&
          filters.minPrice <= Number(product.options[0].price.split(" ")[0]) &&
          Number(product.options[0].price.split(" ")[0]) <= filters.maxPrice
        );
      }
      return filters.availability.includes(product.availability);
    } else if (filters.minPrice && filters.maxPrice) {
      if (filters.availability.length > 0) {
        return (
          filters.availability.includes(product.availability) &&
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

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const { resetAllFilters, setShowModal, showAppliedFilters } = useContext(
    HomePageFiltersContext
  );

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
    if (
      filters.availability.length > 0 ||
      (filters.minPrice && filters.maxPrice)
    ) {
      setShowAppliedFilters(true);
    }
    setShowModal(0);
  }

  function resetFilters() {
    setFilteredProducts(products);
    setShowAppliedFilters(false);
    resetAllFilters();
    setShowModal(0);
  }

  const [w, setW] = useState(window.innerWidth);

  window.onresize = function (event) {
    setW(window.innerWidth);
  };

  return (
    <div className="w-full h-full">
      {!showAppliedFilters && (
        <div className="absolute desktop:left-[23rem] laptop:left-[21rem] desktop:top-[10.7rem] laptop:top-[8.3rem] z-10 flex items-center gap-4">
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
        <button onClick={() => resetFilters()} className="">
          <p className="absolute desktop:left-28 laptop:left-[5.5rem] desktop:top-[9.5rem] laptop:top-[7.3rem] group desktop:text-sm laptop:text-xs">
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
          <div className="w-[90rem] border-b desktop:pb-1 desktop:text-base laptop:text-sm">
            <p>Niciun rezultat</p>
          </div>
        ) : w >= 1750 ? (
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
      <section className="desktop:px-20 laptop:px-16 border-t border-b desktop:pt-10 laptop:pt-8 desktop:mb-10 laptop:mb-8 desktop:pb-10 laptop:pb-8 bg-cream">
        <FeaturedProducts />
      </section>
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
      {w > 1750
        ? filteredProducts.length > 35
        : filteredProducts.length > 30 && (
            <section className="desktop:px-10 laptop:px-8">
              <div className="relative w-full h-80 border desktop:mb-10 laptop:mb-8">
                <Image
                  src="/assets/images/waves.jpg"
                  alt="Fishing"
                  width={2000}
                  height={2000}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" />
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

      {w > 1750
        ? filteredProducts.length > 56
        : filteredProducts.length > 48 && (
            <section>
              <div className="w-full desktop:px-20 laptop:px-16 desktop:py-10 laptop:py-8 bg-cream border-t border-b desktop:mb-10 laptop:mb-8">
                <div className="w-full flex desktop:gap-8 laptop:gap-4">
                  {brands.slice(0, 7).map((brand) => {
                    return (
                      <Link
                        href={`/catalog/brand/${brand.slug}`}
                        key={brand._id}
                        className="w-44 h-24 bg-white border border-gray-100 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 grid place-content-center transition-all duration-200"
                      >
                        <BrandCard brand={brand} />
                      </Link>
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
      {w > 1750
        ? filteredProducts.length > 77
        : filteredProducts.length > 66 && (
            <section>
              <div className="w-full desktop:px-20 laptop:px-16 desktop:py-10 laptop:py-8 bg-cream border-t border-b desktop:mb-10 laptop:mb-8">
                <div className="w-full flex desktop:gap-8 laptop:gap-4">
                  {brands.slice(7, 14).map((brand) => {
                    return (
                      <Link
                        href={`/catalog/brand/${brand.slug}`}
                        key={brand._id}
                        className="w-44 h-24 border border-gray-100 bg-white shadow-md rounded-md hover:shadow-lg hover:-translate-y-1 grid place-content-center transition-all duration-200"
                      >
                        <BrandCard brand={brand} />
                      </Link>
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

export default HomePageProducts;
