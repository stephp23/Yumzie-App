import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="header">
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/about">
                About
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
                Contact
            </NavLink>
            <NavLink activeClassName="active" to="/team">
                Team
            </NavLink>
        </nav>
    );
}

export default Header;

