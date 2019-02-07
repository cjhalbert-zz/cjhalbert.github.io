import React, { Component } from 'react';
import colorthing from '../assets/colorthing.svg';

class Splash extends Component {
    render() {
        return (
            <main className="splash">
                <section className="page-section">
                    <img src={colorthing} alt=""/>
                    <p className="intro-text">Hi, I'm Corey,<br/>Look at the stuff I make</p>
                </section>
            </main>
        )
    }
}

export default Splash;
