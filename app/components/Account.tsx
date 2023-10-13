"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import Loading from "../loading";
import UserForm from "./form/UserForm";

import { BsArrowLeft } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import Title from "./layout/Title";
import { RiDeleteBin7Line } from "react-icons/ri";

const Account = () => {
  const { user, isMounted, logout, setShowDeletePopup, isAdmin } =
    useContext(UserContext);

  if (!isMounted) {
    return <Loading />;
  }

  if (!user?._id) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full pb-96 relative">
          <p>Nu sunteti conectat!</p>
          <Link
            href="/"
            className="absolute bottom-10 left-0 rounded-full group flex justify-center w-44 py-2 bg-primary text-white"
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
    <div className="w-full h-full">
      {!!user && (
        <div className="relative w-full h-full">
          {isAdmin && (
            <ul className="absolute top-[8.5rem] -right-44 flex flex-col bg-white border w-40 rounded-md overflow-hidden">
              <li className="hover:bg-cream transition-all duration-200">
                <Link href="/admin" className="block w-full h-full py-2 px-4">
                  Dashboard
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/produse"
                  className="block w-full h-full py-2 px-4"
                >
                  Produse
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/categorii"
                  className="block w-full h-full py-2 px-4"
                >
                  Categorii
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/subcategorii"
                  className="block w-full h-full py-2 px-4"
                >
                  Subcategorii
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/branduri"
                  className="block w-full h-full py-2 px-4"
                >
                  Branduri
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/comenzi"
                  className="block w-full h-full py-2 px-4"
                >
                  Comenzi
                </Link>
              </li>
              <li className="hover:bg-cream transition-all duration-200">
                <Link
                  href="/admin/utilizatori"
                  className="block w-full h-full py-2 px-4"
                >
                  Utilizatori
                </Link>
              </li>
            </ul>
          )}

          <section className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <p>Acasa</p>
              <p className="text-primary">/</p>
              <p className="text-primary">Contul meu</p>
            </div>
            <div className="mb-14">
              <Title title="Contul meu" />
            </div>
          </section>
          <section className="mb-24">
            <UserForm />
          </section>
          <section className="w-full mb-20 flex gap-8 justify-end">
            <div className="w-fit flex items-center gap-8 border rounded-md py-4 px-8">
              <button
                onClick={() => logout()}
                className="flex items-center gap-2 group"
              >
                <SlLogout className="text-xl" />
                <p className="relative">
                  Deconecteaza-te
                  <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200" />
                </p>
              </button>

              <button
                onClick={() => setShowDeletePopup(true)}
                className="border rounded-full py-1 px-8 hover:text-red-500 hover:border-red-500 transition-all duration-200"
              >
                <p className="text-2xl">
                  <RiDeleteBin7Line />
                </p>
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Account;
