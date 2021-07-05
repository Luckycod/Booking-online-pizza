import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const PizzaMenuBtn = () => {
    return (
        <Router>
            <div className="about__btn">
                <Link to= "#" className= "btn btn_smart" >Read More</Link>
            </div>
        </Router>
    )
}

export default PizzaMenuBtn;
