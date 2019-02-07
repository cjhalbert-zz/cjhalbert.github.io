import React, { Component } from 'react';
import corey from '/Applications/MAMP/htdocs/portfolio/src/assets/corey.jpg'

class About extends Component {
    render() {
        return (
            <main className="about">
                <h1 className="heading-1">about</h1>
                <section className="about-section">
                    <img src={corey} alt=""/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in, congue sem. Nulla a elit eu quam accumsan ullamcorper ut ut ante. Suspendisse erat justo, suscipit quis massa eu, blandit scelerisque est. Sed iaculis sed libero vitae eleifend. Sed at mi ullamcorper, lacinia lacus sit amet, bibendum eros. Sed nec pulvinar erat. Nullam consequat urna risus, a porttitor massa euismod vel.
                    </p>
                </section>
            </main>
        )
    }
}

export default About;
