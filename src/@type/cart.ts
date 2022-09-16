export interface CartType  {
    id: number,
    name: string;
    money: string;
}

export type CartContextType = {
    cart: CartType[];
    setCart: React.Dispatch<React.SetStateAction<CartType[]>>
};

export interface ProductType {
    to: string;
    src?: string;
    name: string;
    money: string;
    onCLick?: () => void;
}