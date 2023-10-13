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
      width={500}
      height={500}
      className="h-auto w-28 object-contain select-none pointer-events-none"
    />
  );
};

export default BrandCard;
