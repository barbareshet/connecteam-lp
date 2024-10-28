import React, { useState, useEffect } from 'react';

const Navbar = ({logo}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`site-navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="custom-logo">
                    <a href="/">
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;