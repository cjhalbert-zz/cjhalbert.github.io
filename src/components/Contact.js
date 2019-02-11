import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <main name="contact" className="contact">
                <h1 className="heading-1">contact</h1>
                <section className="contact-section">
                    <div>
                        <p>email address</p>
                        <h2>halbertco.2015@gmail.com</h2>
                    </div>
                    <div>
                        <p>twitter</p>
                        <a href="https://twitter.com/cjhalbert_"><h2>@cjhalbert_</h2></a>
                    </div>
                </section>
                <section className="contact-section">
                    <div>
                        <p>phone number</p>
                        <h2>260.242.3546</h2>
                    </div>
                    <div>
                        <p>instagram</p>
                        <a href="https://www.instagram.com/cjhalbert/?hl=en"><h2>@cjhalbert</h2></a>
                    </div>
                </section>
            </main>
        )
    }
}

export default Contact;
