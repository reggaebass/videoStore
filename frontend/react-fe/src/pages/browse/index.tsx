import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/index.tsx';
import Logo from '../../assets/logo.png';

import './browse.scss';


export const Browse = () => {
    const [apiData, setApiData] = useState([{}])

    useEffect(() => {
        fetch('/api/v1/movies').then(
            r => r.json()
        ).then(
            data => {
                setApiData(data)
            }
        )
    }, [])
    return(
        <>
        <div className="head-logo">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>  
            <Link to="/checkout">
                Go to Checkout
            </Link>  
        </div>
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