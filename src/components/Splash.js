import React, { Component } from 'react';
import arrow from '../assets/arrow.svg';

class Splash extends Component {

    render() {
        return (
            <main className="splash">
                <section className="page-section">
                    <h1>HELLO</h1>
                    <p>I'm Corey, check out some stuff I do</p>
                    <a href="/#work"><img src={arrow} alt=""/></a>
                </section>
            </main>
        )
    }
}

export default Splash;
