"use client";

import Link from "next/link";

import { useContext, useEffect, useState } from "react";

import { UserContext } from "@/app/contexts/UserContext";

import { BsChevronLeft } from "react-icons/bs";
import Title from "@/app/components/layout/Title";
import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const OrdersAdminPage = () => {
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
      <div className="relative mb-10">
        <Link
          href="/contul-meu"
          className="absolute -left-14 top-0 w-8 h-8 rounded-full border border-gray-300 grid place-content-center"
        >
          <BsChevronLeft />
        </Link>
        <div className="mb-14">
          <Title title="Comenzi" />
        </div>
      </div>
      <div>Comenzi</div>
    </div>
  );
};

export default OrdersAdminPage;
