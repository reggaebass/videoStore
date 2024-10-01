import React from 'react';
import { Link } from 'react-router-dom';

interface ActionProps {
    route: string;
    source: any;
    alternate: string;
}

export const Action: React.FC<ActionProps> = ({ route, source, alternate }) => {
    return (
        <div>
            <Link to={route}><img className="button" src={source} alt={alternate} /></Link>
        </div>
    );
};
