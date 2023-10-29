"use client";

import axios from "axios";

import Link from "next/link";

import { useContext } from "react";

import Swal from "sweetalert2";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Announcement from "./Announcement";

import { Category } from "@/app/types/Category";

import Hero from "./Hero";
import Account from "./Account";

import { AiOutlineMenu } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import { PiPackageLight } from "react-icons/pi";
import { FiEdit3, FiUser } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

import { UserContext } from "@/app/contexts/UserContext";
import { ModalContext } from "@/app/contexts/ModalContext";
import { SidebarContext } from "@/app/contexts/SidebarContext";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { CartContext } from "@/app/contexts/CartContext";
import BigLoading from "../BigLoading";

interface LayoutProps {
  products: any[];
  categories: Category[];
  children: React.ReactNode;
}

axios.defaults.baseURL = "https://pestetot-server.onrender.com";

const Layout: React.FC<LayoutProps> = ({ products, categories, children }) => {
  const { resetUser, resetFocuses, resetLoginFocuses, resetLoginUser } =
    useContext(ModalContext);

  const {
    setShowSearchModal,
    setShowSearchContent,
    setShowCartModal,
    setShowCartContent,
  } = useContext(SidebarContext);

  const {
    user,
    showDeletePopup,
    showMenuModal,
    deleteUser,
    setShowDeletePopup,
    setShowMenuModal,
    showModal,
    modal,
    setModal,
    showAccountModal,
    setShowAccountModal,
    showOverlay,
    setShowOverlay,
    isMounted,
    setIsMounted,
  } = useContext(UserContext);

  const { clearCart } = useContext(CartContext);

  const { status } = useSession();

  if (status === "loading" || !isMounted) {
    return <BigLoading />;
  }

  return (
    <main className="w-full h-full">
      <div className="relative w-full h-full">
        {/* Delete account popup */}
        <div
          className={`${
            showDeletePopup ? "opacity-1 visible" : "opacity-0 invisible"
          } fixed top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-auto h-auto bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 py-6 px-8 z-50`}
        >
          <div className="w-full flex items-center gap-4">
            <button
              onClick={() => setShowDeletePopup(false)}
              className="w-[50%] h-full grid place-content-center"
            >
              <p className="relative group text-sm">
                Anuleaza
                <span className="w-0 h-[1px] absolute bottom-[1px] left-0 bg-black group-hover:w-full transition-all duration-200" />
              </p>
            </button>
            <button
              onClick={() => {
                deleteUser();
                setShowDeletePopup(false);
              }}
              className="w-[50%] relative rounded-full group flex justify-center items-center py-2 px-12 bg-red-500 text-white overflow-hidden"
            >
              <p className="group-hover:translate-x-96 text-sm transition-all duration-300">
                Confirma
              </p>
              <p className="text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
                <BsArrowRight />
              </p>
            </button>
          </div>
        </div>
        {/* Delete account popup */}

        {/* Delete account popup overlay */}
        <div
          onClick={() => setShowDeletePopup(false)}
          className={`${
            showDeletePopup ? "opacity-1 visible" : "opacity-0 invisible"
          } w-full h-full fixed top-0 left-0 bg-black bg-opacity-30 transition-all duration-300 z-40`}
        />
        {/* Delete account popup overlay */}

        {/* Account button */}
        {user?._id ? (
          <button
            onClick={() => {
              if (!showModal) {
                setShowMenuModal(!showMenuModal);
              }
              setTimeout(() => setShowSearchModal(false), 200);
              setShowSearchContent(false);
              setShowCartContent(false);
              setTimeout(() => setShowCartModal(false), 200);
            }}
            className={`${
              showMenuModal ? "shadow-none" : "shadow-md"
            }  fixed top-3 right-6 desktop:h-12 laptop:h-10 rounded-full z-30 border border-gray-100 bg-white flex items-center p-1 desktop:w-52 laptop:w-48 transition-all duration-300`}
          >
            <span className="flex justify-center grow">
              {showModal ? (
                <FiEdit3 className="text-xl" />
              ) : (
                <p className="desktop:text-base laptop:text-sm">
                  @{user.username}
                </p>
              )}
            </span>
            <div className="select-none pointer-events-none">
              <Image
                src="/assets/images/placeholder.jpg"
                alt="Placeholder"
                width={500}
                height={500}
                className="desktop:w-10 laptop:w-8 desktop:h-10 laptop:h-8 rounded-full"
              />
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              if (showOverlay && showAccountModal) {
                setShowOverlay(false);
                setShowAccountModal(false);
                resetUser();
                resetLoginUser();
                resetFocuses();
                resetLoginFocuses();
              } else {
                setShowAccountModal(true);
                setShowOverlay(true);
                setModal(2);
              }
              setTimeout(() => setShowSearchModal(false), 200);
              setShowSearchContent(false);
              setShowCartContent(false);
              setTimeout(() => setShowCartModal(false), 200);
            }}
            className="fixed top-3 right-6 desktop:h-12 laptop:h-10 w-auto rounded-full z-30 border border-gray-100 bg-white flex items-center pl-4 pr-1 gap-3 shadow-md"
          >
            <span>
              <AiOutlineMenu className="desktop:text-xl laptop:text-base" />
            </span>
            <div className="select-none pointer-events-none">
              <Image
                width={500}
                height={500}
                src="/assets/images/placeholder.jpg"
                alt="Placeholder"
                className="desktop:w-10 laptop:w-8 desktop:h-10 laptop:h-8 rounded-full"
              />
            </div>
          </button>
        )}
        {/* Account button */}

        {/* Choose Modal */}
        <div
          className={`${
            showMenuModal
              ? "desktop:h-[8.5rem] laptop:h-[7.8rem] opacity-1 visible"
              : "h-0 opacity-0 invisible"
          } fixed desktop:top-10 laptop:top-8 right-6 flex flex-col desktop:w-52 laptop:w-48 rounded-b-lg overflow-hidden bg-white border border-gray-100 shadow-lg transition-all duration-200 ease-in-out z-20 desktop:text-base laptop:text-sm`}
        >
          <Link
            onClick={() => setShowMenuModal(false)}
            href="/contul-meu"
            className="flex items-center desktop:gap-4 laptop:gap-3 pt-6 laptop:pb-2 px-4  hover:bg-cream transition-all duration-200"
          >
            <FiUser className="desktop:text-xl laptop:text-lg" />
            Contul meu
          </Link>
          <Link
            onClick={() => setShowMenuModal(false)}
            href="/contul-meu/comenzi"
            className="laptop:py-2 px-4 flex items-center desktop:gap-4 laptop:gap-3 hover:bg-cream transition-all duration-200"
          >
            <PiPackageLight className="desktop:text-2xl laptop:text-xl" />
            <p>Comenzi</p>
          </Link>
          <button
            onClick={() => {
              signOut();
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
              clearCart();
              setShowMenuModal(false);
              setIsMounted(true);
            }}
            className="laptop:py-2 px-4 flex items-center desktop:gap-4 laptop:gap-3 hover:bg-cream transition-all duration-200"
          >
            <SlLogout className="desktop:text-lg laptop:text-base" />
            <p>Deconecteaza-te</p>
          </button>
        </div>
        {/* Choose Modal */}

        {/* Account overlay */}
        <div
          onClick={() => {
            setShowOverlay(false);
            setShowAccountModal(false);
            resetUser();
            resetLoginUser();
            resetFocuses();
            resetLoginFocuses();
          }}
          className={`${
            showAccountModal
              ? "opacity-1 visible"
              : " opacity-0 invisible delay-200"
          } fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-all duration-300 ease-in-out`}
        />
        {/* Account overlay */}

        {/* Account modal */}
        <section
          className={`${
            showAccountModal
              ? "top-[50%] opacity-1 visible delay-200"
              : "top-[60%] opacity-0 invisible"
          } fixed left-[50%] -translate-x-[50%] -translate-y-[50%] desktop:w-[25rem] desktop:h-[30rem] laptop:w-[21rem] laptop:h-[26rem] bg-white shadow-lg border border-gray-100 z-50 transition-all duration-200 ease-in-out rounded-lg`}
        >
          <Account
            modal={modal}
            setModal={setModal}
            setShowAccountModal={setShowAccountModal}
          />
        </section>
        {/* Account modal */}

        <div className="desktop:w-80 laptop:w-64 fixed h-full z-20 bg-white shadow-md border-r border-gray-100">
          {/* Green bar */}
          <span className="absolute h-full w-2 bg-primary left-0 top-0" />
          {/* Green bar */}

          {/* Sidebar */}
          <section className="w-full h-full">
            <Sidebar categories={categories} products={products} />
          </section>
          {/* Sidebar */}
        </div>
        <div className="desktop:pl-80 laptop:pl-64 relative w-full h-full z-10 transition-all duration-500 ease-in-out">
          <section className="fixed w-full top-0 left-0 z-20">
            <Announcement />
          </section>
          {/* Hero video */}
          <section className="w-full desktop:h-96 laptop:h-72 border-b desktop:mb-10 laptop:mb-6">
            <Hero />
          </section>
          {/* Hero video */}
          <section className="relative w-full h-full">{children}</section>
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Layout;
