import Link from "next/link";

import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl">
      <Image
        src="/assets/pestetot-logo-primary-small.svg"
        alt="Logo"
        width={500}
        height={500}
        className="w-28 object-cover pointer-events-none select-none"
      />
    </Link>
  );
};

export default Logo;
