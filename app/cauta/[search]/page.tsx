"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import ProductCard from "@/app/components/ProductCard";

import type { Metadata } from "next";

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
    <div className="w-full h-full px-20 mb-20">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Cauta</p>
        </div>
      </section>
      <section className="border-b flex items-center gap-1 mb-10 select-none">
        <p>{filteredProducts.length}</p>
        <p>{filteredProducts.length === 1 ? "rezultat al" : "rezultate ale"}</p>
        <p>cautarii:</p>
        <span className="font-medium">
          &ldquo;{search.split("-").join(" ")}&rdquo;
        </span>
      </section>
      <section className="grid grid-cols-7 gap-x-4 gap-y-8">
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

export const metadata: Metadata = {
  title: "PesteTot | Cauta",
};
