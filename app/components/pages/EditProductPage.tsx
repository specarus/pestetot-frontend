"use client";

import Link from "next/link";

import axios from "axios";

import { redirect, useParams } from "next/navigation";

import { useContext, useEffect, useState } from "react";

import { BsChevronLeft } from "react-icons/bs";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";

import LansetaForm from "@/app/components/form/LansetaForm";
import MulinetaForm from "@/app/components/form/MulinetaForm";
import FirForm from "@/app/components/form/FirForm";
import CarligForm from "@/app/components/form/CarligForm";
import Loading from "@/app/loading";

const EditProductPage = () => {
  const [product, setProduct] = useState({} as any);

  const params = useParams();
  const { category } = params;
  const { id } = params;

  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return <Loading />;
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products/edit/${category}/${id}`).then((res) => {
      setProduct(res.data);
      setIsMounted(true);
    });
  }, [category, id]);

  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
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
