"use client";

import Link from "next/link";

import axios from "axios";

import { useParams } from "next/navigation";

import { useContext, useEffect, useState } from "react";

import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";

import LansetaForm from "@/app/components/form/LansetaForm";
import MulinetaForm from "@/app/components/form/MulinetaForm";
import FirForm from "@/app/components/form/FirForm";
import CarligForm from "@/app/components/form/CarligForm";

const EditProductPage = () => {
  const [product, setProduct] = useState({} as any);

  const params = useParams();
  const { category } = params;
  const { id } = params;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`/api/products/edit/${category}/${id}`)
      .then((res) => setProduct(res.data));
  }, [category, id]);

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
          href="/admin/produse"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title={`Editeaza produsul din ${product?.category}`} />
        </div>
      </div>
      <div>
        {product?._id && product.category === "lansete" && (
          <LansetaForm {...product} />
        )}
        {product?._id && product.category === "mulinete" && (
          <MulinetaForm {...product} />
        )}
        {product?._id && product.category === "fire" && (
          <FirForm {...product} />
        )}
        {product?._id && product.category === "carlige" && (
          <CarligForm {...product} />
        )}
      </div>
    </div>
  );
};

export default EditProductPage;
