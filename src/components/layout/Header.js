import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="nav bar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container container-flex container-flex--space-bt">
                <a href="/" className="navbar-brand">Contact Manager</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" activeClassName="active">
                            <i className="fas fa-home"/>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link" activeClassName="active">
                            <i className="fas fa-plus"/>
                            Add
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" activeClassName="active">
                            <i className="fas fa-question"/>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
