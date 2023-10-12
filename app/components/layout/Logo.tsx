import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl">
      <img
        src="/assets/pestetot-logo-primary-small.svg"
        alt="Logo"
        className="w-28 object-cover pointer-events-none select-none"
      />
    </Link>
  );
};

export default Logo;
