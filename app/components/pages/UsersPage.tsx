"use client";

import Link from "next/link";

import { BsChevronLeft } from "react-icons/bs";

import axios from "axios";

import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

import { User } from "@/app/types/User";
import { UserContext } from "@/app/contexts/UserContext";
import Title from "@/app/components/layout/Title";
import { RiDeleteBin7Line } from "react-icons/ri";
import { redirect } from "next/navigation";

import Loading from "@/app/loading";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data);
      setIsMounted(true);
    });
  }, []);

  async function deleteUser(id: string) {
    const res = await axios.delete(`/api/users/${id}`);
    const data = res.data;
    if (data.status === "ok") {
      location.reload();
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: "Sters!",
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-red-400",
        },
      });
    }
  }

  if (!isMounted) {
    return <Loading />;
  }

  const { isAdmin } = useContext(UserContext);

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
          <Title title="Utilizatori" />
        </div>
      </div>
      <div className="border rounded-md overflow-hidden">
        <div className="w-full grid grid-cols-10 h-14 text-lg">
          <div className="col-span-2 grid border-r place-content-center">
            Nume de utilizator
          </div>
          <div className="col-span-3 grid border-r place-content-center">
            Email
          </div>
          <div className="col-span-2 grid border-r place-content-center">
            Nume complet
          </div>
          <div className="col-span-2 grid border-r place-content-center">
            Nr. de telefon
          </div>
          <div className="col-span-1" />
        </div>
        {users.map((user: User) => {
          return (
            <div
              key={user._id}
              className="w-full grid grid-cols-10 border-t h-9"
            >
              <div className="col-span-2 border-r grid place-content-center">
                <p
                  className={`${
                    user.email === "specarus@gmail.com" &&
                    "bg-yellow-500 text-white rounded-full px-4 select-none"
                  }`}
                >
                  {user.username}
                </p>
              </div>
              <div className="col-span-3 border-r grid place-content-center">
                {user.email}
              </div>
              <div className="col-span-2 border-r grid place-content-center">
                {user.lastName && user.firstName
                  ? user.lastName + " " + user.firstName
                  : "-"}
              </div>
              <div className="col-span-2 border-r grid place-content-center">
                {user.phoneNumber ? "+40" + user.phoneNumber : "-"}
              </div>
              <div className="col-span-1 grid place-content-center capitalize">
                {user.email !== "specarus@gmail.com" && (
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="h-6 px-6 rounded-full border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-200"
                  >
                    <p className="text-lg">
                      <RiDeleteBin7Line />
                    </p>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
