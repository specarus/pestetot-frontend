"use client";

import { useRouter } from "next/navigation";

import { createContext, useState, useEffect, useContext } from "react";

import axios from "axios";

import { useSession } from "next-auth/react";

import Swal from "sweetalert2";

import { User } from "../types/User";

import { CartContext } from "./CartContext";

interface UserContextProps {
  user: User;
  showModal: number;
  deleteUser: () => void;
  setShowModal: (value: number) => void;
  showMenuModal: boolean;
  setShowMenuModal: (value: boolean) => void;
  showDeletePopup: boolean;
  setShowDeletePopup: (value: boolean) => void;
  countiesNames: any[];
  citiesNames: any[];
  savePersonal: (ev: any) => void;
  saveAddress: (ev: any) => void;
  setUser: (user: User) => void;
  isMounted: boolean;
  changeUsername: (ev: any) => void;
  changeEmail: (ev: any) => void;
  changeFirstName: (ev: any) => void;
  changeLastName: (ev: any) => void;
  changePhoneNumber: (ev: any) => void;
  changeCounty: (county: string) => void;
  changeCity: (city: string) => void;
  changeStreet: (ev: any) => void;
  changeBuilding: (ev: any) => void;
  changeFlat: (ev: any) => void;
  changeStair: (ev: any) => void;
  changePostalCode: (ev: any) => void;

  isAdmin: boolean;
}

export const UserContext = createContext<UserContextProps>(null!);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { setCart } = useContext(CartContext);

  const [user, setUser] = useState({} as User);
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(0);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [counties, setCounties] = useState([] as []);
  const [cities, setCities] = useState([] as []);

  const [showMenuModal, setShowMenuModal] = useState(false);

  // admin
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user?.email === "specarus@gmail.com") {
      setIsAdmin(true);
    }
  }, [user]);

  const { clearCart } = useContext(CartContext);

  // get user
  const { data: session } = useSession();

  useEffect(() => {
    axios
      .get(`/api/users/${session?.user?.email}`)
      .then((res) => {
        setUser(res.data);
      })
      .then(() => {
        setCart(user.cart);
        setIsMounted(true);
      });
  }, [session?.user]);

  // save personal information
  async function savePersonal(ev: any) {
    ev.preventDefault();
    const res = await axios.put("/api/personal", {
      _id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    });
    const data = res.data;
    if (data.status === "ok") {
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: "Salvat!",
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-green-500",
        },
      });
      setShowModal(0);
    }
  }

  // save address
  async function saveAddress(ev: any) {
    ev.preventDefault();
    const res = await axios.put("/api/address", {
      _id: user._id,
      address: user.address,
    });
    const data = res.data;
    if (data.status === "ok") {
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: "Salvat!",
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-green-500",
        },
      });
      setShowModal(0);
    }
  }

  // fetch counties
  useEffect(() => {
    axios
      .get("https://roloca.coldfuse.io/judete")
      .then((res) => setCounties(res.data));
  }, []);

  const countiesNames = counties && counties.map((county: any) => county.nume);

  const selectedCounty = counties.find(
    (county: any) => county.nume === user?.address?.county
  ) as any;

  // fetch cities
  useEffect(() => {
    axios
      .get(`https://roloca.coldfuse.io/orase/${selectedCounty?.auto}`)
      .then((res) => setCities(res.data));
  }, [selectedCounty]);

  const citiesNames = cities && cities.map((city: any) => city.nume);

  // delete user
  async function deleteUser() {
    const res = await axios.delete(`/profile/${user?._id}`);
    const data = res.data;
    if (data.status === "ok") {
      Swal.fire({
        position: "top",
        showConfirmButton: false,
        title: "Cont sters cu succes!",
        backdrop: "transparent",
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "text-sm font-normal",
          popup: "w-auto h-auto px-4 pb-2",
          timerProgressBar: "bg-red-400",
        },
      });
      clearCart();
      router.push("/");
    }
  }

  function changeUsername(ev: any) {
    setUser((prev) => {
      return { ...prev, username: ev.target.value };
    });
  }

  function changeEmail(ev: any) {
    setUser((prev) => {
      return { ...prev, email: ev.target.value };
    });
  }

  function changeFirstName(ev: any) {
    setUser((prev) => {
      return { ...prev, firstName: ev.target.value };
    });
  }

  function changeLastName(ev: any) {
    setUser((prev) => {
      return { ...prev, lastName: ev.target.value };
    });
  }

  function changePhoneNumber(ev: any) {
    setUser((prev) => {
      return { ...prev, phoneNumber: ev.target.value };
    });
  }

  function changeCounty(county: string) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, county: county },
      };
    });
  }

  function changeCity(city: string) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, city: city },
      };
    });
  }

  function changeStreet(ev: any) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, street: ev.target.value },
      };
    });
  }

  function changeBuilding(ev: any) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, building: ev.target.value },
      };
    });
  }

  function changeFlat(ev: any) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, flat: ev.target.value },
      };
    });
  }

  function changeStair(ev: any) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, stair: ev.target.value },
      };
    });
  }

  function changePostalCode(ev: any) {
    setUser((prev) => {
      return {
        ...prev,
        address: { ...prev.address, postalCode: ev.target.value },
      };
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        countiesNames,
        citiesNames,
        showModal,
        showMenuModal,
        setShowMenuModal,
        setUser,
        setShowModal,
        showDeletePopup,
        setShowDeletePopup,
        deleteUser,
        saveAddress,
        savePersonal,
        isMounted,
        changeUsername,
        changeEmail,
        changeFirstName,
        changeLastName,
        changePhoneNumber,
        changeCity,
        changeCounty,
        changeStreet,
        changeBuilding,
        changeFlat,
        changeStair,
        changePostalCode,
        isAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
