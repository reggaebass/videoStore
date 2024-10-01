import React, { createContext, useState, ReactNode } from 'react';

interface CartContextProps {
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<any[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};