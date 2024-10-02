import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/context.tsx';
import { Header } from '../../components/header/index.tsx';
import { CartCard } from '../../components/cartCard/index.tsx';
import { Button } from 'antd';

export const Checkout: React.FC = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }
    const { cart, setCart } = cartContext;
    const navigate = useNavigate();
    const handleclick = (cart) => {
        const cardIds = cart.map((m) => m.id);
        const patchData = (id) => {
            fetch(`/api/v1/movies/checkout/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rented: false }),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                response.json()
            })
            .then((data) => console.log(data))
            .catch((error) => console.log('error', error));
        }

        const requests = cardIds.map((id) => patchData(id));
        Promise.all(requests)
            .then(() => {
                alert('You have successfully rented the movies');
                setCart([]);
                navigate('/');
                
            })
            .catch((error) => console.log('error', error));
    }
   
    const total = cart.reduce((acc, m) => acc + m.price, 0)
        
    return (
        <div>

            <Header />
            <h1>Here are your Selections:</h1>
            <span className='browse-container'>
            {cart.length === 0 && (
                <>
                    <h2>Your cart is empty</h2>
                </>
                
                
            )}
            {cart.map((m, i) => (
                <div key={i}>
                    <CartCard movie={m} />
                </div>
            ))}
            </span>
            {cart.length > 0 && (
                <>
                <div>
                    <h2>Total: {(Math.round(total * 100) / 100).toFixed(2)}</h2>
                </div>
                <Button type="primary" size="large"  onClick={() => handleclick(cart)}>
                    Checkout
                </Button>
                </>
            )}
        </div>
    );
};