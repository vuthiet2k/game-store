import { SetStateAction } from "react";

export type ProductContextType = {
  dataUI: ProductType[];
  setDataUI: React.Dispatch<SetStateAction<ProductType[]>>;
  allData: ProductType[];
  setAllData: (newValue: ProductType[] | null) => void;
  filter: string;
  setFilter: React.Dispatch<SetStateAction<string>>;
};

export type ProductType = {
  id: number;
  msp: string;
  name: string;
  avatar: string;
  price: string;
  about: string;
  wishlist: boolean;
  ratting: boolean;
  action?: boolean;
  strategy?: boolean;
  adventure?: boolean;
  puzzle?: boolean;
  shooter: boolean;
  rpg?: boolean;
  sport?: boolean;
  racing?: boolean;
};
