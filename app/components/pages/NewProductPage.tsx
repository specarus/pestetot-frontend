"use client";

import Link from "next/link";

import { BsChevronLeft } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";

import LansetaForm from "@/app/components/form/LansetaForm";
import MulinetaForm from "@/app/components/form/MulinetaForm";
import FirForm from "@/app/components/form/FirForm";
import CarligForm from "@/app/components/form/CarligForm";
import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const NewProductPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const { isAdmin } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  if (!isAdmin) redirect("/");

  return (
    <div className="w-full h-full">
      <div className="relative desktop:mb-10 laptop:mb-8">
        <Link
          href="/admin/produse/adauga"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title
            title={`Adauga un produs la ${category.split("-").join(" ")}`}
          />
        </div>
      </div>
      <div>
        {category === "lansete" && <LansetaForm />}
        {category === "mulinete" && <MulinetaForm />}
        {category === "fire" && <FirForm />}
        {category === "carlige" && <CarligForm />}
      </div>
    </div>
  );
};

export default NewProductPage;
