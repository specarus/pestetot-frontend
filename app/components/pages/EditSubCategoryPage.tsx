"use client";

import Link from "next/link";

import axios from "axios";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SubCategory } from "@/app/types/SubCategory";
import SubCategoryForm from "@/app/components/form/SubCategoryForm";
import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";

const EditSubCategoryPage = () => {
  const params = useParams();
  const { id } = params;

  const [subCategory, setSubCategory] = useState({} as SubCategory);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`/api/subcategories/edit/${id}`)
      .then((res) => setSubCategory(res.data));
  }, [id]);

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
