import { Brand } from "@/app/types/Brand";

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <img
      src={brand.img}
      alt="Brand"
      className="h-auto w-28 object-contain select-none pointer-events-none"
    />
  );
};

export default BrandCard;
