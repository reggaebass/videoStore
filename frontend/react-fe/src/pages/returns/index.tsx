import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { Header } from '../../components/header/index.tsx';
import { ReturnCard } from '../../components/returnCard/index.tsx';

export const MovieReturn: React.FC = () => {
    const [search, setSearch] = useState('');
    const [resMovies, setResMovies] = useState([]);

    useEffect(() => {
        if (search.length > 3) {
            fetch(`/api/v1/movies/search/${search}`).then(
                r => r.json()
            ).then(
                data => {
                    setResMovies(data)
                }
            )
        }
       
    }, [search])
    return (
        <div>
            <Header />
            <h1>Enter the Title of the Movie to be Returned</h1>
            <Input placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            {resMovies.length > 0 && (
                <div className="browse-container">{
                    resMovies.map((m, i) => (
                        <ReturnCard key={i} movie={m} />
                    ))
                }</div>
            )}
        </div>
    );
};