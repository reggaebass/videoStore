import React, { useContext } from 'react';
import { Button } from 'antd';
import { CartContext } from "../../context/context.tsx";

interface CartCardProps {
    movie: {
        id: number;
        title: string;
        genre: string;
        language: string;
        director: string;
        price: number;
        year: number;
        stock: number;
    };
}

export const CartCard: React.FC<CartCardProps> = ({ movie }) => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }
    const { cart, setCart } = cartContext;
    const handleclick = () => {
        if (cart.includes(movie)) {
            const newCart = cart.filter((m) => m.id !== movie.id);
            setCart(newCart);
            console.log(newCart);
        };
    };
    return (
        <div className="cart-card">
            <h2>{movie.title}</h2>
            <div className='card-info'>
                <div className='card-info__genre'>
                    <span>Genre</span>
                    <span>{movie.genre}</span>
                </div>
                <div className='card-info__language'>
                    <span>Language</span>
                    <span>{movie.language}</span>
                </div>
                <div className='card-info__director'>
                    <span>Director</span>
                    <span>{movie.director}</span>
                </div>
                <div className='card-info__price'>
                    <span>Price</span>
                    <span>{movie.price}</span>
                </div>
                <div className='card-info__year'>
                    <span>Year</span>
                    <span>{movie.year}</span>
                </div>
                <div className='card-info__stock'>
                    <span>Stock</span>
                    <span>{movie.stock}</span>
                </div>
            </div>
            <Button 
                onClick={() => handleclick()}
            >Remove from Cart</Button>
        </div>
    );
};
