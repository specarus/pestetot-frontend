import axios from "axios";

import type { Metadata } from "next";

import HomePageFilters from "./components/HomePageFilters";
import HomePageProducts from "./components/HomePageProducts";
import Title from "./components/layout/Title";

const getCategories = async () => {
  const res = await axios.get("/api/categories");
  const data = res.data;
  return data;
};

const getProducts = async () => {
  const res = await axios.get("/api/products");
  const data = res.data;
  return data;
};

const getBrands = async () => {
  const res = await axios.get("/api/brands");
  const data = res.data;
  return data;
};

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <div className="w-full h-full">
      {/* All products */}
      <section className="desktop:px-20 laptop:px-16 desktop:mb-6 laptop:mb-4">
        <div className="flex items-center gap-3 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p className="text-primary">Toate</p>
        </div>
        <div className="desktop:mb-14 laptop:mb-10">
          <Title title="Toate produsele" />
        </div>

        <div className="relative">
          <HomePageFilters categories={categories} products={products} />
        </div>
      </section>
      {/* All products */}

      {products && (
        <section className="desktop:mb-48 laptop:mb-32">
          <HomePageProducts products={products} brands={brands} />
        </section>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title: "PesteTot | Acasa",
};
