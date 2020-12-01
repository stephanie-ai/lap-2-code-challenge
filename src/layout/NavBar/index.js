import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <NavLink exact className="navlink" activeClassName="current" to="/">Home</NavLink>
            <NavLink className="navlink" activeClassName="current" to="#">Pull Requests</NavLink>
            <NavLink className="navlink" activeClassName="current" to="#">Issues</NavLink>
            <NavLink className="navlink" activeClassName="current" to="#">Marketplace</NavLink>
            <NavLink className="navlink" activeClassName="current" to="#">Explore</NavLink>
        </nav>
    );
}

export default NavBar;