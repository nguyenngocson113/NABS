import React, { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

class Header extends Component {

    logout() {
    }

    render() {
        return (
            <div className="row topnav">
                <Link to={{pathname: `/`}}><img className="logo" src="/public/not-a-basement-studio-logo.png" alt="logo"></img></Link>
            </div>
        );

    }

}

export default Header;
