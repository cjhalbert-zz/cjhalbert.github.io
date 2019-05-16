import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import logo from '../assets/logo.svg';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            showNav: true,
        }
    }

    componentDidMount() {
        if (window.location.pathname == "/") {
            this.setState({showNav: true});
        } else {
            this.setState({showNav: false});
        }
    }

    render() {
        return (
                <header className="header">
                <img className="logo" src={logo} alt=""/>
                <nav className="header-content">
                    <Link to="/"><h1>coreyhalbert</h1></Link>
                    {this.state.showNav &&
                    <ul>
                        <li><a href="#work"><h2>work</h2></a></li>
                        <li><a href="#about"><h2>about</h2></a></li>
                        <li><a href="#contact"><h2>contact</h2></a></li>
                        <li><a href="/gimmicks"><h2>gimmicks</h2></a></li>
                    </ul>
                    }
                </nav>
            </header>
        )
    }
}

export default Header;
