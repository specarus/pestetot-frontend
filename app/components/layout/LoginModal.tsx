"use client";

import { useContext, useState } from "react";

import Swal from "sweetalert2";

import { ModalContext } from "@/app/contexts/ModalContext";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { BsArrowRight } from "react-icons/bs";

// auth
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  setModal: (value: number) => void;
  setShowAccountModal: (value: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  setModal,
  setShowAccountModal,
}) => {
  const {
    loginUser,
    loginFocus1,
    loginFocus2,
    setLoginFocus1,
    setLoginFocus2,
    changeLoginEmail,
    changeLoginPassword,
    resetLoginFocuses,
    resetLoginUser,
  } = useContext(ModalContext);

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  async function login(ev: any) {
    ev.preventDefault();
    signIn("credentials", {
      ...loginUser,
      callbackUrl: "/contul-meu",
    }).then((res) => {
      if (res?.ok) {
        Swal.fire({
          position: "top",
          timer: 2000,
          backdrop: "transparent",
          title: "V-ati conectat cu succes!",
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            popup: "w-auto h-auto laptop:px-4 pb-2",
            title: "text-sm font-normal",
            timerProgressBar: "bg-green-500",
          },
        });
        setShowAccountModal(false);
        resetLoginFocuses();
        resetLoginUser();
      } else {
        Swal.fire({
          position: "top",
          timer: 2000,
          backdrop: "transparent",
          title: "Acreditari nevalide!",
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            popup: "w-auto h-auto laptop:px-4 pb-2",
            title: "text-sm font-normal",
            timerProgressBar: "bg-red-500",
          },
        });
      }
    });
  }

  return (
    <div className="w-full h-full desktop:p-10 laptop:p-8">
      <h1 className="border-b uppercase desktop:text-xl laptop:text-lg mb-16">
        Conectare
      </h1>
      <form
        className="flex flex-col desktop:gap-4 laptop:gap-3 desktop:text-base laptop:text-sm"
        onSubmit={(ev) => login(ev)}
      >
        <div className="relative">
          <label
            htmlFor="input-1"
            className={`${
              loginFocus1
                ? "desktop:-translate-y-9 laptop:-translate-y-7"
                : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Email
          </label>
          <input
            id="input-1"
            onFocus={() => setLoginFocus1(true)}
            onBlur={() => {
              if (!loginUser.email) {
                setLoginFocus1(false);
              }
            }}
            type="email"
            value={loginUser.email}
            onChange={(ev) => changeLoginEmail(ev)}
            placeholder=""
            className="w-full desktop:h-12 laptop:h-10 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative desktop:mb-28 laptop:mb-20">
          <label
            htmlFor="input-2"
            className={`${
              loginFocus2
                ? "desktop:-translate-y-9 laptop:-translate-y-7"
                : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Parola
          </label>
          <input
            id="input-2"
            onFocus={() => setLoginFocus2(true)}
            onBlur={() => {
              if (!loginUser.password) {
                setLoginFocus2(false);
              }
            }}
            type={`${showPassword ? "text" : "password"}`}
            value={loginUser.password}
            onChange={(ev) => changeLoginPassword(ev)}
            placeholder=""
            className="w-full desktop:h-12 laptop:h-10 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200 pr-14"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[50%] -translate-y-[50%] desktop:text-2xl laptop:text-xl p-2 text-primary bg-white"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <button className="rounded-full group relative flex items-center justify-center w-full py-2 bg-primary text-white overflow-hidden">
          <p className="group-hover:translate-x-96 transition-all duration-300 desktop:text-base laptop:text-sm">
            Conecteaza-te
          </p>
          <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
            <BsArrowRight />
          </p>
        </button>
        <div className="flex justify-center gap-1 desktop:text-sm laptop:text-xs">
          <p>Nu ai cont deja?</p>
          <button
            onClick={() => setModal(2)}
            type="button"
            className="underline text-primary"
          >
            Inregistreaza-te
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
