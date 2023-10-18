"use client";

import Link from "next/link";

import { useState } from "react";

import { Category } from "@/app/types/Category";

import Search from "../Search";
import Cart from "../Cart";
import Logo from "./Logo";

import { useContext } from "react";
import { usePathname } from "next/navigation";

import { IoSearchOutline } from "react-icons/io5";

import { CartContext } from "@/app/contexts/CartContext";
import { SidebarContext } from "@/app/contexts/SidebarContext";
import { UserContext } from "@/app/contexts/UserContext";

interface SidebarProps {
  categories: Category[];
  products: any[];
}

const Sidebar: React.FC<SidebarProps> = ({ categories, products }) => {
  const pathname = usePathname();

  // search
  const [search, setSearch] = useState("");

  // const searchInput = document.getElementById("searchInput");

  const {
    showCartContent,
    showCartModal,
    showSearchContent,
    showSearchModal,
    setShowCartContent,
    setShowCartModal,
    setShowSearchContent,
    setShowSearchModal,
  } = useContext(SidebarContext);

  const { setShowMenuModal } = useContext(UserContext);

  const { totalAmount } = useContext(CartContext);

  return (
    <div className="relative w-full h-full flex flex-col desktop:pt-6 laptop:pt-4 z-50">
      {/* Cart overlay */}
      <div
        onClick={() => {
          setShowCartContent(false);
          setTimeout(() => setShowCartModal(false), 200);
        }}
        className={`${
          showCartModal ? "opacity-1 visible" : "opacity-0 invisible"
        } absolute top-0 desktop:left-80 laptop:left-64 w-screen h-screen bg-black bg-opacity-30 z-40 transition-all duration-200`}
      />
      {/* Cart overlay */}

      {/* Search overlay */}
      <div
        onClick={() => {
          setTimeout(() => setShowSearchModal(false), 200);
          setShowSearchContent(false);
          setTimeout(() => setSearch(""), 200);
        }}
        className={`${
          showSearchModal ? "opacity-1 visible" : "opacity-0 invisible"
        } absolute top-0 desktop:left-80 laptop:left-64 w-screen h-screen bg-black bg-opacity-30 z-40 transition-all duration-200`}
      />
      {/* Search overlay */}

      <section className="absolute top-4 right-4 flex items-center gap-4">
        {/* Search */}
        <button
          onClick={() => {
            setShowSearchModal(true);
            setShowCartContent(false);
            setShowMenuModal(false);
            setTimeout(() => {
              setShowSearchContent(true);
              // setTimeout(() => searchInput?.focus(), 200);
            }, 500);
            setTimeout(() => setShowCartModal(false), 200);
          }}
          className="desktop:text-2xl laptop:text-xl hover:text-primary transition-all duration-200"
        >
          <IoSearchOutline />
        </button>
        {/* Search */}

        {/* Cart */}
        <button
          onClick={() => {
            if (showCartModal && showCartContent) {
              setShowCartContent(false);
              setTimeout(() => setShowCartModal(false), 200);
            } else {
              setShowCartModal(true);
              setShowMenuModal(false);
              setTimeout(() => setShowCartContent(true), 200);
            }
          }}
          className="desktop:w-7 desktop:h-7 laptop:w-5 laptop:h-5 desktop:text-lg laptop:text-sm bg-primary text-white font-medium rounded-full grid place-content-center"
        >
          {totalAmount}
        </button>
        {/* Cart */}
      </section>

      {/* Search Background */}
      <span
        className={`${
          showSearchModal
            ? "w-[100rem] h-[100rem] rounded-bl-none"
            : "w-0 h-0 rounded-bl-full"
        } absolute right-0 top-0 bg-white transition-all duration-500 z-30 ease-in-out`}
      />
      {/* Search Background */}

      {/* Search Modal */}
      <div
        className={`${
          showSearchModal
            ? "opacity-1 w-full visible"
            : "opacity-0 w-0 invisible"
        } absolute right-0 top-0 h-screen transition-all duration-500 ease-linear z-40`}
      >
        <div
          className={`${
            showSearchContent ? "opacity-1" : "opacity-0"
          } w-full h-full transition-all duration-200`}
        >
          <Search
            search={search}
            setSearch={setSearch}
            products={products}
            setShowSearchModal={setShowSearchModal}
            setShowSearchContent={setShowSearchContent}
          />
        </div>
      </div>
      {/* Search Modal */}

      {/* Cart Modal */}
      <div
        className={`${
          showCartModal
            ? "desktop:w-[31rem] laptop:w-96 visible"
            : "w-0 invisible"
        } absolute top-0 desktop:left-80 laptop:left-64 h-full bg-white border-r transition-all duration-300 ease-in-out z-50`}
      >
        <div
          className={`${
            showCartContent ? "opacity-1" : "opacity-0"
          } w-full h-full transition-all duration-300`}
        >
          <Cart
            setShowCartContent={setShowCartContent}
            setShowCartModal={setShowCartModal}
          />
        </div>
      </div>
      {/* Cart Modal */}

      {/* Logo */}
      <section className="desktop:px-10 desktop:mb-12 laptop:px-6 laptop:mb-8">
        <Logo />
      </section>
      {/* Logo */}

      {/* Navigation */}
      <section className="desktop:px-10 desktop:mb-8 laptop:px-6 laptop:mb-4">
        <ul className="relative flex flex-col desktop:gap-1 laptop:gap-[2px]">
          <li className="group relative">
            <Link
              href="/"
              className={`${
                pathname === "/" && "text-white"
              } block w-full desktop:text-lg laptop:text-base laptop:px-4 laptop:py-[1px] group-hover:text-white group-hover:duration-200 transition-all duration-300`}
            >
              <p>Acasa</p>
              <span
                className={`${
                  pathname === "/" && "w-full"
                } absolute group-hover:left-0 right-0 bottom-0 group-hover:w-full rounded-full w-0 h-full bg-primary transition-all duration-300 -z-10`}
              />
            </Link>
          </li>
          {categories.map((category) => {
            return (
              <li key={category._id} className="group relative">
                <Link
                  href={`/catalog/${category.slug}`}
                  className={`${
                    pathname.includes("/catalog") &&
                    pathname.includes(category.slug) &&
                    "text-white"
                  } block w-full desktop:text-lg laptop:text-base laptop:px-4 laptop:py-[1px] group-hover:text-white group-hover:duration-200 transition-all duration-300`}
                >
                  <p>
                    {category.title.charAt(0).toUpperCase()}
                    {category.title.slice(1, category.title.length)}
                  </p>
                  <span
                    className={`${
                      pathname.includes("/catalog") &&
                      pathname.includes(category.slug) &&
                      "w-full"
                    } absolute bottom-0 group-hover:left-0 right-0 group-hover:w-full w-0 rounded-full h-full bg-primary transition-all duration-300 ease-in-out -z-10`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      {/* Navigation */}

      {/* Categories */}
      <section className="desktop:px-12 laptop:px-8">
        <ul className="flex flex-col">
          <li>
            <Link
              href="/despre-noi"
              className="laptop:text-sm desktop:text-base ml-2 hover:border-l-4 hover:pl-2 border-primary transition-all duration-100"
            >
              Despre noi
            </Link>
          </li>
          <li>
            <Link
              href="/intrebari-frecvente"
              className="laptop:text-sm desktop:text-base ml-2 hover:border-l-4 hover:pl-2 border-primary transition-all duration-100"
            >
              Intrebari frecvente
            </Link>
          </li>
        </ul>
      </section>
      {/* Categories */}
    </div>
  );
};

export default Sidebar;
