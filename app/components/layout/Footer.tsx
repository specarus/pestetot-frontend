import Link from "next/link";

import { SiFacebook } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full h-60 border-t border-gray-100 px-20 py-4 bg-cream grid grid-cols-5 items-center gap-20 shadow-inner overflow-hidden">
      {/* Copyright */}
      <p className="absolute bottom-4 left-[50%] -translate-x-[50%] text-sm">
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
      <ul className="col-span-1 h-full flex flex-col justify-center gap-3">
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
            className="w-full h-10 border border-gray-300 placeholder:font-thin placeholder:italic focus:border-primary px-6 rounded-full transition-all duration-200"
          />

          <button
            type="submit"
            onClick={() => {}}
            className="absolute right-4 top-[50%] -translate-y-[50%] group hover:translate-x-[2px] transition-all duration-300"
          >
            <HiArrowLongRight className="text-2xl" />
          </button>
        </div>
      </form>
      <ul className="col-span-1 h-full flex flex-col gap-3 justify-center">
        <li>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-4 bg-primary text-white p-1 rounded-full"
          >
            <SiFacebook className="text-2xl" />
            <p>Facebook</p>
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <MdLocalPhone className="text-2xl text-primary" />
          <p>+40724949274</p>
        </li>
        <li className="flex items-center gap-4">
          <BiLogoGmail className="text-2xl text-primary" />
          <Link href="mailto:contact@pestetot.com">contact@pestetot.com</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
