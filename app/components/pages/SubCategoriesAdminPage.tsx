"use client";

import Link from "next/link";

import axios from "axios";

import { FiEdit3 } from "react-icons/fi";

import { useState, useEffect, useContext } from "react";

import Swal from "sweetalert2";
import { BsChevronLeft } from "react-icons/bs";
import { SubCategory } from "@/app/types/SubCategory";
import { UserContext } from "@/app/contexts/UserContext";
import { RiDeleteBin7Line } from "react-icons/ri";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";

import Loading from "@/app/loading";

const SubCategoriesAdminPage = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    axios.get("/api/subcategories").then((res) => {
      setSubCategories(res.data);
      setIsMounted(true);
    });
  }, []);

  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  async function deleteSubCategory(id: string) {
    const res = await axios.delete(`/api/subcategories/${id}`);
    const data = res.data;
    if (data.status === "ok") {
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: "Sters!",
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-red-400",
        },
      });
      location.reload();
    }
  }

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full">
      <div className="relative w-full flex items-center justify-between mb-10">
        <Link
          href="/contul-meu"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Subcategorii" />
        </div>
        <Link
          href="/admin/subcategorii/adauga"
          className="group grid place-content-center"
        >
          <p className="relative">
            Adauga o subcategorie
            <span className="absolute bottom-[1px] left-0 group-hover:w-full w-0 h-[1px] bg-black transition-all duration-200" />
          </p>
        </Link>
      </div>
      {subCategories && (
        <div className="w-[85%] border rounded-md overflow-hidden">
          <div className="w-full grid grid-cols-6 h-14 text-lg">
            <div className="col-span-2 grid border-r place-content-center">
              Titlu
            </div>
            <div className="col-span-2 grid border-r place-content-center">
              Slug
            </div>
            <div className="col-span-1 border-r grid place-content-center">
              Categorie
            </div>
            <div className="col-span-1" />
          </div>
          {subCategories.map((subCategory: SubCategory) => {
            return (
              <div
                key={subCategory._id}
                className="w-full grid grid-cols-6 border-t h-9 hover:bg-cream transition-all duration-200"
              >
                <div className="col-span-2 border-r grid place-content-center capitalize">
                  {subCategory.title}
                </div>
                <div className="col-span-2 border-r grid place-content-center">
                  {subCategory.slug}
                </div>
                <div className="col-span-1 border-r grid place-content-center capitalize">
                  <p className="px-4 h-6 flex items-center rounded-full">
                    {subCategory.category.split("-").join(" ")}
                  </p>
                </div>
                <div className="col-span-1 h-full flex items-center justify-center gap-4">
                  <Link
                    href={`/admin/subcategorii/editare/${subCategory._id}`}
                    className="flex items-center justify-center px-6 h-6 border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <p className="text-lg">
                      <FiEdit3 />
                    </p>
                  </Link>
                  <button
                    onClick={() => deleteSubCategory(subCategory._id)}
                    className="h-6 px-6 rounded-full border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-200"
                  >
                    <p className="text-lg">
                      <RiDeleteBin7Line />
                    </p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubCategoriesAdminPage;
