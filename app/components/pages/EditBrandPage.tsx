"use client";

import Link from "next/link";

import { UserContext } from "@/app/contexts/UserContext";

import { useParams } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Brand } from "@/app/types/Brand";

import BrandForm from "@/app/components/form/BrandForm";
import { BsChevronLeft } from "react-icons/bs";
import Title from "@/app/components/layout/Title";

import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const EditBrandPage = () => {
  const params = useParams();
  const { id } = params;

  const [brand, setBrand] = useState({} as Brand);

  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return <Loading />;
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/brands/edit/${id}`).then((res) => {
      setBrand(res.data);
      setIsMounted(true);
    });
  }, [id]);

  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
      <div className="relative mb-10">
        <Link
          href="/admin/branduri"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Editeaza brandul" />
        </div>
      </div>
      <div>{brand?._id && <BrandForm {...brand} />}</div>
    </div>
  );
};

export default EditBrandPage;
