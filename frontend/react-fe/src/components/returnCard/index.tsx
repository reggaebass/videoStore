import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './returnCard.scss';

interface ReturnCardProps {
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

export const ReturnCard: React.FC<ReturnCardProps> = ({ movie }) => {
    const navigate = useNavigate();
    const handleReturn = () => {
       console.log(movie);
       const id = movie.id;
         fetch(`/api/v1/movies/returns/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ rented: false }),
         }).then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            response.json()
        }).catch((error) => console.log('error', error));
        alert('You have successfully returned the movie');
        navigate('/');
    };
    return (
        <div className="return-card">
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
                    <span>{(Math.round(movie.price * 100) / 100).toFixed(2)}</span>
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
            {movie.stock === 10 ? (
                <p>Movie is not rented</p>
            ) : (
                <Button 
                onClick={() => handleReturn()}
                >Return My Movie</Button>)
            }
            
        </div>
    );
};
