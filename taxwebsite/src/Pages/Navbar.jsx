import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import '../css/Navbar.css'; // Import the Navbar CSS

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <nav className={navbarClasses.join(' ')}>
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src="/images/Logo.png" alt="Clean Power" />
                </NavLink>
            </div>
            <div className="navbar-links">
                <NavLink exact to="/" activeClassName="active-link" >Home</NavLink>
                <NavLink to="/taxcalc" activeClassName="active-link" >Tax Calculator</NavLink>
                <NavLink to="/faq" activeClassName="active-link" >FAQ</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;