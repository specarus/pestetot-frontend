import Link from "next/link";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  type: string;
  href?: string;
  Icon: IconType;
  onClickFunction: () => void;
  width: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  href,
  Icon,
  width,
  children,
  onClickFunction,
}) => {
  return (
    <>
      {type === "link" && (
        <Link
          href={href || ""}
          onClick={() => onClickFunction}
          className={`rounded-full group relative flex justify-center ${width} py-2 bg-primary text-white overflow-hidden`}
        >
          <p className="desktop:text-base laptop:text-sm group-hover:translate-x-96 transition-all duration-300">
            {children}
          </p>
          <p className="desktop:text-2xl laptop:text-xl absolute -translate-x-96 group-hover:translate-x-0 transition-all duration-300">
            <Icon />
          </p>
        </Link>
      )}
      {type === "button" && (
        <button
          onClick={onClickFunction}
          className={`rounded-full group relative flex justify-center ${width} py-2 bg-primary text-white overflow-hidden`}
        >
          <p className="desktop:text-base laptop:text-sm group-hover:-translate-x-96 transition-all duration-300">
            {children}
          </p>
          <p className="desktop:text-2xl laptop:text-xl absolute translate-x-96 group-hover:translate-x-0 transition-all duration-300">
            <Icon />
          </p>
        </button>
      )}
    </>
  );
};

export default Button;
