"use client";

import { useContext, useState } from "react";

import axios from "axios";

import Swal from "sweetalert2";

import { ModalContext } from "@/app/contexts/ModalContext";
import { UserContext } from "@/app/contexts/UserContext";
import { CartContext } from "@/app/contexts/CartContext";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

interface LoginModalProps {
  setModal: (value: number) => void;
  setShowAccountModal: (value: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  setModal,
  setShowAccountModal,
}) => {
  const router = useRouter();

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

  const { setUser } = useContext(UserContext);
  const { setCart } = useContext(CartContext);

  const [showPassword, setShowPassword] = useState(false);

  async function login(ev: any) {
    ev.preventDefault();
    const res = await axios.post("/login", loginUser, {
      withCredentials: true,
    });
    const data = res.data;
    if (data.status === "error") {
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: `${data.error}`,
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-red-500",
        },
      });
    } else {
      router.push("/contul-meu");
      Swal.fire({
        position: "top",
        timer: 2000,
        backdrop: "transparent",
        title: "V-ati conectat cu succes!",
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "w-auto h-auto px-4 pb-2",
          title: "text-sm font-normal",
          timerProgressBar: "bg-green-500",
        },
      });
      setUser(data);
      setCart(data?.cart);
      setShowAccountModal(false);
      resetLoginFocuses();
      resetLoginUser();
    }
  }

  return (
    <div className="w-full h-full p-10">
      <h1 className="border-b uppercase text-xl mb-16">Conectare</h1>
      <form className="flex flex-col gap-4" onSubmit={(ev) => login(ev)}>
        <div className="relative">
          <label
            htmlFor="input-1"
            className={`${
              loginFocus1 ? "-translate-y-9" : "-translate-y-[50%]"
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
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative mb-28">
          <label
            htmlFor="input-2"
            className={`${
              loginFocus2 ? "-translate-y-9" : "-translate-y-[50%]"
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
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200 pr-14"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[50%] -translate-y-[50%] text-2xl p-2 text-primary bg-white"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <button className="rounded-full group relative flex items-center justify-center w-full py-2 bg-primary text-white overflow-hidden">
          <p className="group-hover:translate-x-96 transition-all duration-300">
            Conecteaza-te
          </p>
          <p className="text-2xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
            <BsArrowRight />
          </p>
        </button>
        <div className="flex justify-center gap-1 text-sm">
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
