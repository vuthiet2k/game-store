import { Dispatch, SetStateAction } from "react";

export interface CartType  {
    id: number,
    name: string;
    money: string;
}

export type CartContextType = {
    cart: CartType[];
    setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
    allData: any[];
    setAllData: Dispatch<SetStateAction<any[]>>;
    dataUI: any[];
    setDataUI: Dispatch<SetStateAction<any[]>>;
};

export type ProductType = {
    id: number;
    to: string;
    src: string;
    name: string;
    money: string;
    love: boolean;
    about?: string;
    wishlist?: boolean;
    ratting?: boolean;
}