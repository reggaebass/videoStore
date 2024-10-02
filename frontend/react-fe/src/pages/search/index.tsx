import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { Header } from '../../components/header/index.tsx';
import { Card } from '../../components/card/index.tsx';

export const MovieSearch: React.FC = () => {
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
            <h1>Search for a Movie by Title</h1>
            <Input placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)}/>
            {resMovies.length > 0 && (
                <div className="browse-container">{
                    resMovies.map((m, i) => (
                        <Card key={i} movie={m} />
                    ))
                }</div>
            )}
        </div>
    );
};