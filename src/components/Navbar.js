import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
        <nav className="navbar">
            <div className="navbar__text">
                <div className="logo"><Link id="logo__name">BrandName</Link></div>
                <ul className="navbar__ul">
                    <li>
                        <NavLink to="#" className="navbar__link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="navbar__link">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="navbar__link">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="navbar__link">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="navbar__link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </Router>
    )
}

export default Navbar;
