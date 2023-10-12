export interface Lanseta {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImg: string;
  detailsImg: string;
  description: string;
  extraImgs: [string];
  availability: string;
  brand: string;
  options: [
    {
      code: string;
      price: string;
      length: string;
      noElements: string;
      launchWeight: string;
      transportLength: string;
      weight: string;
    }
  ];
  subCategory: string;
  createdAt: Date;
  updatedAt: Date;
}
