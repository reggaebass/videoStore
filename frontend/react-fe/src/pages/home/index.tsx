import React from 'react';
import { Action } from '../../components/action/index.tsx';
import Logo from '../../assets/logo.png';
import BrowseButton from '../../assets/browse.png';
import './home.scss';


export const Home = () => {

    return(
        <>
        <div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className='actions'>
                <Action route="/browse" source={BrowseButton} alternate='browse'/>
            </div>
            
        </div>
        </>
    )
}