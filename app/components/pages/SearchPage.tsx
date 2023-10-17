"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import ProductCard from "@/app/components/ProductCard";

const SearchPage = () => {
  const params = useParams();
  const { search } = params;

  const [products, setProducts] = useState([] as any);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter((product: any) => {
    if (search) {
      return product.title.toLowerCase().includes(search.split("-").join(" "));
    }
  });

  return (
    <div className="w-full h-full">
      <section>
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Cauta</p>
        </div>
      </section>
      <section className="border-b flex items-center gap-1 desktop:mb-10 laptop:mb-8 select-none desktop:text-base laptop:text-sm">
        <p>{filteredProducts.length}</p>
        <p>{filteredProducts.length === 1 ? "rezultat al" : "rezultate ale"}</p>
        <p>cautarii:</p>
        <span className="font-medium">
          &ldquo;{search.split("-").join(" ")}&rdquo;
        </span>
      </section>
      <section className="grid desktop:grid-cols-7 laptop:grid-cols-6 desktop:gap-x-4 laptop:gap-x-3 desktop:gap-y-8 laptop:gap-y-5">
        {filteredProducts.map((product: any) => {
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

export default SearchPage;
