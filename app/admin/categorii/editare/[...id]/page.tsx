"use client";

import axios from "axios";

import Link from "next/link";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryForm from "@/app/components/form/CategoryForm";

import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { Category } from "@/app/types/Category";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";

import type { Metadata } from "next";

const EditCategoryPage = () => {
  const params = useParams();
  const { id } = params;

  const [category, setCategory] = useState({} as Category);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`/api/categories/edit/${id}`)
      .then((res) => setCategory(res.data));
  }, [id]);

  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) {
    return (
      <div className="w-full h-full px-20">
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
    <div className="w-full h-full px-20 mb-40">
      <div className="relative mb-10">
        <Link
          href="/admin/categorii"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Editeaza categoria" />
        </div>
      </div>
      <div>{category?._id && <CategoryForm {...category} />}</div>
    </div>
  );
};

export default EditCategoryPage;

export const metadata: Metadata = {
  title: "PesteTot | Editeaza categoria",
};
