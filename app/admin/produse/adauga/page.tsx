import { BsChevronLeft } from "react-icons/bs";

import Title from "@/app/components/layout/Title";
import Link from "next/link";

import { Category } from "@/app/types/Category";
import type { Metadata } from "next";

import axios from "axios";

const getCategories = async () => {
  const res = await axios.get("/api/categories");
  const data = res.data;
  return data;
};

const ChooseNewProductPage = async () => {
  const categories = await getCategories();

  return (
    <div className="w-full h-full px-20 mb-20">
      <div className="relative mb-10">
        <Link
          href="/admin/produse"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Alege o categorie" />
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-64 border flex flex-col h-fit rounded-md overflow-hidden">
          {categories.slice(0, 6).map((category: Category) => {
            return (
              <Link
                href={`/admin/produse/adauga/${category.slug}`}
                key={category._id}
                className="capitalize py-2 px-4 border-b last-of-type:border-none hover:bg-cream transition-all duration-200"
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <div className="w-64 border flex flex-col h-fit rounded-md overflow-hidden">
          {categories.slice(6, 12).map((category: Category) => {
            return (
              <Link
                href={`/admin/produse/adauga/${category.slug}`}
                key={category._id}
                className="capitalize py-2 px-4 border-b last-of-type:border-none hover:bg-cream transition-all duration-200"
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <div className="w-64 border flex flex-col h-fit rounded-md overflow-hidden">
          {categories.slice(12, 18).map((category: Category) => {
            return (
              <Link
                href={`/admin/produse/adauga/${category.slug}`}
                key={category._id}
                className="capitalize py-2 px-4 border-b last-of-type:border-none hover:bg-cream transition-all duration-200"
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <div className="w-64 border flex flex-col h-fit rounded-md overflow-hidden">
          {categories.slice(18, categories.length).map((category: Category) => {
            return (
              <Link
                href={`/admin/produse/adauga/${category.slug}`}
                key={category._id}
                className="capitalize py-2 px-4 border-b last-of-type:border-none hover:bg-cream transition-all duration-200"
              >
                {category.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseNewProductPage;

export const metadata: Metadata = {
  title: "PesteTot | Alege o categorie",
};
