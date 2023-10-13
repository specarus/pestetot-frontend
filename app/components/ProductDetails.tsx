"use client";

import Image from "next/image";

import CarligOptionCard from "./CarligOptionCard";
import FireOptionCard from "./FirOptionCard";
import LansetaOptionCard from "./LansetaOptionCard";
import MulinetaOptionCard from "./MulinetaOptionCard";

import Title from "./layout/Title";

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
  return (
    <div className="w-full h-full">
      <section className="px-20 mb-14">
        <div className="flex items-center gap-3 mb-6">
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
        <div className="mb-6">
          <Title title={product.title.toLowerCase()} />
        </div>
        <p className="bg-yellow-500 w-fit px-6 py-1 text-white rounded-full">
          {product.brand}
        </p>
      </section>

      {/* Cover images */}
      <section className="h-auto w-full flex flex-col gap-4 pl-20 pr-72 mb-14">
        <div
          className={`${
            product.category === "lansete"
              ? "w-[60rem] h-64"
              : "w-[38rem] h-[38rem]"
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
          <div className="w-[60rem] h-80 flex gap-4">
            {product.extraImgs.map((imageUrl: string) => {
              return (
                <div className="relative w-80 h-80 p-8 border border-gray-100">
                  {/* Creme background */}
                  <span className="w-full h-full absolute top-0 left-0 bg-neutral-400 bg-opacity-10" />
                  {/* Creme background */}
                  <Image
                    src={imageUrl}
                    alt="Extra"
                    width={700}
                    height={700}
                    className="w-full h.-full object-contain select-none pointer-events-none"
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
        <section className="pl-20 mb-20">
          <div className="w-[80rem]">
            <h3 className="text-lg uppercase">Descrierea produsului</h3>
            <p className="relative border-t pt-2 text-justify">
              {product.description}
            </p>
          </div>
        </section>
      )}
      {/* Description */}

      {/* Options */}
      <section
        className={`${product.category === "lansete" && "pr-72"} ${
          product.category === "mulinete" && "pr-20"
        } ${product.category === "fire" && "pr-40"} ${
          product.category === "carlige" && "pr-96"
        } mb-20 pl-20 w-full`}
      >
        <ul
          className={`w-full h-auto grid grid-rows-${
            product.options.length + 1
          } border rounded-md overflow-hidden`}
        >
          <li className="row-span-1 w-full bg-white h-auto border-b last-of-type:border-none">
            <div className="flex items-center justify-between p-2">
              <div className="w-28 grid place-content-center">
                <p>Cod</p>
              </div>
              <div className="w-28 grid place-content-center">
                <p>Pret</p>
              </div>

              {/* Lansete */}
              {product.options[0]?.noElements && (
                <div className="w-28 grid place-content-center">
                  <p>Nr. Elemente</p>
                </div>
              )}
              {product.options[0]?.launchWeight && (
                <div className="w-40 grid place-content-center">
                  <p>Greutate lansare</p>
                </div>
              )}
              {product.options[0]?.transportLength && (
                <div className="w-40 grid place-content-center">
                  <p>Lungime transport</p>
                </div>
              )}
              {/* Lansete */}

              {/* Mulinete */}
              {product.options[0].size && (
                <div className="w-20 grid place-content-center">
                  <p>Marime</p>
                </div>
              )}
              {product.options[0]?.noBearing && (
                <div className="w-36 grid place-content-center">
                  <p>Nr. rulmenti</p>
                </div>
              )}
              {product.options[0]?.recoveryReport && (
                <div className="w-40 grid place-content-center">
                  <p>Raport recuperare</p>
                </div>
              )}
              {product.options[0]?.drum && (
                <div className="w-28 grid place-content-center">
                  <p>Tambur</p>
                </div>
              )}
              {product.options[0]?.drumCapacity && (
                <div className="w-44 grid place-content-center">
                  <p>Capacitate tambur</p>
                </div>
              )}
              {product.options[0]?.material && (
                <div className="w-36 grid place-content-center">
                  <p>Material</p>
                </div>
              )}
              {product.options[0]?.brakingSystem && (
                <div className="w-32 grid place-content-center">
                  <p>Sistem franare</p>
                </div>
              )}
              {product.options[0]?.weight && (
                <div className="w-28 grid place-content-center">
                  <p>Greutate</p>
                </div>
              )}
              {/* Mulinete */}

              {/* Fire */}
              {product.options[0]?.color && (
                <div className="w-28 grid place-content-center">
                  <p>Culoare</p>
                </div>
              )}
              {product.options[0]?.diameter && (
                <div className="w-28 grid place-content-center">
                  <p>Diametru</p>
                </div>
              )}
              {product.options[0]?.stringResistance && (
                <div className="w-28 grid place-content-center">
                  <p>Rezistenta fir</p>
                </div>
              )}
              {/* Fire */}

              {product.options[0]?.length && (
                <div className="w-20 grid place-content-center">
                  <p>Lungime</p>
                </div>
              )}

              {product.options[0]?.packingWay && (
                <div className="w-40 grid place-content-center">
                  <p>Mod ambalare</p>
                </div>
              )}
              <div className="w-32" />
            </div>
          </li>
          {product.options.map((option: any) => {
            return (
              <li
                key={product._id}
                className="row-span-1 w-full bg-white h-auto border-b last-of-type:border-none"
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
      <section className="w-full h-64 bg-cream shadow-sm">
        <div className="px-20 h-full grid grid-cols-3">
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
