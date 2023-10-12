"use client";

import { HomePageFiltersContext } from "../contexts/HomePageFiltersContext";

import { useContext, useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import BrandCard from "./BrandCard";

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

  function shuffle(array: any) {
    const newArray = [...array];
    const length = newArray.length;

    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor(
        (newArray.length - start) * Math.random()
      );
      const randomItem = newArray.splice(randomPosition, 1);

      newArray.push(...randomItem);
    }

    return newArray;
  }

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

  return (
    <div className="w-full h-full mb-24">
      {!showAppliedFilters && (
        <div className="absolute left-[23rem] top-[10.7rem] z-10 flex items-center gap-4">
          {/* Apply button */}
          <button
            onClick={() => applyFilters()}
            className="text-white bg-yellow-500 px-4 py-2 rounded-full active:translate-y-[2px] transition-all duration-200"
          >
            <FaFilter className="text-sm" />
          </button>
          {/* Apply button */}
        </div>
      )}

      {/* Reset button */}
      {showAppliedFilters && (
        <button onClick={() => resetFilters()} className="">
          <p className="absolute left-28 top-[9.5rem] group text-sm">
            Reseteaza
            <span className="absolute bottom-[2px] left-0 w-0 bg-black h-[1px] group-hover:w-full transition-all duration-200" />
          </p>
        </button>
      )}
      {/* Reset button */}

      <section className="relative px-20 w-full grid grid-cols-7 gap-x-4 gap-y-8 mb-10">
        {filteredProducts.length > 0 && (
          <div className="absolute text-sm flex items-center gap-1 -top-8 left-20 select-none pointer-events-none">
            <p>{filteredProducts.length}</p>
            <p>{filteredProducts.length === 1 ? "produs" : "produse"}</p>
          </div>
        )}
        {filteredProducts.length === 0 ? (
          <div className="w-[90rem] border-b pb-1">
            <p>Niciun rezultat</p>
          </div>
        ) : (
          filteredProducts.slice(0, 14).map((product: any) => {
            return (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            );
          })
        )}
      </section>
      <section className="px-20 border-t border-b pt-10 mb-10 pb-10 bg-cream">
        <FeaturedProducts />
      </section>
      <section className="grid grid-cols-7 gap-x-4 gap-y-8 px-20 mb-10">
        {filteredProducts.slice(14, 35).map((product: any) => {
          return (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </section>
      {filteredProducts.length > 35 && (
        <section className="px-10">
          <div className="relative w-full h-80 border mb-10">
            <img
              src="/assets/images/waves.jpg"
              alt="Fishing"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" />
          </div>
        </section>
      )}
      <section className="grid grid-cols-7 gap-x-4 gap-y-8 px-20 mb-10">
        {filteredProducts.slice(35, 56).map((product: any) => {
          return (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </section>

      {filteredProducts.length > 56 && (
        <section>
          <div className="w-full px-20 py-10 bg-cream border-t border-b mb-10">
            <div className="w-full flex gap-8">
              {brands.slice(0, 7).map((brand) => {
                return (
                  <Link
                    href={`/catalog/brand/${brand.slug}`}
                    key={brand._id}
                    className="w-44 h-24 bg-white rounded-md shadow-md hover:shadow-lg hover:-translate-y-[2px] grid place-content-center transition-all duration-200"
                  >
                    <BrandCard brand={brand} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="grid grid-cols-7 gap-x-4 gap-y-8 px-20 mb-10">
        {filteredProducts.slice(56, 77).map((product: any) => {
          return (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </section>
      {filteredProducts.length > 77 && (
        <section>
          <div className="w-full px-20 py-10 bg-cream border-t border-b mb-10">
            <div className="w-full flex gap-8">
              {brands.slice(7, 14).map((brand) => {
                return (
                  <div
                    key={brand._id}
                    className="w-44 h-24 bg-white shadow-md rounded-md hover:shadow-lg hover:-translate-y-[2px] grid place-content-center transition-all duration-200"
                  >
                    <BrandCard brand={brand} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="grid grid-cols-7 gap-x-4 gap-y-8 px-20 mb-10">
        {filteredProducts
          .slice(77, filteredProducts.length)
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
