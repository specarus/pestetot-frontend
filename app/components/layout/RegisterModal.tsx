"use client";

import axios from "axios";

import Swal from "sweetalert2";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useContext, useState } from "react";
import { ModalContext } from "@/app/contexts/ModalContext";
import { BsArrowRight } from "react-icons/bs";

const RegisterModal = ({ setModal }: { setModal: (value: number) => void }) => {
  const {
    user,
    confirmPassword,
    focus1,
    focus2,
    focus3,
    focus4,
    setFocus1,
    setFocus2,
    setFocus3,
    setFocus4,
    changeUsername,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    resetUser,
    resetFocuses,
  } = useContext(ModalContext);

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  async function register(ev: any) {
    ev.preventDefault();
    const res = await axios.post("/register", {
      ...user,
      confirmPassword,
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
      Swal.fire({
        position: "top",
        timer: 2000,
        backdrop: "transparent",
        title: "V-ati inregistrat cu succes!",
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "w-auto h-auto px-4 pb-2",
          title: "text-sm font-normal",
          timerProgressBar: "bg-green-500",
        },
      });
      resetUser();
      resetFocuses();
      setModal(1);
    }
  }

  return (
    <div className="w-full h-full p-10">
      <h1 className="text-xl mb-8 uppercase border-b">Intregistrare</h1>
      <form
        onSubmit={(ev) => register(ev)}
        className="flex flex-col justify-center gap-4"
      >
        <div className="relative">
          <label
            htmlFor="input-1"
            className={`${
              focus1 ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Nume de utilizator
          </label>
          <input
            id="input-1"
            onFocus={() => setFocus1(true)}
            onBlur={() => {
              if (!user.username) {
                setFocus1(false);
              }
            }}
            type="text"
            value={user.username}
            onChange={(ev) => changeUsername(ev)}
            placeholder=""
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="input-2"
            className={`${
              focus2 ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Email
          </label>
          <input
            id="input-2"
            onFocus={() => setFocus2(true)}
            onBlur={() => {
              if (!user.email) {
                setFocus2(false);
              }
            }}
            type="email"
            value={user.email}
            onChange={(ev) => changeEmail(ev)}
            placeholder=""
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="input-3"
            className={`${
              focus3 ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Parola
          </label>
          <input
            id="input-3"
            onFocus={() => setFocus3(true)}
            onBlur={() => {
              if (!user.password) {
                setFocus3(false);
              }
            }}
            type={`${showPassword1 ? "text" : "password"}`}
            value={user.password}
            onChange={(ev) => changePassword(ev)}
            placeholder=""
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200 pr-14"
          />
          <button
            type="button"
            onClick={() => setShowPassword1(!showPassword1)}
            className="absolute right-4 top-[50%] -translate-y-[50%] text-2xl text-primary p-2 bg-white"
          >
            {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="input-4"
            className={`${
              focus4 ? "-translate-y-9" : "-translate-y-[50%]"
            } absolute left-4 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
          >
            Confirma parola
          </label>
          <input
            id="input-4"
            onFocus={() => setFocus4(true)}
            onBlur={() => {
              if (!confirmPassword) {
                setFocus4(false);
              }
            }}
            type={`${showPassword2 ? "text" : "password"}`}
            value={confirmPassword}
            onChange={(ev) => changeConfirmPassword(ev)}
            placeholder=""
            className="w-full h-12 border border-gray-300 px-4 focus:border-gray-400 transition-all duration-200 pr-14"
          />
          <button
            type="button"
            onClick={() => setShowPassword2(!showPassword2)}
            className="absolute right-4 top-[50%] -translate-y-[50%] text-2xl text-primary p-2 bg-white"
          >
            {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <button className="rounded-full group relative flex items-center justify-center w-full py-2 bg-primary text-white overflow-hidden">
          <p className="group-hover:translate-x-96 transition-all duration-300">
            Inregistreaza-te
          </p>
          <p className="text-2xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
            <BsArrowRight />
          </p>
        </button>
        <div className="flex justify-center gap-1 text-sm">
          <p>Ai deja un cont?</p>
          <button
            onClick={() => setModal(1)}
            type="button"
            className="underline text-primary"
          >
            Conecteaza-te
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
