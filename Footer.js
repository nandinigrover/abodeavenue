import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear(); // This will keep the year current

    return (
        <footer className="footer">
            <p>&copy; {year} Abode Avenue. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

