import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import A from './assets/Type/A.svg'
import B from './assets/Type/B.svg'
import C from './assets/Type/C.svg'
import D from './assets/Type/D.svg'
import E from './assets/Type/E.svg'
import F from './assets/Type/F.svg'
import G from './assets/Type/G.svg'
import H from './assets/Type/H.svg'
import I from './assets/Type/I.png'
import J from './assets/Type/J.svg'
import K from './assets/Type/K.svg'
import L from './assets/Type/L.svg'
import M from './assets/Type/M.svg'
import N from './assets/Type/N.svg'
import O from './assets/Type/O.svg'
import P from './assets/Type/P.svg'
import Q from './assets/Type/Q.svg'

import aaf from './assets/aaf.png';
import goth from './assets/goth.png';

import whocaresFull from './assets/whocares/whocares-full.svg';
import whocaresSquare from './assets/whocares/whocares-square.png';
import whocaresLines from './assets/whocares/whocares-lines.svg';
import whocaresWave from './assets/whocares/whocares-wave.svg';
import whocaresStacked from './assets/whocares/whocares-stacked.png';
import whocaresWavey from './assets/whocares/whocares-wavey.svg';
import whocaresOutline from './assets/whocares/whocares-outline.svg';
import whocaresOffset from './assets/whocares/whocares-offset.svg';

import benrecHome from './assets/benrec/benrechome.png';
import benrecAbout from './assets/benrec/benrecabout.png';
import benrecArtistPage from './assets/benrec/benrecartistpage.png';
import benrecArtists from './assets/benrec/benrecartists.png';
import benrecPartners from './assets/benrec/benrecpartners.png';
import benrecalbumOld1 from './assets/benrec/benrecalbum-old1.png';
import benrecalbumOld2 from './assets/benrec/benrecalbum-old2.png';
import benrecalbumOld3 from './assets/benrec/benrecalbum-old3.png';
import benrecalbumOld4 from './assets/benrec/benrecalbum-old4.png';
import benrecalbumNew1 from './assets/benrec/benrecalbum-new1.png';
import benrecalbumNew2 from './assets/benrec/benrecalbum-new2.png';
import benrecalbumNew3 from './assets/benrec/benrecalbum-new3.png';
import benrecalbumNew4 from './assets/benrec/benrecalbum-new4.png';

import maxStacked from './assets/max/max-stacked.svg';
import maxMtv from './assets/max/max-mtv.svg';
import maxMtvFade from './assets/max/max-mtv-fade.svg';
import maxWeird from './assets/max/max-weird.svg';
import maxLogoStacked from './assets/max/max-logo-stacked.svg';
import maxMockup1 from './assets/max/max-mockup1.svg';
import maxMockup2 from './assets/max/max-mockup2.svg';
import maxMockup3 from './assets/max/max-mockup3.svg';
import maxMockup4 from './assets/max/max-mockup4.svg';
import maxFinalHoriz from './assets/max/max-final-horiz.svg';
import maxFinalVert from './assets/max/max-final-vert.svg';

import iecHome from './assets/iec/iec-home.png';
import iecRegistration from './assets/iec/iec-registration.png';
import iecProgram from './assets/iec/iec-program.png';

export const thirtysixdaysoftype = (
    <main className="project">
        <span><h1>36 Days Of Type</h1><p className="project-type">digital illustration</p></span>
        <p className="project-desc">36 Days of Type is a yearly open call inviting designers, illustrators and visual artists to share their view on the letters and numbers from our alphabet. I decided to participate in 36 Days of Type in 2016 to flex my creative muscle and attempt some illustration styles outside my comfort zone. Unfortunately, I was not able to finish the entire alphabet, as other responsiblities had come up.</p>
        <section className="type-grid">
            <ul>
                <li><img src={A} alt=""/></li>
                <li><img src={B} alt=""/></li>
                <li><img src={C} alt=""/></li>
                <li><img src={D} alt=""/></li>
                <li><img src={E} alt=""/></li>
                <li><img src={F} alt=""/></li>
                <li><img src={G} alt=""/></li>
                <li><img src={H} alt=""/></li>
                <li><img src={I} alt=""/></li>
                <li><img src={J} alt=""/></li>
                <li><img src={K} alt=""/></li>
                <li><img src={L} alt=""/></li>
                <li><img src={M} alt=""/></li>
                <li><img src={N} alt=""/></li>
                <li><img src={O} alt=""/></li>
                <li><img src={P} alt=""/></li>
                <li><img src={Q} alt=""/></li>
            </ul>
        </section>
        <Link to="/"><p className="back-to-home">Back to Home</p></Link>
    </main>
)
export const beneficencerecords = (
    <main className="project">
        <section className="project-section"></section>
        <span><h1>Beneficence Records</h1><p className="project-type">web design</p></span>
        <p className="project-desc">Beneficence Records is a record label in Muncie, Indiana comprised completely of Ball State University students. Their mission statement is to, "Provide a platform for local artists to support charities and nonprofits through music.<br/><br/>I was a founding member of the record label, and worked in the first semester of it's existence as a web developer, web designer, graphic designer, social media strategist, driver, and project manager. The website and brand of the label have since changed significantly since I worked on it to fit the needs of the label and the requirements of the University.</p>
        <section className="benrec-website">
            <h1>Beneficence Records Website</h1>
            <ul>
                <li><img src={benrecHome} alt=""/></li>
                <li><img src={benrecAbout} alt=""/></li>
                <li><img src={benrecArtists} alt=""/></li>
                <li><img src={benrecArtistPage} alt=""/></li>
                <li><img src={benrecAbout} alt=""/></li>
                <li><img src={benrecPartners} alt=""/></li>
            </ul>
        </section>
        <section className="grid beneficence-records">
            <h1>Beneficence Records Album Art</h1>
            <ul>
                <li><img src={benrecalbumOld1} alt=""/></li>
                <li><img src={benrecalbumOld2} alt=""/></li>
                <li><img src={benrecalbumOld3} alt=""/></li>
                <li><img src={benrecalbumOld4} alt=""/></li>
                <li><img src={benrecalbumNew1} alt=""/></li>
                <li><img src={benrecalbumNew2} alt=""/></li>
                <li><img src={benrecalbumNew3} alt=""/></li>
                <li><img src={benrecalbumNew4} alt=""/></li>
            </ul>
        </section>
        <Link to="/"><p className="back-to-home">Back to Home</p></Link>
    </main>
)
export const showposters = (
    <main className="project">
        <span><h1>Show Posters</h1><p className="project-type">digital illustration</p></span>
        <p className="project-desc">I am very connected to the local music scene in my college town, and attend several concerts, shows, and festivals put on by local bands and organizers. On several occasions I have been asked to design flyers or posters for some of these shows. I have tried to challenge myself by designing each poster in a radically different style.</p>
        <section className="show-posters">
            <img src={aaf} alt=""/>
            <p>This poster was made to promote the American Advertising Federation chapter at Ball State's fundraising concert.</p>
            <img src={goth} alt=""/>
            <p>This poster was created to advertise a house show in Muncie, Indiana that was goth themed. For this poster I wanted to experiment with type that I was uncomfortable with. I also wanted to stick to the goth theme, but not be too obnoxious or over-the-top with it.</p>
        </section>
        <Link to="/"><p className="back-to-home">Back to Home</p></Link>
    </main>
)
export const whocares = (
    <main className="project">
        <span><h1>Who Cares Visual Style</h1><p className="project-type">digital illustration</p></span>
        <p className="project-desc">whocares is an indie rock band from Muncie, Indiana that I play guitar for. I started the band with a few of my close friends and we've played bars and basements across Muncie for the past school year.<br/><br/> As a fun side project, I decided to brand the band and create a visual style for social media, posters, and merchandise. I decided to try to make the visual style for the band as far from the actual sound as possible as a sort of inside joke between the members of the band.</p>
        <section className="grid whocares">
            <ul>
                <li id="whocares-full"><img src={whocaresFull} alt=""/></li>
                <li id="whocares-square"><img src={whocaresSquare} alt=""/></li>
                <li id="whocares-lines"><img src={whocaresLines} alt=""/></li>
                <li id="whocares-stacked"><img src={whocaresStacked} alt=""/></li>
                <li id="whocares-wave"><img src={whocaresWave} alt=""/></li>
                <li id="whocares-wavey"><img src={whocaresWavey} alt=""/></li>
                <li id="whocares-outline"><img src={whocaresOutline} alt=""/></li>
                <li id="whocares-offset"><img src={whocaresOffset} alt=""/></li>
            </ul>
            <Link to="/"><p className="back-to-home">Back to Home</p></Link>
        </section>    
    </main>
)
export const innovativeeducatorsconference = (
    <main className="project">
        <span><h1>Innovative Educators Conference</h1><p className="project-type">web design</p></span>
        <p className="project-desc">The Innovative Educators Conference is a yearly conference held at Ball State University that explores a variety of topics related to community engagement and project-based learning. The conference is for at educators in the state of Indiana and aims to inspire growth in Indiana schools and their communities.<br/><br/>I was part of a team of designers, developers, and content writers that created the website for the upcoming conference in 2019. As part of this team I created high-fidelity mockups and worked with another designer to do HTML and CSS for the site.</p>
        <section className="iec">
            <ul>
                <li><img src={iecHome} alt=""/></li>
                <li><img src={iecRegistration} alt=""/></li>
                <li><img src={iecProgram} alt=""/></li>
            </ul>
        </section>
        <Link to="/"><p className="back-to-home">Back to Home</p></Link>
    </main>
)
export const maxwelldenari = (
    <main className="project">
        <section className="project-section"></section>
        <span><h1>Maxwell Denari</h1><p className="project-type">branding</p></span>
        <p className="project-desc">Maxwell Denari is a freelance writer and photographer who has an immense passion for music and storytelling. Maxwell reached out to me to design a logo for his personal brand so we started working together. Over the course of a few ideas, revisions, and redesigns, we eventually came to a logo that he and I were both excited about.</p>
        <section className="grid maxwell">
            <h1>Ideas</h1>
            <ul>
                <li className="stretch-row-grid"><img src={maxStacked} alt=""/></li>
                <li className="stretch-row-grid"><img src={maxLogoStacked} alt=""/></li>
                <li><img src={maxMtv} alt=""/></li>
                <li><img src={maxMtvFade} alt=""/></li>
                <li className="stretch-column-grid"><img src={maxWeird} alt=""/></li>
            </ul>
            <h1>Final Mockups</h1>
            <ul>
                <li className="stretch-column-grid"><img src={maxMockup1} alt=""/></li>
                <li className="stretch-column-grid"><img src={maxMockup2} alt=""/></li>
                <li className="stretch-column-grid"><img src={maxMockup3} alt=""/></li>
                <li className="stretch-column-grid"><img src={maxMockup4} alt=""/></li>
            </ul>
            <h1>Final Designs</h1>
            <ul>
                <li className="stretch-column-grid"><img id="final-vert" src={maxFinalVert} alt=""/></li>
                <li className="stretch-column-grid"><img src={maxFinalHoriz} alt=""/></li>
            </ul>
        </section>
        <Link to="/"><p className="back-to-home">Back to Home</p></Link>
    </main>
)