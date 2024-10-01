import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { CartContext } from '../../context/context.tsx';
import { CartCard } from '../../components/cartCard/index.tsx';
import { Button } from 'antd';

export const Checkout: React.FC = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }
    const { cart } = cartContext;

    return (
        <div>
            <div className="head-logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>  
            </div>
            <h1>Checkout Page</h1>
            {cart.length === 0 && (
                <>
                    <h2>Your cart is empty</h2>
                    <Link to="/browse">
                        Return to Browsing
                    </Link>  
                </>
                
                
            )}
            {cart.map((m, i) => (
                <div key={i}>
                    <CartCard movie={m} />
                </div>
            ))}
        </div>
    );
};