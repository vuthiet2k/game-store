import React, { Children } from "react";
import { ProductContextType, ProductType } from "../@type/product";
import { getData } from "../apis";

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

type PropChildren = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<PropChildren> = ({ children }) => {
  const [allData, setAllData] = React.useState<ProductType[]>([]);
  const [dataWishlist, setDataWishlist] = React.useState<ProductType[]>([]);
  const [dataRatting, setDataRatting] = React.useState<ProductType[]>([]);
  const [dataUI, setDataUI] = React.useState<ProductType[]>([]);
  React.useEffect(() => {
    getData("products").then((res) => {
      setAllData(res?.data);
      setDataUI(res?.data);
    });
    getData('products?wishlist=true').then((res) => {
      setDataWishlist(res?.data);
    });
    getData('products?ratting=true').then((res) => {
      setDataRatting(res?.data);
    });
  }, []);
  
  return (
    <ProductContext.Provider
      value={{
        dataUI,
        setDataUI,
        allData,
        setAllData,
        dataWishlist,
        setDataWishlist,
        dataRatting,
        setDataRatting
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
