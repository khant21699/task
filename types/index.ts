type Item = {
  type: "Fruit" | "Vegetable";
  name: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
  };
};

type TransformedData = {
  [department: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: {
      [color: string]: number;
    };
    addressUser: {
      [key: string]: string;
    };
  };
};

export type { Item, User, TransformedData };
