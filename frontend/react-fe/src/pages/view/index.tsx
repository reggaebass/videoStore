import React, {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/index.tsx';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

interface ViewProps {
    id: string;
}

export const View: React.FC<ViewProps> = () => {
    let { id } = useParams();
    const [apiData, setApiData] = useState([{}])

    useEffect(() => {
        fetch(`/api/v1/movies/${id}`).then(
            r => r.json()
        ).then(
            data => {
                setApiData(data)
            }
        )
    }, [id])

    return (
        <>
             <div className="head-logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <Link to="/browse">
                Back to Browse
                </Link>  
            </div>
            <div>
                <Card movie={apiData[0]} />
            </div>
        </>
        
    );
};