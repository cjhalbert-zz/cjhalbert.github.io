import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="logo" src={logo} alt=""/>
                <hr className="header-line-short"/>
                <nav className="header-content">
                    <h1>coreyhalbert</h1>
                    <hr/>
                    <ul>
                        <li><a href="#work"><h2>work</h2></a></li>
                        <li><a href="#about"><h2>about</h2></a></li>
                        <li><a href="#contact"><h2>contact</h2></a></li>
                    </ul>
                </nav>
                <hr/>
            </header>
        )
    }
}

export default Header;
