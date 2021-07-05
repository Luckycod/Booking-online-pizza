import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const BannerBtn = () => {
    return (
        <Router>
            <div className="banner__btn">
                <Link to= "#" className="btn btn_smart">Delivery Now</Link>
            </div>
        </Router>
    )
}

export default BannerBtn;
