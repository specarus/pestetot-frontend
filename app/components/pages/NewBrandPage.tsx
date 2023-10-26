"use client";

import Link from "next/link";

import { useContext } from "react";

import BrandForm from "@/app/components/form/BrandForm";
import { UserContext } from "@/app/contexts/UserContext";
import { BsChevronLeft } from "react-icons/bs";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";

const NewBrandPage = () => {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
      <div className="relative mb-10">
        <Link
          href="/admin/branduri"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Adauga un brand" />
        </div>
      </div>
      <div>
        <BrandForm />
      </div>
    </div>
  );
};

export default NewBrandPage;
