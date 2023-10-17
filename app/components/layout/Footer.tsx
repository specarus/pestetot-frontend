import Link from "next/link";

import { SiFacebook } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full desktop:h-60 laptop:h-48 border-t border-gray-100 desktop:px-20 laptop:px-16 desktop:py-4 laptop:py-2 bg-cream grid grid-cols-5 items-center desktop:gap-20 laptop:gap-12 shadow-inner overflow-hidden">
      {/* Copyright */}
      <p className="absolute bottom-4 left-[50%] -translate-x-[50%] desktop:text-sm laptop:text-xs">
        Copyright &copy; <span className="text-primary">PesteTot SRL</span> 2023
      </p>
      {/* Copyright */}

      <span className="w-full h-2 bg-primary absolute bottom-0 left-0" />

      {/* Logo */}
      <div className="col-span-1 h-full flex items-center select-none pointer-events-none p-4">
        <Image
          src="/assets/pestetot-logo-gray-big.svg"
          alt="Logo"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Logo */}
      <ul className="col-span-1 h-full flex flex-col justify-center gap-3 desktop:text-base laptop:text-sm">
        <li className="relative group w-fit">
          <Link href="/livrare">Livrare si transport</Link>
          <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-200" />
        </li>
        <li className="relative group w-fit">
          <Link href="/termeni-si-conditii">Termeni si conditii</Link>
          <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-200" />
        </li>
        <li className="relative group w-fit">
          <Link href="/politica-de-confidentialitate">
            Politica de confidentialitate
          </Link>
          <span className="absolute w-0 group-hover:w-full h-[1px] bottom-[2px] left-0 bg-black transition-all duration-200" />
        </li>
      </ul>
      <form className="col-span-2 h-full flex items-center gap-4 pr-10">
        <div className="relative w-full">
          <input
            id="newsletter"
            type="email"
            placeholder="Introduceti adresa dvs. de email"
            className="w-full desktop:h-10 laptop:h-8 border border-gray-300 desktop:text-base laptop:text-sm placeholder:font-thin placeholder:italic focus:border-primary px-6 rounded-full transition-all duration-200"
          />

          <button
            type="submit"
            onClick={() => {}}
            className="absolute right-4 top-[50%] -translate-y-[50%] group hover:translate-x-[2px] transition-all duration-300"
          >
            <HiArrowLongRight className="desktop:text-2xl laptop:text-xl" />
          </button>
        </div>
      </form>
      <ul className="col-span-1 h-full flex flex-col gap-3 justify-center">
        <li>
          <Link
            href="/"
            target="_blank"
            className="flex items-center desktop:gap-4 laptop:gap-2 bg-primary text-white p-1 rounded-full"
          >
            <SiFacebook className="desktop:text-2xl laptop:text-xl" />
            <p className="desktop:text-base laptop:text-sm">Facebook</p>
          </Link>
        </li>
        <li className="flex items-center desktop:gap-4 laptop:gap-2">
          <MdLocalPhone className="desktop:text-2xl laptop:text-xl text-primary" />
          <p className="desktop:text-base laptop:text-sm">+40724949274</p>
        </li>
        <li className="flex items-center desktop:gap-4 laptop:gap-2">
          <BiLogoGmail className="desktop:text-2xl laptop:text-xl text-primary" />
          <Link
            href="mailto:contact@pestetot.com"
            className="desktop:text-base laptop:text-sm"
          >
            contact@gmail.com
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
