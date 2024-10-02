import React, { useState, useEffect }from 'react';
import { Card } from '../../components/card/index.tsx';
import { Header } from '../../components/header/index.tsx';

import './browse.scss';


export const Browse = () => {
    const [apiData, setApiData] = useState([{}])

    useEffect(() => {
        fetch('/api/v1/movies').then(
            r => r.json()
        ).then(
            data => {
                setApiData(data.sort((a, b) => a.title.localeCompare(b.title)))
            }
        )
    }, [])
    return(
        <>
        <Header />
        {(typeof apiData === 'undefined') ? (
            <p>loading...</p>
        ) : (
            <div className="browse-container">{
                apiData.map((m, i) => (
                    <>
                        <Card key={i} movie={m} />
                    </>
                    
                ))
            }</div>
        )}
        
        </>
    )
}