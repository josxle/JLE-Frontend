import React from 'react';
import ComingSoon from '../../images/coming_soon.png';
import './welcome.css'
import josxle from '../../images/josxle.png';
import logout from '../../images/logout.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <header className='hd'>
                <div className='left'>
                    <img className='logo' src={josxle} alt="logo" />
                </div>
                <div className='right'>
                    <Link to="/">
                        <img className='logout' src={logout} alt="logout" />
                    </Link>
                </div>
            </header>
            

            <img className='ha' src={ComingSoon} alt="ha" />
        </div>
    );
}

export default Welcome;
