"use client";

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

import { AiOutlinePlus } from "react-icons/ai";
import { CarligOption } from "../types/CarligOption";
import { Carlig } from "../types/Carlig";

interface FireOptionCardProps {
  option: CarligOption;
  product: Carlig;
}

const CarligOptionCard: React.FC<FireOptionCardProps> = ({
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
      {option.color && (
        <div className="w-28 grid place-content-center">
          <p>{option.color}</p>
        </div>
      )}
      {option.packingWay && (
        <div className="w-40 grid place-content-center">
          <p>{option.packingWay}</p>
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

export default CarligOptionCard;
