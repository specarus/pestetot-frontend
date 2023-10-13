import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-8">
      <Link
        href="/catalog/mulinete"
        className="group relative col-span-1 h-80 bg-white rounded-md shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-full h-full grid place-content-center p-10">
          <Image
            src="/assets/images/featured/mulinete.jpeg"
            alt="Card"
            width={700}
            height={700}
            className="w-full h-full object-contain group-hover:blur-[2px] transition-all duration-300"
          />
          <span className="absolute w-full left-0 bottom-16 bg-white h-10 flex items-center justify-center group-hover:h-14 transition-all border-t border-b border-black duration-300">
            <h2 className="relative group uppercase text-xl italic">
              Mulinete
              <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-300" />
            </h2>
          </span>
        </div>
      </Link>
      <Link
        href="/catalog/scaune-umbrele"
        className="group relative col-span-1 h-80 bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-full h-full grid place-content-center">
          <Image
            src="/assets/images/featured/scaune-umbrele.jpeg"
            alt="Card"
            width={700}
            height={700}
            className="w-full h-full object-contain group-hover:blur-[2px] transition-all duration-300"
          />
          <span className="absolute w-full left-0 bottom-16 bg-white h-10 flex items-center justify-center group-hover:h-14 transition-all border-t border-b border-black duration-300">
            <h2 className="relative group uppercase text-xl italic">
              Scaune si umbrele
              <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-300" />
            </h2>
          </span>
        </div>
      </Link>
      <Link
        href="/catalog/plase"
        className="group relative col-span-1 h-80 bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-full h-full grid place-content-center">
          <Image
            src="/assets/images/featured/plase.jpeg"
            alt="Card"
            width={700}
            height={700}
            className="w-full h-full object-contain group-hover:blur-[2px] transition-all duration-300"
          />
          <span className="absolute w-full left-0 bottom-16 bg-white h-10 flex items-center justify-center group-hover:h-14 transition-all border-t border-b border-black duration-300">
            <h2 className="relative group uppercase text-xl italic">
              Plase
              <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-300" />
            </h2>
          </span>
        </div>
      </Link>
      <Link
        href="/catalog/suporti-bete"
        className="group relative col-span-1 h-80 bg-white rounded-md shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-full h-full grid place-content-center p-4">
          <Image
            src="/assets/images/featured/suporti-bete.jpeg"
            alt="Card"
            width={700}
            height={700}
            className="w-full h-full object-contain group-hover:blur-[2px] transition-all duration-300"
          />
          <span className="absolute w-full left-0 bottom-16 bg-white h-10 flex items-center justify-center group-hover:h-14 transition-all border-t border-b border-black duration-300">
            <h2 className="relative group uppercase text-xl italic">
              Suporti de bete
              <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-300" />
            </h2>
          </span>
        </div>
      </Link>
      <Link
        href="/catalog/cutii-plastic"
        className="group relative col-span-1 h-80 bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-full h-full grid place-content-center p-4">
          <Image
            src="/assets/images/featured/cutii-plastic.jpeg"
            alt="Card"
            width={700}
            height={700}
            className="w-full h-full object-contain group-hover:blur-[2px] transition-all duration-300"
          />
          <span className="absolute w-full left-0 bottom-16 bg-white h-10 flex items-center justify-center group-hover:h-14 transition-all border-t border-b border-black duration-300">
            <h2 className="relative group uppercase text-xl italic">
              Cutii de plastic
              <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-300" />
            </h2>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProducts;
