"use client";

import Link from "next/link";

import CategoryForm from "@/app/components/form/CategoryForm";

import { BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const NewCategoryPage = () => {
  const { isAdmin } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  if (!isAdmin) redirect("/");

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
