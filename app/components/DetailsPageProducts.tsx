"use client";

import { useEffect, useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import ProductCard from "./ProductCard";
import Image from "next/image";

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

  return (
    <div className="w-full">
      <section className="relative w-full h-40 mb-10 select-none pointer-events-none border-t-2 border-b-2 border-primary">
        <Image
          width={1000}
          height={500}
          src="/assets/images/fisherman.jpg"
          alt="Fishing"
          className="w-full h-full object-cover"
        />
      </section>

      <div className="px-20 mb-10">
        <div className="text-2xl uppercase border-l-4 border-primary pl-2">
          <h2>Alte {product?.category.split("-").join(" ")}</h2>
        </div>
      </div>
      <div className="w-full relative px-16">
        <div className="w-full h-80 overflow-x-hidden">
          <div
            className={`w-[200%] flex px-4 gap-4 ${carousel} transition-all duration-700 ease-in-out`}
          >
            <div className="w-full grid grid-cols-7 gap-x-4">
              {products
                .filter((product) => product._id !== productId)
                .slice(0, 7)
                .map((product) => {
                  return (
                    <div key={product._id}>
                      <ProductCard product={product} />
                    </div>
                  );
                })}
            </div>
            <div className="w-full grid grid-cols-7 gap-x-4">
              {products
                .filter((product) => product._id !== productId)
                .slice(7, 14)
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
        {products.filter((product) => product._id !== productId).length > 7 && (
          <div>
            <button
              onClick={() => slideLeft()}
              className={`${
                carousel === "translate-x-0" ? "" : "active:top-[51%]"
              } absolute top-[50%] -translate-y-[50%] left-6 bg-white border border-gray-300 w-8 h-8 grid place-content-center rounded-full`}
            >
              <BsChevronLeft
                className={`${
                  carousel === "translate-x-0" && "text-gray-300"
                } text-lg transition-all duration-200`}
              />
            </button>
            <button
              onClick={() => slideRight()}
              className={`${
                carousel === "-translate-x-[50%]" ? "" : "active:top-[51%]"
              } absolute top-[50%] -translate-y-[50%] right-6 bg-white border border-gray-300 w-8 h-8 grid place-content-center rounded-full`}
            >
              <BsChevronRight
                className={`${
                  carousel === "-translate-x-[50%]" && "text-gray-300"
                } text-lg transition-all duration-200`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPageProducts;
