"use client";

import Link from "next/link";

import SubCategoryForm from "@/app/components/form/SubCategoryForm";

import { BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";

const NewSubCategoryPage = () => {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
      <div className="relative mb-10">
        <Link
          href="/admin/subcategorii"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Adauga o subcategorie" />
        </div>
      </div>
      <div>
        <SubCategoryForm />
      </div>
    </div>
  );
};

export default NewSubCategoryPage;
