import React from 'react';
import { Link } from 'react-router-dom';
import './action.scss';

interface ActionProps {
    route: string;
    source: any;
    alternate: string;
    actionText: string;
}

export const Action: React.FC<ActionProps> = ({ route, source, alternate, actionText }) => {
    return (
        <div className='action'>
            <Link to={route}><img className="button" src={source} alt={alternate} />
            <h2>{actionText}</h2>
            </Link>
        </div>
    );
};
