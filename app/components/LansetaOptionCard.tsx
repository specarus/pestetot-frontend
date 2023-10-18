"use client";

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

import { AiOutlinePlus } from "react-icons/ai";
import { LansetaOption } from "../types/LansetaOption";
import { Lanseta } from "../types/Lanseta";

interface LansetaOptionCardProps {
  option: LansetaOption;
  product: Lanseta;
}

const LansetaOptionCard: React.FC<LansetaOptionCardProps> = ({
  option,
  product,
}) => {
  const { addToCart } = useContext(CartContext);
  const { setShowCartContent, setShowCartModal } = useContext(SidebarContext);

  return (
    <div className="desktop:p-2 laptop:p-[6px] flex items-center justify-between">
      <div className="desktop:w-28 laptop:w-24 grid place-content-center">
        <p>{option.code}</p>
      </div>
      <div className="desktop:w-28 laptop:w-24 grid place-content-center capitalize">
        <p>{option.price}</p>
      </div>

      {option.noElements && (
        <div className="desktop:w-28 laptop:w-24 grid place-content-center">
          <p>{option.noElements}</p>
        </div>
      )}
      {option.launchWeight && (
        <div className="desktop:w-40 laptop:w-36 grid place-content-center">
          <p>{option.launchWeight}</p>
        </div>
      )}
      {option.transportLength && (
        <div className="desktop:w-40 laptop:w-36 grid place-content-center">
          <p>{option.transportLength}</p>
        </div>
      )}
      {option.weight && (
        <div className="desktop:w-28 laptop:w-24 grid place-content-center">
          <p>{option.weight}</p>
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
          className="rounded-full group relative flex items-center justify-center desktop:w-28 laptop:w-20 desktop:py-1 laptop:py-[2px] bg-primary text-white overflow-hidden"
        >
          <p className="desktop:text-base laptop:text-sm group-hover:-translate-y-10 transition-all duration-200">
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

export default LansetaOptionCard;
