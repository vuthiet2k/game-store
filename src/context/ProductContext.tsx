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
  const [dataUI, setDataUI] = React.useState<ProductType[]>([]);
  const [filter, setFilter] = React.useState<string>("none");
  React.useEffect(() => {
    getData("products").then((res) => {
      setAllData(res?.data);
      setDataUI(res?.data);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        dataUI,
        setDataUI,
        allData,
        setAllData,
        filter,
        setFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
