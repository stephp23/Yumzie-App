import React from 'react'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
            <h3>Yumzie Copyright 2021. All Rights Reserved.</h3>
            <NavLink activeClassName="active" to="/privacy">Privacy</NavLink>
        </div>
    );
}

export default Footer;