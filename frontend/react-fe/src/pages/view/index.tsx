import React, {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/index.tsx';
import { Header } from '../../components/header/index.tsx';

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
            <Header />
            <div>
                <Card movie={apiData[0]} />
            </div>
        </>
        
    );
};