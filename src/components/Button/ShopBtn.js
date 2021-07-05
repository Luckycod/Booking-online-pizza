import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ShopBtn = () => {
    return (
        <Router>
            <div className="shop__btn">
                <Link to="#" className="btn btn_smart">SHOP NOW</Link>
            </div>
        </Router>
    )
}

export default ShopBtn;
