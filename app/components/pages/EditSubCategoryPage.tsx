"use client";

import Link from "next/link";

import axios from "axios";

import { redirect, useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SubCategory } from "@/app/types/SubCategory";
import SubCategoryForm from "@/app/components/form/SubCategoryForm";
import { BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";
import Loading from "@/app/loading";

const EditSubCategoryPage = () => {
  const params = useParams();
  const { id } = params;

  const [subCategory, setSubCategory] = useState({} as SubCategory);

  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return <Loading />;
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/subcategories/edit/${id}`).then((res) => {
      setSubCategory(res.data);
      setIsMounted(true);
    });
  }, [id]);

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
          <Title title="Editeaza subcategoria" />
        </div>
      </div>
      <div>{subCategory?._id && <SubCategoryForm {...subCategory} />}</div>
    </div>
  );
};

export default EditSubCategoryPage;
