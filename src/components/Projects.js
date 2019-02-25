import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import A from '../assets/Type/A.svg'
import Brec from '../assets/brec.png'
import goth from '../assets/goth.png';
import whocares from '../assets/whocares.svg';
import iec from '../assets/iec.png';
import max from '../assets/max.svg';



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
                            <img className="project-preview-img" src={A} alt=""/>
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
                            <img className="project-preview-img" src={Brec} alt=""/>
                            <span>
                                <p>web design</p>
                                <h2>BENEFICENCE RECORDS</h2>
                            </span>
                            <div className="tab-content">
                                <p>Beneficence Records is a record label in Muncie, Indiana comprised completely of Ball State University students. Their mission statement is to, "Provide a platform for local artists to support charities and nonprofits through music."</p>
                                <Link to="/Project/beneficencerecords"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-3" onClick={() => this.toggleActiveTab('tab-3')}>
                            <img className="project-preview-img" src={goth} alt=""/>
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
                            <img className="project-preview-img" src={whocares} alt=""/>
                            <span>
                                <p>digital illustration</p>
                                <h2>WHOCARES VISUAL STYLE</h2>
                            </span>
                            <div className="tab-content">
                                <p>Whocares is an indie rock band from Muncie, Indiana composed of five Ball State University students, including myself.</p>
                                <Link to="/Project/whocares"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-5" onClick={() => this.toggleActiveTab('tab-5')}>
                            <img className="project-preview-img" src={iec} alt=""/>
                            <span>
                                <p>web design</p>
                                <h2>INNOVATIVE EDUCATORS CONFERENCE</h2>
                            </span>
                            <div className="tab-content">
                                <p>The Innovative Educators Conference is a yearly conference held at Ball State University that explores a variety of topics related to community engagement and project-based learning. The conference is for at educators in the state of Indiana and aims to inspire growth in Indiana schools and their communities.</p>
                                <Link to="/Project/innovativeeducatorsconference"><button className="checkout-button">check it out</button></Link>
                            </div>
                        </li>
                        <li id="tab-6" onClick={() => this.toggleActiveTab('tab-6')}>
                            <img className="project-preview-img" src={max} alt=""/>
                            <span>
                                <p>branding</p>
                                <h2>MAXWELL DENARI</h2>
                            </span>
                            <div className="tab-content">
                                <p>Maxwell Denari is a freelance writer and photographer who has an immense passion for music and storytelling. </p>
                                <Link to="/Project/maxwelldenari"><button className="checkout-button">check it out</button></Link>
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
