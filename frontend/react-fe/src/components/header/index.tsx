import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

export const Header: React.FC = () => {
    return (
        <header>
            <div className="head-logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>  
            </div>
            <nav>
                <span>
                    <NavLink to="/browse" >
                    <FontAwesomeIcon icon={faTicket} />
                    Browse
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/search" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    Search
                    </NavLink>
                    
                </span>
                <span>
                    <NavLink to="/returns" >
                    <FontAwesomeIcon icon={faBuildingCircleArrowRight} />
                    Return
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/checkout" >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Checkout
                    </NavLink>
                </span>
            </nav>
        </header>
    );
};