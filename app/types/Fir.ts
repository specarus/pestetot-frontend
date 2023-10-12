export interface Fir {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImg: string;
  description: string;
  availability: string;
  detailsImg: string;
  extraImgs: string[];
  brand: string;
  options: [
    {
      code: string;
      color: string;
      diameter: string;
      price: string;
      stringResistance: string;
      length: string;
    }
  ];
  subCategory: string;
  createdAt: Date;
  updatedAt: Date;
}
