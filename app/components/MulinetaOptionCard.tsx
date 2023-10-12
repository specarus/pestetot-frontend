"use client";

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

import { AiOutlinePlus } from "react-icons/ai";
import { Mulineta } from "../types/Mulineta";
import { MulinetaOption } from "../types/MulinetaOption";

interface MulinetaOptionCardProps {
  option: MulinetaOption;
  product: Mulineta;
}

const MulinetaOptionCard: React.FC<MulinetaOptionCardProps> = ({
  option,
  product,
}) => {
  const { addToCart } = useContext(CartContext);
  const { setShowCartContent, setShowCartModal } = useContext(SidebarContext);

  return (
    <div className="p-2 flex items-center justify-between">
      <div className="w-28 grid place-content-center">
        <p>{option.code}</p>
      </div>
      <div className="w-28 grid place-content-center capitalize">
        <p>{option.price}</p>
      </div>
      {option.size && (
        <div className="w-20 grid place-content-center">
          <p>{option.size}</p>
        </div>
      )}
      {option.noBearing && (
        <div className="w-36 grid place-content-center">
          <p>{option.noBearing}</p>
        </div>
      )}
      {option.recoveryReport && (
        <div className="w-40 grid place-content-center">
          <p>{option.recoveryReport}</p>
        </div>
      )}
      {option.drum && (
        <div className="w-28 grid place-content-center">
          <p>{option.drum}</p>
        </div>
      )}
      {option.drumCapacity && (
        <div className="w-44 grid place-content-center">
          <p>{option.drumCapacity}</p>
        </div>
      )}
      {option.material && (
        <div className="w-36 grid place-content-center">
          <p>{option.material}</p>
        </div>
      )}
      {option.brakingSystem && (
        <div className="w-32 grid place-content-center">
          <p>{option.brakingSystem}</p>
        </div>
      )}
      {option.weight && (
        <div className="w-28 grid place-content-center">
          <p>{option.weight}</p>
        </div>
      )}

      <div className="w-32 grid place-content-center">
        <button
          onClick={() => {
            addToCart(product, product._id, option);
            setTimeout(() => {
              setShowCartModal(true);
              setTimeout(() => setShowCartContent(true), 200);
            }, 150);
          }}
          className="rounded-full group relative flex items-center justify-center w-28 py-1 bg-primary text-white overflow-hidden"
        >
          <p className="group-hover:-translate-y-10 transition-all duration-200">
            Adauga
          </p>
          <p className="text-2xl absolute translate-y-8 left-[50%] -translate-x-[50%] group-hover:translate-y-0 transition-all duration-200">
            <AiOutlinePlus className="text-xl" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default MulinetaOptionCard;
