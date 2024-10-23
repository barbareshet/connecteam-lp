import React from 'react';

const Navbar = ({logo}) => {
    return (
        <nav className="site-navigation">
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