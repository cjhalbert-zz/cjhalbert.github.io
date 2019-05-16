import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

import arrow from '../assets/gimmicks/arrow.svg';

class Gallery extends Component {

    componentDidMount() {
        document.getElementsByTagName('body')[0].classList.remove('body-sidelines');
    }           

    followThing(e) {
        var rect = e.target.getBoundingClientRect()
        var thing = document.getElementById('thing');
        thing.style.top = (e.clientY - rect.top) - 500 + "px";
        thing.style.left = (e.clientX - rect.left) - 500 + "px";
    }

    popUp() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    render() {
        return (
            <div className="gimmicks">
                <div id="thing" className="thing"></div>
                <section className="gimmicks-title" onMouseMove={(evt) => this.followThing(evt)}>
                    <h1 id="gallery-title">GIMMICKS GALLERY</h1>
                    <Link to="/gimmicks">GIMMICKS ARTICLE</Link>
                    <svg class="icon arrow" height="512" viewBox="0 0 1024 1024" version="1.1" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.261 341.088l123.607-123.485 339.206 339.17 339.074-339.17 123.559 123.485-462.63 462.81z" />
                    </svg>
                </section>
                <section className="gimmicks-gallery">
                    <h1>Site Visit Counter</h1>
                    <div className="visit-counter">
                        <p>You are the</p>
                        <p>10th</p>
                        <p>Visitor!</p>
                    </div>
                    <h1>Like Button</h1>
                    <div id="heart" className="heart" onClick={() => document.getElementById('heart').classList.toggle('heart-red')}></div>
                    <h1>Pop-Up</h1>
                    <button className="pop-up-button" onClick={() => document.getElementById('popup').classList.toggle('show')}>>Click Here for Pop-Up</button>
                    <div id="popup" className="pop-up">
                        <div onClick={() => document.getElementById('popup').classList.toggle('show')}>x</div>
                        <p>POP-UP</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Gallery;