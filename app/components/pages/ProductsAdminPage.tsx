"use client";

import Link from "next/link";

import axios from "axios";

import { useState, useEffect, useContext } from "react";

import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";

import Swal from "sweetalert2";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";

const ProductsAdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  async function deleteProduct(id: string, category: string) {
    const res = await axios.delete(`/api/products/${category}/${id}`);
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

  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
      <div className="relative w-full flex items-center justify-between desktop:mb-10 laptop:mb-8">
        <Link
          href="/contul-meu"
          className="absolute -left-14 top-0 desktop:w-8 laptop:w-7 desktop:h-8 laptop:h-7 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft className="desktop:text-base laptop:text-sm" />
        </Link>
        <div className="desktop:mb-14 laptop:mb-12">
          <Title title="Produse" />
        </div>
        <Link
          href="/admin/produse/adauga"
          className="group grid place-content-center"
        >
          <p className="relative desktop:text-base laptop:text-sm">
            Adauga un produs
            <span className="absolute bottom-[1px] left-0 group-hover:w-full w-0 h-[1px] bg-black transition-all duration-200" />
          </p>
        </Link>
      </div>
      <div className="border rounded-md overflow-hidden">
        <div className="w-full grid grid-cols-7 desktop:h-14 laptop:h-12 desktop:text-lg laptop:text-base">
          <div className="col-span-2 grid border-r place-content-center">
            Titlu
          </div>
          <div className="col-span-1 grid border-r place-content-center">
            Categorie
          </div>
          <div className="col-span-1 grid border-r place-content-center">
            Subcategorie
          </div>
          <div className="col-span-1 grid border-r place-content-center">
            Brand
          </div>
          <div className="col-span-1 h-full grid border-r place-content-center">
            Valabilitate
          </div>
          <div className="col-span-1 h-full" />
        </div>
        {products.map((product: any) => {
          return (
            <div
              key={product._id}
              className="w-full grid grid-cols-7 border-t desktop:h-9 laptop:h-8 desktop:text-base laptop:text-sm"
            >
              <div className="col-span-2 border-r grid place-content-center">
                {product.title}
              </div>
              <div className="col-span-1 border-r grid place-content-center capitalize">
                <p
                  className={`${
                    product.category === "lansete" && "bg-yellow-500"
                  } ${product.category === "mulinete" && "bg-orange-500"}  ${
                    product.category === "fire" && "bg-green-600"
                  } ${
                    product.category === "carlige" && "bg-gray-600"
                  } px-4 h-6 flex items-center rounded-full text-white`}
                >
                  {product.category}
                </p>
              </div>
              <div className="col-span-1 border-r grid place-content-center capitalize">
                <p
                  className={`${
                    product.subCategory === "vergi" && "bg-blue-500"
                  } ${product.subCategory === "bologneze" && "bg-purple-500"} ${
                    product.subCategory === "match" && "bg-green-800"
                  } ${
                    product.subCategory === "feeder-peeker" && "bg-red-800"
                  } ${product.subCategory === "spinning" && "bg-cyan-500"} ${
                    product.subCategory === "impletite-spinning" && "bg-red-300"
                  } ${
                    product.subCategory === "boilie" && "bg-yellow-800"
                  } px-4 h-6 flex items-center rounded-full text-white`}
                >
                  {product.subCategory.split("-").join(" ")}
                </p>
              </div>
              <div className="col-span-1 border-r grid place-content-center">
                {product.brand}
              </div>
              <div className="col-span-1 border-r grid place-content-center">
                <p
                  className={`${
                    product.availability === "in stoc"
                      ? "bg-green-500"
                      : "bg-red-400"
                  } px-4 rounded-full h-6 flex items-center text-white`}
                >
                  {product.availability}
                </p>
              </div>
              <div className="col-span-1 h-full flex items-center justify-center desktop:gap-4 laptop:gap-2">
                <Link
                  href={`/admin/produse/editare/${product.category}/${product._id}`}
                  className="flex items-center justify-center px-6 h-6 border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <p className="desktop:text-lg laptop:text-base">
                    <FiEdit3 />
                  </p>
                </Link>
                <button
                  onClick={() => deleteProduct(product._id, product.category)}
                  className="h-6 px-6 rounded-full border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-200"
                >
                  <p className="desktop:text-lg laptop:text-base">
                    <RiDeleteBin7Line />
                  </p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsAdminPage;
