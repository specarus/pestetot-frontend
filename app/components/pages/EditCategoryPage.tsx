"use client";

import axios from "axios";

import Link from "next/link";

import { redirect, useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryForm from "@/app/components/form/CategoryForm";

import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { Category } from "@/app/types/Category";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";
import Loading from "@/app/loading";
const EditCategoryPage = () => {
  const params = useParams();
  const { id } = params;

  const [category, setCategory] = useState({} as Category);

  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return <Loading />;
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/categories/edit/${id}`).then((res) => {
      setCategory(res.data);
      setIsMounted(true);
    });
  }, [id]);

  const { isAdmin } = useContext(UserContext);

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
          <Title title="Editeaza categoria" />
        </div>
      </div>
      <div>{category?._id && <CategoryForm {...category} />}</div>
    </div>
  );
};

export default EditCategoryPage;
