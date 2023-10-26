"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/UserContext";

import Loading from "@/app/loading";
import UserForm from "../form/UserForm";

import { signOut } from "next-auth/react";

import { SlLogout } from "react-icons/sl";
import Title from "../layout/Title";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CartContext } from "@/app/contexts/CartContext";
import Swal from "sweetalert2";

const AccountPage = () => {
  const { isMounted, setShowDeletePopup, isAdmin } = useContext(UserContext);

  const { clearCart } = useContext(CartContext);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full pl-20 pr-96">
      <div className="relative w-full h-full">
        {isAdmin && (
          <ul className="absolute desktop:top-[8.5rem] laptop:top-[6.4rem] desktop:-right-44 laptop:-right-40 flex flex-col bg-white border desktop:w-40 laptop:w-36 rounded-md overflow-hidden desktop:text-base laptop:text-sm">
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

        <section className="desktop:mb-6 laptop:mb-4">
          <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
            <p>Acasa</p>
            <p className="text-primary">/</p>
            <p className="text-primary">Contul meu</p>
          </div>
          <div className="desktop:mb-14 laptop:mb-10">
            <Title title="Contul meu" />
          </div>
        </section>
        <section className="desktop:mb-24 laptop:mb-16">
          <UserForm />
        </section>
        <section className="w-full desktop:mb-20 laptop:mb-16 flex desktop:gap-8 laptop:gap-4 justify-end">
          <div className="w-fit flex items-center desktop:gap-8 laptop:gap-6 border rounded-md desktop:py-4 laptop:py-2 desktop:px-8 laptop:px-6">
            <button
              onClick={() => {
                signOut();
                clearCart();
                Swal.fire({
                  position: "top",
                  timer: 2000,
                  backdrop: "transparent",
                  title: "V-ati deconectat cu succes!",
                  timerProgressBar: true,
                  showConfirmButton: false,
                  customClass: {
                    popup: "w-auto h-auto laptop:px-4 pb-2",
                    title: "text-sm font-normal",
                    timerProgressBar: "bg-red-500",
                  },
                });
              }}
              className="flex items-center gap-2 group"
            >
              <SlLogout className="desktop:text-xl laptop:text-lg" />
              <p className="relative desktop:text-base laptop:text-sm">
                Deconecteaza-te
                <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200" />
              </p>
            </button>

            <button
              onClick={() => setShowDeletePopup(true)}
              className="border rounded-full py-1 desktop:px-8 laptop:px-6 hover:text-red-500 hover:border-red-500 transition-all duration-200"
            >
              <p className="desktop:text-2xl laptop:text-xl">
                <RiDeleteBin7Line />
              </p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
