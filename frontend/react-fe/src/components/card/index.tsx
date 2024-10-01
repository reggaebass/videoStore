import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/context.tsx";
import { Button } from "antd"
import './card.scss';

interface CardProps {
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

export const Card: React.FC<CardProps> = ({ movie }) => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }
    const { cart, setCart } = cartContext;
    const handleclick = () => {
        if (cart.includes(movie)) {
            alert(`The movie ${movie.title} is already in the cart`);
            return;
        }
        setCart([...cart, movie]);
        alert(`The move ${movie.title} has been added to the cart`);
    };


    return (
        <div className="card">
            <Link to={`/view/${movie.id}`}>
                <h2>{movie.title}</h2>
            </Link>
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
            >Add to Cart</Button>
        </div>
    );
};

