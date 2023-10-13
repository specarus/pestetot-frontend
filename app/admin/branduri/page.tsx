"use client";

import Link from "next/link";

import { useState, useEffect, useContext } from "react";

import axios from "axios";

import { FiEdit3 } from "react-icons/fi";

import Swal from "sweetalert2";
import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { Brand } from "@/app/types/Brand";
import { UserContext } from "@/app/contexts/UserContext";
import { RiDeleteBin7Line } from "react-icons/ri";
import Title from "@/app/components/layout/Title";

import type { Metadata } from "next";

const BrandsAdminPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get("/api/brands").then((res) => setBrands(res.data));
  }, []);

  const { isAdmin } = useContext(UserContext);

  async function deleteBrand(id: string) {
    const res = await axios.delete(`/api/brands/${id}`);
    const data = res.data;
    if (data.status === "ok") {
      location.reload();
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
    }
  }

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
      <div className="relative w-full flex items-center justify-between mb-10">
        <Link
          href="/contul-meu"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Branduri" />
        </div>
        <Link
          href="/admin/branduri/adauga"
          className="group grid place-content-center"
        >
          <p className="relative">
            Adauga un brand
            <span className="absolute bottom-[1px] left-0 group-hover:w-full w-0 h-[1px] bg-black transition-all duration-200" />
          </p>
        </Link>
      </div>
      {brands && (
        <div className="w-[60%] border rounded-md overflow-hidden">
          <div className="w-full grid grid-cols-5 h-14 text-lg">
            <div className="col-span-1 border-r grid place-content-center">
              Titlu
            </div>
            <div className="col-span-1 grid place-content-center border-r">
              Slug
            </div>
            <div className="col-span-2 grid place-content-center border-r">
              Categorie
            </div>
            <div className="col-span-1 grid place-content-center" />
          </div>
          {brands.map((brand: Brand) => {
            return (
              <div
                key={brand._id}
                className="w-full grid grid-cols-5 border-t h-9"
              >
                <div className="col-span-1 border-r grid place-content-center capitalize">
                  {brand.title}
                </div>
                <div className="col-span-1 border-r grid place-content-center">
                  {brand.slug}
                </div>
                <div className="col-span-2 border-r grid place-content-center">
                  {brand.category}
                </div>
                <div className="col-span-1 h-full flex items-center justify-center gap-4">
                  <Link
                    href={`/admin/branduri/editare/${brand._id}`}
                    className="flex items-center justify-center px-6 h-6 border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <p className="text-lg">
                      <FiEdit3 />
                    </p>
                  </Link>
                  <button
                    onClick={() => deleteBrand(brand._id)}
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

export default BrandsAdminPage;

export const metadata: Metadata = {
  title: "PesteTot | Branduri",
};
