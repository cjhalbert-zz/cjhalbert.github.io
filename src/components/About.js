import React, { Component } from 'react';
import corey from '../assets/corey.jpg'

class About extends Component {
    render() {
        return (
            <main id="about" className="about">
                <h1 className="heading-1">about</h1>
                <section className="about-section">
                    <img src={corey} alt=""/>
                    <p>
                    I am a student at Ball State University currently pursuing a degree in Creation, Analysis, and Implementation of Emerging Media and Technology, a major that I have created. With my job at the Digital Corps, I work with designers, developers, videographers, user experience designers, and communications experts to develop websites, apps, and other creative projects for Ball State. I have a strong passion for music and fashion, and both of these have a huge influence on my design work.
                    </p>
                </section>
            </main>
        )
    }
}

export default About;
