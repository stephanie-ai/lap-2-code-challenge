import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="navlink" activeClassName="current" to="/pull">Pull Requests</NavLink>
            <NavLink className="navlink" activeClassName="current" to="/issues">Issues</NavLink>
            <NavLink className="navlink" activeClassName="current" to="/marketplace">Marketplace</NavLink>
            <NavLink className="navlink" activeClassName="current" to="/explore">Explore</NavLink>
        </nav>
    );
}

export default NavBar;