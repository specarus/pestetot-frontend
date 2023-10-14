"use client";

import Link from "next/link";

import CategoryForm from "@/app/components/form/CategoryForm";

import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";
import Title from "@/app/components/layout/Title";

const NewCategoryPage = () => {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full pb-96 relative">
          <p>Nu aveti acces!</p>
          <Link
            href="/"
            className="absolute bottom-10 left-0 rounded-full group flex justify-center w-44 py-2 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-x-96 transition-all duration-300">
              Mergeti inapoi
            </p>
            <p className="text-2xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
              <BsArrowLeft />
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="relative mb-10">
        <Link
          href="/admin/categorii"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Adauga o categorie" />
        </div>
      </div>
      <div>
        <CategoryForm />
      </div>
    </div>
  );
};

export default NewCategoryPage;
