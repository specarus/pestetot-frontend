import Link from "next/link";

import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/pestetot-logo-primary-small.svg"
        alt="Logo"
        width={500}
        height={500}
        className="desktop:w-28 laptop:w-24 object-cover pointer-events-none select-none"
      />
    </Link>
  );
};

export default Logo;
