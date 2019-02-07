import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <main className="work">
                <h1 className="heading-1">work</h1>
                <section className="work-section">
                    <ul className="projects-list">
                        <li>
                            <p>digital illustration</p>
                            <h2>36 DAYS OF TYPE</h2>
                        </li>
                        <li>
                            <p>web design</p>
                            <h2>BENEFICENCE RECORDS</h2>
                        </li>
                        <li>
                            <p>digital illustration</p>
                            <h2>SHOW POSTERS</h2>
                        </li>
                        <li>
                            <p>digital illustration</p>
                            <h2>WHOCARES VISUAL STYLE</h2>
                        </li>
                        <li>
                            <p>web design</p>
                            <h2>INNOVATIVE EDUCATORS CONFERENCE</h2>
                        </li>
                        <li>
                            <p>branding</p>
                            <h2>MAXWELL DENARI</h2>
                        </li>
                        <li>
                            <p>branding</p>
                            <h2>REST IN PEACH</h2>
                        </li>
                    </ul>
                </section>
                <div className="project-preview"></div>
            </main>
        )
    }
}

export default Projects;
