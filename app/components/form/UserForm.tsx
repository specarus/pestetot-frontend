"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

import { FiEdit3 } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { IoSaveOutline } from "react-icons/io5";

const UserForm = () => {
  const {
    user,
    isAdmin,
    countiesNames,
    citiesNames,
    showModal,
    setShowModal,
    saveAddress,
    savePersonal,
    changeUsername,
    changeEmail,
    changeFirstName,
    changeLastName,
    changePhoneNumber,
    changeBuilding,
    changeCity,
    changeCounty,
    changeFlat,
    changeStair,
    changePostalCode,
    changeStreet,
  } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(0);

  // Personal information
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // Address
  const [streetFocus, setStreetFocus] = useState(false);
  const [buildingFocus, setBuildingFocus] = useState(false);
  const [stairFocus, setStairFocus] = useState(false);
  const [postalCodeFocus, setPostalCodeFocus] = useState(false);
  const [flatFocus, setFlatFocus] = useState(false);

  useEffect(() => {
    if (user?.firstName) {
      setFirstNameFocus(true);
    }
    if (user?.lastName) {
      setLastNameFocus(true);
    }
    if (user?.email) {
      setEmailFocus(true);
    }
    if (user?.username) {
      setUsernameFocus(true);
    }
    if (user?.phoneNumber) {
      setPhoneNumberFocus(true);
    }

    if (user?.address?.street) {
      setStreetFocus(true);
    }
    if (user?.address?.building) {
      setBuildingFocus(true);
    }
    if (user?.address?.stair) {
      setStairFocus(true);
    }
    if (user?.address?.postalCode) {
      setPostalCodeFocus(true);
    }
    if (user?.address?.flat) {
      setFlatFocus(true);
    }
  }, [
    user?.address?.building,
    user?.address?.flat,
    user?.address?.postalCode,
    user?.address?.stair,
    user?.address?.street,
    user?.email,
    user?.firstName,
    user?.lastName,
    user?.phoneNumber,
    user?.username,
  ]);

  return (
    <div className="w-full h-full">
      <section className="relative w-full border rounded-md overflow-hidden desktop:mb-10 laptop:mb-8">
        {/* Personal information table */}
        <div className="flex items-start justify-between border-b desktop:px-6 laptop:px-4 desktop:py-4 laptop:py-2">
          <h1 className="desktop:text-xl laptop:text-lg">
            Informatii personale
          </h1>
          <button
            onClick={() => setShowModal(1)}
            className="relative rounded-full group flex items-center justify-center desktop:w-32 laptop:w-28 py-1 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-y-10 transition-all duration-200 desktop:text-base laptop:text-sm">
              Editeaza
            </p>
            <p className="text-2xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
              <FiEdit3 className="desktop:text-xl laptop:text-lg" />
            </p>
          </button>
        </div>
        <ul className="w-full flex flex-col rounded-b-md overflow-hidden desktop:text-base laptop:text-sm">
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Prenume</span>
            <span className="col-span-1 h-full px-6">
              {user?.firstName ? user?.firstName : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Nume</span>
            <span className="col-span-1 h-full px-6">
              {user?.lastName ? user?.lastName : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Nume de utilizator</span>
            <span className="col-span-1 h-full px-6">
              <p
                className={`${
                  isAdmin &&
                  "bg-yellow-500 text-white px-4 rounded-full w-fit select-none"
                }`}
              >
                {user?.username ? user?.username : "-"}
              </p>
            </span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Email</span>
            <span className="col-span-1 h-full px-6">
              {user?.email ? user?.email : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Numar de telefon</span>
            <span className="col-span-1 h-full px-6">
              {user?.phoneNumber ? "+40" + user?.phoneNumber : "-"}
            </span>
          </li>
        </ul>
        {/* Personal information table */}

        {/* Personal information form */}
        <form
          onSubmit={(ev) => savePersonal(ev)}
          className={`${
            showModal === 1 ? "opacity-1 visible" : "opacity-0 invisible"
          } absolute top-0 left-0 w-full h-full flex desktop:gap-8 laptop:gap-4 bg-white laptop:p-10 transition-all duration-200 ease-in-out desktop:text-base laptop:text-sm`}
        >
          <section className="desktop:w-[28rem] laptop:w-80 flex flex-col desktop:gap-8 laptop:gap-6">
            <div className="relative">
              <label
                htmlFor="firstName"
                className={`${
                  firstNameFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Prenume
              </label>
              <input
                id="firstName"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => {
                  if (!user?.firstName) {
                    setFirstNameFocus(false);
                  }
                }}
                type="text"
                value={user?.firstName}
                onChange={(ev) => changeFirstName(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="lastName"
                className={`${
                  lastNameFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Nume
              </label>
              <input
                id="lastName"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => {
                  if (!user?.lastName) {
                    setLastNameFocus(false);
                  }
                }}
                type="text"
                value={user?.lastName}
                onChange={(ev) => changeLastName(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="w-full flex desktop:gap-4 laptop:gap-2">
              <div className="desktop:h-10 laptop:h-8 desktop:px-4 laptop:px-2 border border-gray-300 grid place-content-center">
                +40
              </div>
              <div className="w-full relative">
                <label
                  htmlFor="phoneNumber"
                  className={`${
                    phoneNumberFocus
                      ? "desktop:-translate-y-9 laptop:-translate-y-7"
                      : "-translate-y-[50%]"
                  } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
                >
                  Nr. de telefon
                </label>
                <input
                  id="phoneNumber"
                  onFocus={() => setPhoneNumberFocus(true)}
                  onBlur={() => {
                    if (!user?.phoneNumber) {
                      setPhoneNumberFocus(false);
                    }
                  }}
                  type="text"
                  value={user?.phoneNumber}
                  onChange={(ev) => changePhoneNumber(ev)}
                  placeholder=""
                  className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
                />
              </div>
            </div>
          </section>
          <section className="desktop:w-[28rem] laptop:w-80 flex flex-col desktop:gap-8 laptop:gap-6">
            <div className="relative">
              <label
                htmlFor="username"
                className={`${
                  usernameFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Nume de utilizator
              </label>
              <input
                id="username"
                onFocus={() => setUsernameFocus(true)}
                maxLength={14}
                onBlur={() => {
                  if (!user?.username) {
                    setUsernameFocus(false);
                  }
                }}
                type="text"
                value={user?.username}
                onChange={(ev) => changeUsername(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className={`${
                  emailFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Email
              </label>
              <input
                id="email"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => {
                  if (!user?.email) {
                    setEmailFocus(false);
                  }
                }}
                type="text"
                value={user?.email}
                onChange={(ev) => changeEmail(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
          </section>
          <button
            type="submit"
            className="absolute bottom-6 right-10 rounded-full group flex items-center justify-center desktop:w-40 laptop:w-32 desktop:py-2 laptop:py-1 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-y-10 transition-all duration-200 desktop:text-base laptop:text-sm">
              Salveaza
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
              <IoSaveOutline />
            </p>
          </button>
        </form>
        {/* Personal information form */}
      </section>

      <section className="relative w-full border rounded-md overflow-hidden">
        {/* Address table */}
        <div className="flex items-start justify-between border-b desktop:px-6 laptop:px-4 desktop:py-4 laptop:py-2">
          <h1 className="desktop:text-xl laptop:text-lg">Adresa de livrare</h1>
          <button
            onClick={() => setShowModal(2)}
            className="relative rounded-full group flex items-center justify-center desktop:w-32 laptop:w-28 py-1 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-y-10 transition-all duration-200 desktop:text-base laptop:text-sm">
              Editeaza
            </p>
            <p className="absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
              <FiEdit3 className="desktop:text-xl laptop:text-lg" />
            </p>
          </button>
        </div>
        <ul className="w-full flex flex-col rounded-b-md overflow-hidden desktop:text-base laptop:text-sm">
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Tara</span>
            <span className="col-span-1 h-full px-6">Romania</span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Judet</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.county ? user?.address.county : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Oras / Sector</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.city ? user?.address.city : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Strada</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.street ? user?.address.street : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Bloc / Nr. casa</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.building ? user?.address.building : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Scara</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.stair ? user?.address.stair : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2 bg-cream">
            <span className="col-span-1 h-full px-6">Apartament</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.flat ? user?.address.flat : "-"}
            </span>
          </li>
          <li className="py-3 grid grid-cols-2">
            <span className="col-span-1 h-full px-6">Cod postal</span>
            <span className="col-span-1 h-full px-6">
              {user?.address?.postalCode ? user?.address.postalCode : "-"}
            </span>
          </li>
        </ul>
        {/* Address table */}

        {/* Address form */}
        <form
          onSubmit={(ev) => saveAddress(ev)}
          className={`${
            showModal === 2 ? "opacity-1 visible" : "opacity-0 invisible"
          } absolute top-0 left-0 w-full h-full flex desktop:gap-8 laptop:gap-6 bg-white rounded-md desktop:p-10 laptop:p-8 transition-all duration-200 ease-in-out desktop:text-base laptop:text-sm`}
        >
          <section className="desktop:w-[28rem] laptop:w-80 flex flex-col desktop:gap-8 laptop:gap-6">
            <div className="relative">
              <label
                htmlFor="country"
                className="absolute -top-3 left-2 bg-white px-2"
              >
                Tara
              </label>
              <input
                id="country"
                type="text"
                defaultValue="Romania"
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="street"
                className={`${
                  streetFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Strada
              </label>
              <input
                id="street"
                onFocus={() => setStreetFocus(true)}
                onBlur={() => {
                  if (!user?.address.street) {
                    setStreetFocus(false);
                  }
                }}
                type="text"
                value={user?.address?.street}
                onChange={(ev) => changeStreet(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="stair"
                className={`${
                  stairFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Scara
              </label>
              <input
                id="stair"
                onFocus={() => setStairFocus(true)}
                onBlur={() => {
                  if (!user?.address.stair) {
                    setStairFocus(false);
                  }
                }}
                type="text"
                value={user?.address?.stair}
                onChange={(ev) => changeStair(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="flat"
                className={`${
                  flatFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Apartament
              </label>
              <input
                id="flat"
                onFocus={() => setFlatFocus(true)}
                onBlur={() => {
                  if (!user?.address.flat) {
                    setFlatFocus(false);
                  }
                }}
                type="text"
                value={user?.address?.flat}
                onChange={(ev) => changeFlat(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
          </section>
          <section className="desktop:w-[28rem] laptop:w-80 flex flex-col desktop:gap-8 laptop:gap-6">
            <div className="w-full flex laptop:flex-col desktop:flex-row desktop:gap-4 laptop:gap-6">
              <div className="w-full relative">
                <label className="absolute -top-3 left-2 bg-white px-2">
                  Judet
                </label>
                <button
                  onClick={() => {
                    if (showDropdown === 1) {
                      setShowDropdown(0);
                    } else {
                      setShowDropdown(1);
                    }
                  }}
                  type="button"
                  className="flex items-center justify-between w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
                >
                  <p>
                    {user?.address?.county
                      ? user?.address.county
                      : "Selecteaza judetul"}
                  </p>
                  <BsChevronDown
                    className={`${
                      showDropdown === 1 ? "rotate-180" : ""
                    } transition-all duration-100`}
                  />
                </button>
                {showDropdown === 1 && (
                  <ul className="absolute desktop:top-12 laptop:top-10 w-full h-60 flex flex-col bg-white border border-gray-300 overflow-y-scroll z-40">
                    {countiesNames.sort().map((county, id) => {
                      return (
                        <li
                          key={id}
                          className="hover:bg-cream transition-all duration-200"
                        >
                          <button
                            onClick={() => {
                              changeCounty(county);
                              setShowDropdown(0);
                            }}
                            type="button"
                            className="w-full h-full text-left py-2 px-4"
                          >
                            {county}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="w-full relative flex flex-col gap-1">
                <label className="absolute -top-3 left-2 bg-white px-2">
                  Oras / Sector
                </label>
                <button
                  onClick={() => {
                    if (showDropdown === 2) {
                      setShowDropdown(0);
                    } else {
                      setShowDropdown(2);
                    }
                  }}
                  type="button"
                  className="flex items-center justify-between w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
                >
                  <p>
                    {user?.address?.city
                      ? user?.address.city
                      : "Selecteaza orasul"}
                  </p>
                  {user?.address?.county && (
                    <BsChevronDown
                      className={`${
                        showDropdown === 2 ? "rotate-180" : ""
                      } transition-all duration-100`}
                    />
                  )}
                </button>
                {showDropdown === 2 && citiesNames && (
                  <ul className="absolute desktop:top-12 laptop:top-10 w-full h-60 flex flex-col bg-white border border-gray-300 overflow-y-scroll z-40">
                    {citiesNames &&
                      citiesNames.sort().map((city, id) => {
                        return (
                          <li
                            key={id}
                            className="hover:bg-cream transition-all duration-200"
                          >
                            <button
                              onClick={() => {
                                changeCity(city);
                                setShowDropdown(0);
                              }}
                              type="button"
                              className="w-full h-full text-left py-2 px-4"
                            >
                              {city}
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="building"
                className={`${
                  buildingFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Bloc / Nr. casa
              </label>
              <input
                id="building"
                onFocus={() => setBuildingFocus(true)}
                onBlur={() => {
                  if (!user?.address.building) {
                    setBuildingFocus(false);
                  }
                }}
                type="text"
                value={user?.address?.building}
                onChange={(ev) => changeBuilding(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="postalCode"
                className={`${
                  postalCodeFocus
                    ? "desktop:-translate-y-9 laptop:-translate-y-7"
                    : "-translate-y-[50%]"
                } absolute desktop:left-4 laptop:left-2 top-[50%] bg-white px-2 transition-all duration-200 cursor-text`}
              >
                Cod postal
              </label>
              <input
                id="postalCode"
                onFocus={() => setPostalCodeFocus(true)}
                onBlur={() => {
                  if (!user?.address.postalCode) {
                    setPostalCodeFocus(false);
                  }
                }}
                type="text"
                value={user?.address?.postalCode}
                onChange={(ev) => changePostalCode(ev)}
                placeholder=""
                className="w-full desktop:h-10 laptop:h-8 border border-gray-300 laptop:px-4 focus:border-gray-400 transition-all duration-200"
              />
            </div>
          </section>
          <button
            type="submit"
            className="absolute bottom-6 rounded-full group flex items-center justify-center desktop:w-40 laptop:w-32 desktop:py-2 laptop:py-1 bg-primary text-white overflow-hidden"
          >
            <p className="group-hover:-translate-y-10 transition-all duration-200">
              Salveaza
            </p>
            <p className="desktop:text-2xl laptop:text-xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
              <IoSaveOutline />
            </p>
          </button>
        </form>
        {/* Address form */}
      </section>
    </div>
  );
};

export default UserForm;
