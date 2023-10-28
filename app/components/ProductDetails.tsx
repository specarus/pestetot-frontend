"use client";

import Image from "next/image";

import CarligOptionCard from "./CarligOptionCard";
import FireOptionCard from "./FirOptionCard";
import LansetaOptionCard from "./LansetaOptionCard";
import MulinetaOptionCard from "./MulinetaOptionCard";

import Title from "./layout/Title";
import { useEffect, useState } from "react";
import Loading from "../loading";

interface DetailsPageProps {
  product: any;
  category: string;
  subCategory: string;
}

const DetailsPage: React.FC<DetailsPageProps> = ({
  product,
  category,
  subCategory,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full">
      <section className="desktop:px-20 laptop:px-16 desktop:mb-14 laptop:mb-10">
        <div className="flex items-center desktop:gap-3 laptop:gap-2 desktop:mb-6 laptop:mb-4 desktop:text-base laptop:text-sm">
          <p>Acasa</p>
          <p className="text-primary">/</p>
          <p>Detalii</p>
          <p className="text-primary">/</p>
          <p className="capitalize">{category}</p>
          <p className="text-primary">/</p>
          <p className="capitalize">{subCategory.split("-").join(" ")}</p>
          <p className="text-primary">/</p>
          <p className="capitalize text-primary">
            {product.title.toLowerCase()}
          </p>
        </div>
        <div className="desktop:mb-6 laptop:mb-4">
          <Title title={product.title.toLowerCase()} />
        </div>
        <p className="bg-yellow-500 w-fit desktop:px-6 laptop:px-4 py-1 text-white rounded-full select-none desktop:text-base laptop:text-sm">
          {product.brand}
        </p>
      </section>

      {/* Cover images */}
      <section className="h-auto w-full flex flex-col gap-4 desktop:pl-20 laptop:pl-16 desktop:pr-72 laptop:pr-64 desktop:mb-14 laptop:mb-10">
        <div
          className={`${
            product.category === "lansete"
              ? "desktop:w-[60rem] laptop:w-[48rem] desktop:h-64 laptop:h-52"
              : "desktop:w-[38rem] laptop:w-[26rem] desktop:h-[38rem] laptop:h-[26rem]"
          } relative grid place-content-center border border-gray-100 overflow-hidden`}
        >
          {/* Creme background */}
          <span className="w-full h-full absolute top-0 left-0 bg-neutral-400 bg-opacity-10" />
          {/* Creme background */}
          <Image
            src={product.detailsImg}
            width={1000}
            height={1000}
            alt="Details"
            className="w-full h-full object-contain select-none pointer-events-none p-4"
          />
        </div>

        {product.extraImgs?.length > 1 && (
          <div className="desktop:w-[60rem] laptop:w-[48rem] desktop:h-80 laptop:h-64 flex gap-4">
            {product.extraImgs.map((imageUrl: string) => {
              return (
                <div
                  key={imageUrl}
                  className="relative desktop:w-80 desktop:h-80 laptop:w-64 laptop:h-64 p-8 border border-gray-100"
                >
                  {/* Creme background */}
                  <span className="w-full h-full absolute top-0 left-0 bg-neutral-400 bg-opacity-10" />
                  {/* Creme background */}
                  <Image
                    src={imageUrl}
                    alt="Extra"
                    width={700}
                    height={700}
                    className="w-full h-full object-contain select-none pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>
      {/* Cover images */}

      {/* Description */}
      {product.description && (
        <section className="desktop:pl-20 laptop:pl-16 desktop:mb-20 laptop:mb-14">
          <div className="desktop:w-[80rem] laptop:w-[62rem]">
            <h3 className="desktop:text-lg laptop:text-base uppercase">
              Descrierea produsului
            </h3>
            <p className="relative border-t pt-2 text-justify desktop:text-base laptop:text-sm">
              {product.description}
            </p>
          </div>
        </section>
      )}
      {/* Description */}

      {/* Options */}
      <section
        className={`${
          product.category === "lansete" && "desktop:pr-72 laptop:pr-[17rem]"
        } ${product.category === "mulinete" && "desktop:pr-20 laptop:pr-16"} ${
          product.category === "fire" && "desktop:pr-40 laptop:pr-52"
        } ${
          product.category === "carlige" && "laptop:pr-96"
        } desktop:mb-20 laptop:mb-14 desktop:pl-20 laptop:pl-16 w-full`}
      >
        <ul
          className={`w-full h-auto grid grid-rows-${
            product.options.length + 1
          } border rounded-md overflow-hidden desktop:text-base laptop:text-sm`}
        >
          <li className="row-span-1 w-full bg-white h-auto border-b last-of-type:border-none">
            <div className="flex items-center justify-between desktop:p-2 laptop:p-[6px]">
              <div className="desktop:w-28 laptop:w-20 grid place-content-center">
                <p>Cod</p>
              </div>
              <div className="desktop:w-28 laptop:w-24 grid place-content-center">
                <p>Pret</p>
              </div>

              {/* Lansete */}
              {product.options[0]?.noElements && (
                <div className="desktop:w-28 laptop:w-24 grid place-content-center">
                  <p>Nr. Elemente</p>
                </div>
              )}
              {product.options[0]?.launchWeight && (
                <div className="desktop:w-40 laptop:w-36 grid place-content-center">
                  <p>Greutate lansare</p>
                </div>
              )}
              {product.options[0]?.transportLength && (
                <div className="desktop:w-40 laptop:w-36 grid place-content-center">
                  <p>Lungime transport</p>
                </div>
              )}
              {/* Lansete */}

              {/* Mulinete */}
              {product.options[0].size && (
                <div className="desktop:w-20 laptop:w-16 grid place-content-center">
                  <p>Marime</p>
                </div>
              )}
              {product.options[0]?.noBearing && (
                <div className="desktop:w-36 laptop:w-28 grid place-content-center">
                  <p>Nr. rulmenti</p>
                </div>
              )}
              {product.options[0]?.recoveryReport && (
                <div className="desktop:w-40 laptop:w-32 grid place-content-center">
                  <p>Raport recuperare</p>
                </div>
              )}
              {product.options[0]?.drum && (
                <div className="desktop:w-28 laptop:w-28 grid place-content-center">
                  <p>Tambur</p>
                </div>
              )}
              {product.options[0]?.drumCapacity && (
                <div className="desktop:w-44 laptop:w-40 grid place-content-center">
                  <p>Capacitate tambur</p>
                </div>
              )}
              {product.options[0]?.material && (
                <div className="desktop:w-36 laptop:w-32 grid place-content-center">
                  <p>Material</p>
                </div>
              )}
              {product.options[0]?.brakingSystem && (
                <div className="desktop:w-32 laptop:w-28 grid place-content-center">
                  <p>Sistem franare</p>
                </div>
              )}
              {product.options[0]?.weight && (
                <div className="desktop:w-28 laptop:w-20 grid place-content-center">
                  <p>Greutate</p>
                </div>
              )}
              {/* Mulinete */}

              {/* Fire */}
              {product.options[0]?.color && (
                <div className="desktop:w-28 laptop:w-24 grid place-content-center">
                  <p>Culoare</p>
                </div>
              )}
              {product.options[0]?.diameter && (
                <div className="desktop:w-28 laptop:w-24 grid place-content-center">
                  <p>Diametru</p>
                </div>
              )}
              {product.options[0]?.stringResistance && (
                <div className="desktop:w-28 laptop:w-24 grid place-content-center">
                  <p>Rezistenta fir</p>
                </div>
              )}
              {/* Fire */}

              {product.options[0]?.length && (
                <div className="desktop:w-20 laptop:w-16 grid place-content-center">
                  <p>Lungime</p>
                </div>
              )}

              {product.options[0]?.packingWay && (
                <div className="desktop:w-40 laptop:w-36 grid place-content-center">
                  <p>Mod ambalare</p>
                </div>
              )}
              <div className="desktop:w-32 laptop:w-28" />
            </div>
          </li>
          {product.options.map((option: any) => {
            return (
              <li
                key={product._id}
                className="row-span-1 w-full bg-white h-auto border-b last-of-type:border-none hover:bg-cream transition-all duration-200"
              >
                <div className="w-full h-full">
                  {product.category === "lansete" && (
                    <LansetaOptionCard option={option} product={product} />
                  )}
                  {product.category === "mulinete" && (
                    <MulinetaOptionCard option={option} product={product} />
                  )}
                  {product.category === "fire" && (
                    <FireOptionCard option={option} product={product} />
                  )}
                  {product.category === "carlige" && (
                    <CarligOptionCard option={option} product={product} />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      {/* Options */}

      {/* Details */}
      <section className="w-full desktop:h-64 laptop:h-48 bg-cream shadow-sm">
        <div className="desktop:px-20 laptop:px-16 h-full grid grid-cols-3 desktop:text-base laptop:text-sm">
          <div className="col-span-1 h-full border-r">1</div>
          <div className="col-span-1 h-full border-r">2</div>
          <div className="col-span-1 h-full">3</div>
        </div>
      </section>
      {/* Details */}
    </div>
  );
};

export default DetailsPage;
