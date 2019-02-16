import React, { Component } from 'react';
import arrow from '../assets/arrow.svg';

class Splash extends Component {

    render() {
        return (
            <main className="splash">
                <section className="page-section">
                    <h1>HELLO</h1>
                    <p>I'm Corey, check out some stuff I do</p>
                    <img src={arrow} alt=""/>
                </section>
            </main>
        )
    }
}

export default Splash;
