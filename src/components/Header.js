import React from 'react'
import Navbar from './Navbar';
import BannerBtn from './Button/BannerBtn';

const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                   </p>
                   <BannerBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
