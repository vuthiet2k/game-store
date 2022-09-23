import * as React from "react";

import { CartContextType, CartType, ProductType } from "../@type/cart";
import { getData } from "../apis";

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);

type PropChildren = {
  children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
  const [cart, setCart] = React.useState<CartType[]>([]);
  React.useEffect(() => {
    getData("cart").then((res) => {
      setCart(res?.data);
    });
  }, []);
  const [allData, setAllData] = React.useState<any[]>([]);
  const [dataUI, setDataUI] = React.useState<any[]>([]);
  React.useEffect(() => {
    getData("products").then((res) => {
      setAllData(res?.data);
      setDataUI(res?.data);
    });
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart, allData, setAllData, dataUI, setDataUI }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
