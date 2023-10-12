export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cart: [];
  address: {
    county: string;
    city: string;
    street: string;
    building: string;
    flat: string;
    stair: string;
    postalCode: string;
  };
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}
