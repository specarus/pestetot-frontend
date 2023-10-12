export interface Carlig {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImg: string;
  description: string;
  availability: string;
  brand: string;
  extraImgs: string[];
  detailsImg: string;
  options: [
    {
      code: string;
      size: string;
      price: string;
      color: string;
      packingWay: string;
    }
  ];
  subCategory: string;
  createdAt: Date;
  updatedAt: Date;
}
