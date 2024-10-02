import React from 'react';
import { Header } from '../../components/header/index.tsx';


const ErrorPage: React.FC = () => {
    return (
        <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
        </>
    );
};

export { ErrorPage };