"use client";

import { useEffect, useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import ProductCard from "./ProductCard";
import Image from "next/image";
import Title from "./layout/Title";

interface FeaturedProductsProps {
  productId: string;
  products: any[];
}

const DetailsPageProducts: React.FC<FeaturedProductsProps> = ({
  productId,
  products,
}) => {
  const product = products.find((product) => {
    return productId === product._id;
  });

  const [carousel, setCarousel] = useState("");

  useEffect(() => {
    setCarousel("translate-x-0");
  }, []);

  function slideLeft() {
    setCarousel("translate-x-0");
  }

  function slideRight() {
    setCarousel("-translate-x-[50%]");
  }

  const [w, setW] = useState(1920);

  window.onresize = function (event) {
    if (typeof window !== "undefined") setW(window.innerWidth);
  };

  return (
    <div className="w-full">
      <section className="relative w-full desktop:h-40 laptop:h-36 desktop:mb-10 laptop:mb-8 select-none pointer-events-none border-t-2 border-b-2 border-primary">
        <Image
          width={1000}
          height={500}
          src="/assets/images/fisherman.jpg"
          alt="Fishing"
          className="w-full h-full object-cover"
        />
      </section>

      <div className="desktop:px-20 laptop:px-16 desktop:mb-10 laptop:mb-8">
        <Title
          title={`Alte ${product?.category.split("-").join(" ")} 
            ${product?.subCategory.split("-").join(" ")}`}
        />
      </div>
      <div className="w-full relative desktop:px-16 laptop:px-12">
        <div className="w-full desktop:h-80 laptop:h-64 overflow-x-hidden">
          <div
            className={`w-[200%] flex px-4 desktop:gap-4 laptop:gap-2 ${carousel} transition-all duration-700 ease-in-out`}
          >
            <div className="w-full grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-2">
              {w > 1750
                ? products
                    .filter((product) => product._id !== productId)
                    .slice(0, 7)
                    .map((product) => {
                      return (
                        <div key={product._id}>
                          <ProductCard product={product} />
                        </div>
                      );
                    })
                : products
                    .filter((product) => product._id !== productId)
                    .slice(0, 6)
                    .map((product) => {
                      return (
                        <div key={product._id}>
                          <ProductCard product={product} />
                        </div>
                      );
                    })}
            </div>
            <div className="w-full grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-2">
              {w > 1750
                ? products
                    .filter((product) => product._id !== productId)
                    .slice(7, 14)
                    .map((product) => {
                      return (
                        <div key={product._id}>
                          <ProductCard product={product} />
                        </div>
                      );
                    })
                : products
                    .filter((product) => product._id !== productId)
                    .slice(6, 12)
                    .map((product) => {
                      return (
                        <div key={product._id}>
                          <ProductCard product={product} />
                        </div>
                      );
                    })}
            </div>
          </div>
        </div>
        {(w > 1750
          ? products.filter((product) => product._id !== productId).length > 7
          : products.filter((product) => product._id !== productId).length >
            6) && (
          <div>
            <button
              onClick={() => slideLeft()}
              className={`${
                carousel === "translate-x-0" ? "" : "active:top-[51%]"
              } absolute top-[50%] -translate-y-[50%] desktop:left-6 laptop:left-4 bg-white border border-gray-300 desktop:w-8 desktop:h-8 laptop:w-6 laptop:h-6 grid place-content-center rounded-full`}
            >
              <BsChevronLeft
                className={`${
                  carousel === "translate-x-0" && "text-gray-300"
                } desktop:text-lg laptop:text-sm transition-all duration-200`}
              />
            </button>
            <button
              onClick={() => slideRight()}
              className={`${
                carousel === "-translate-x-[50%]" ? "" : "active:top-[51%]"
              } absolute top-[50%] -translate-y-[50%] desktop:right-6 laptop:right-4 bg-white border border-gray-300 desktop:w-8 desktop:h-8 laptop:w-6 laptop:h-6 grid place-content-center rounded-full`}
            >
              <BsChevronRight
                className={`${
                  carousel === "-translate-x-[50%]" && "text-gray-300"
                } desktop:text-lg laptop:text-sm transition-all duration-200`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPageProducts;
