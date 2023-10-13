"use client";

import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import Title from "../components/layout/Title";

import type { Metadata } from "next";

const AdminPage = () => {
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

export const metadata: Metadata = {
  title: "PesteTot |Dashboard",
};
