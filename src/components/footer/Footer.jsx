import React from 'react';

const Footer = ({children}) => {
    return (
        <footer>
            <div className="container">
                {children}
            </div>
        </footer>
    );
};

export default Footer;