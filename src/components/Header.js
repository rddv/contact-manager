import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <nav className="nav bar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">Contact Manager</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
