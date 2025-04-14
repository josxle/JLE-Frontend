import React from 'react';
import ComingSoon from '../../images/coming_soon.png';
import './welcome.css'

const Welcome = () => {
    return (
        <div>
            <img className='ha' src={ComingSoon} alt="ha" />
        </div>
    );
}

export default Welcome;
