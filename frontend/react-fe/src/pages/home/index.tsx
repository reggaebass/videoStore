import React from 'react';
import { Action } from '../../components/action/index.tsx';
import Logo from '../../assets/logo.png';
import BrowseButton from '../../assets/browse.png';
import SearchButton from '../../assets/search.png';
import ReturnButton from '../../assets/return.png';
import './home.scss';


export const Home = () => {

    return(
        <>
        <div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className='actions'>
                <Action route="/browse" source={BrowseButton} alternate='browse' actionText='Browse Our Selection'/>
                <Action route="/search" source={SearchButton} alternate='search' actionText='Find a Specific Title'/>
                <Action route="/returns" source={ReturnButton} alternate='return' actionText='Return Previous Movies'/>
            </div>
            
        </div>
        </>
    )
}