export interface Mulineta {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subCategory: string;
  brand: string;
  coverImg: string;
  availability: string;
  extraImgs: string[];
  detailsImg: string;
  options: [
    {
      code: string;
      price: string;
      size: string;
      noBearing: string;
      recoveryReport: string;
      material: string;
      drum: string;
      brakingSystem: string;
      drumCapacity: string;
      weight: string;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}
