import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import A from '/Applications/MAMP/htdocs/portfolio/src/assets/Type/A.svg'
import Brec from '/Applications/MAMP/htdocs/portfolio/src/assets/brec.png'
import goth from '/Applications/MAMP/htdocs/portfolio/src/assets/goth.png';
import whocares from '/Applications/MAMP/htdocs/portfolio/src/assets/whocares.svg';
import iec from '/Applications/MAMP/htdocs/portfolio/src/assets/iec.png';
import rip from '/Applications/MAMP/htdocs/portfolio/src/assets/rip.svg';
import max from '/Applications/MAMP/htdocs/portfolio/src/assets/max.svg';



class Projects extends Component {

    toggleActiveTab(tab) {
        var els = document.querySelectorAll('.active-tab');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('active-tab')
          }
        document.getElementById(tab).classList.toggle('active-tab');
        this.projectPreview();
    }

    projectPreview() {
        if (document.getElementById('tab-1').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=A;
        } else if (document.getElementById('tab-2').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=Brec;
        } else if (document.getElementById('tab-3').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=goth;
        } else if (document.getElementById('tab-4').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=whocares;
        } else if (document.getElementById('tab-5').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=iec;
        } else if (document.getElementById('tab-6').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=max;
        } else if (document.getElementById('tab-7').classList.contains('active-tab')) {
            document.getElementById('project-preview').src=rip;
        }
    }

    componentDidMount() {
        this.projectPreview();
        window.scrollTo(0,0);
    }

    render() {
        return (
            <main id="work" className="work">
                <h1 className="heading-1">work</h1>
                <section className="work-section">
                    <ul id="projects-list" className="projects-list">
                        <li id="tab-1" onClick={() => this.toggleActiveTab('tab-1')}>
                            <span>
                                <p>digital illustration</p>
                                <h2>36 DAYS OF TYPE</h2>
                            </span>
                            <div className="tab-content">
                                <p>36 Days of Type is a yearly open call inviting designers, illustrators and visual artists to share their view on the letters and numbers from our alphabet.</p>
                                <Link to="/Project/thirtysixdaysoftype"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-2" onClick={() => this.toggleActiveTab('tab-2')}>
                            <span>
                                <p>web design</p>
                                <h2>BENEFICENCE RECORDS</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/beneficencerecords"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-3" onClick={() => this.toggleActiveTab('tab-3')}>
                            <span>
                                <p>digital illustration</p>
                                <h2>SHOW POSTERS</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/showposters"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-4" onClick={() => this.toggleActiveTab('tab-4')}>
                            <span>
                                <p>digital illustration</p>
                                <h2>WHOCARES VISUAL STYLE</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/whocares"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-5" onClick={() => this.toggleActiveTab('tab-5')}>
                            <span>
                                <p>web design</p>
                                <h2>INNOVATIVE EDUCATORS CONFERENCE</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/innovativeeducatorsconference"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-6" onClick={() => this.toggleActiveTab('tab-6')}>
                            <span>
                                <p>branding</p>
                                <h2>MAXWELL DENARI</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/maxwelldenari"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-7" onClick={() => this.toggleActiveTab('tab-7')}>
                            <span>
                                <p>branding</p>
                                <h2>REST IN PEACH</h2>
                            </span>
                            <div className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus metus, sollicitudin ac mi sed, aliquet scelerisque magna. Aenean sit amet magna blandit, lobortis mauris in.</p>
                                <Link to="/Project/restinpeach"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="project-preview">
                    <img id="project-preview" src={null} alt=""/>
                </div>
            </main>
        )
    }
}

export default Projects;
