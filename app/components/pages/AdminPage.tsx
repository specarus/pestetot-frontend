"use client";

import Link from "next/link";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/UserContext";

import { BsChevronLeft } from "react-icons/bs";
import Title from "../layout/Title";

import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const AdminPage = () => {
  const { isAdmin } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  if (!isAdmin) redirect("/contul-meu");

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
          <Title title="Dashboard" />
        </div>
      </div>
      <div>Statistici</div>
    </div>
  );
};

export default AdminPage;
