import { Brand } from "@/app/types/Brand";
import Image from "next/image";

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <Image
      src={brand.img}
      alt="Brand"
      width={800}
      height={800}
      className="h-auto desktop:w-28 laptop:w-24 object-contain select-none pointer-events-none"
    />
  );
};

export default BrandCard;
