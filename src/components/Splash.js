import React, { Component } from 'react';
import colorthing from '../assets/colorthing.svg';

class Splash extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
        }
    }

    randomizeWord() {
        var words = ["make", "create", "design", "develop"];
        var word = words[Math.floor(Math.random()*words.length)];
        this.setState({word: word});
    }

    componentDidMount() {
       this.randomizeWord();
    }

    render() {
        return (
            <main className="splash">
                <section className="page-section">
                    <img src={colorthing} alt=""/>
                    <p className="intro-text">Hi, I'm Corey,<br/>check out the stuff I <span onClick={() => this.randomizeWord()} className="random-word">{this.state.word}</span></p>
                </section>
            </main>
        )
    }
}

export default Splash;
