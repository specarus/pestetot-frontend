"use client";

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

import { AiOutlinePlus } from "react-icons/ai";
import { FirOption } from "../types/FirOption";
import { Fir } from "../types/Fir";

interface FirOptionCardProps {
  option: FirOption;
  product: Fir;
}

const FirOptionCard: React.FC<FirOptionCardProps> = ({ option, product }) => {
  const { addToCart } = useContext(CartContext);
  const { setShowCartContent, setShowCartModal } = useContext(SidebarContext);

  return (
    <div className="p-2 flex items-center justify-between">
      {/*<div className="desktop:w-28 laptop:w-24 grid place-content-center">
        <p>{option.code}</p>
  </div>*/}
      <div className="desktop:w-28 laptop:w-24 grid place-content-center capitalize">
        <p>{option.price}</p>
      </div>
      {option.color && (
        <div className="desktop:w-28 laptop:w-24 grid place-content-center">
          <p>{option.color}</p>
        </div>
      )}
      {option.diameter && (
        <div className="desktop:w-28 laptop:w-24 grid place-content-center">
          <p>{option.diameter}</p>
        </div>
      )}
      {option.stringResistance && (
        <div className="desktop:w-28 laptop:w-24 grid place-content-center">
          <p>{option.stringResistance}</p>
        </div>
      )}
      {option.length && (
        <div className="desktop:w-20 laptop:w-16 grid place-content-center">
          <p>{option.length}</p>
        </div>
      )}
      <div className="desktop:w-32 laptop:w-28 grid place-content-center">
        <button
          onClick={() => {
            addToCart(product, product._id, option);
            setTimeout(() => {
              setShowCartModal(true);
              setTimeout(() => setShowCartContent(true), 200);
            }, 150);
          }}
          className="rounded-full group relative flex items-center justify-center desktop:w-28 laptop:w-24 py-1 bg-primary text-white overflow-hidden"
        >
          <p className="group-hover:-translate-y-10 transition-all duration-200">
            Adauga
          </p>
          <p className="absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
            <AiOutlinePlus className="desktop:text-xl laptop:text-lg" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default FirOptionCard;
