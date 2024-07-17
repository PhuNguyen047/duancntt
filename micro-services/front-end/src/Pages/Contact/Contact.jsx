import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <Navbar/>
            <h1 className='title'>OUR CONTACT</h1>
            <div className="container">
                <div className="row">
                    <div className="info">
                        <h3>Get In Touch</h3>
                        <p className="description">For more information further, please contact us via telephone, office location or email or you can send us message at the right of the page.</p>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <div className="details">
                                <h5>Office</h5>
                                <p>31B Hai Trieu Road, Ben Nghe Ward, District 1</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fa fa-phone-alt"></i>
                            </div>
                            <div className="details">
                                <h5>Mobile</h5>
                                <p>+959986428852</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fa fa-envelope-open"></i>
                            </div>
                            <div className="details">
                                <h5>Email</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                    <iframe
                        className="map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1751222190513!2d106.69063351423219!3d10.77662226225957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0e0cf45cfb%3A0xafea11c8fd6e177f!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                    </div>
                    <div className="form">
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                                <div className="input-group">
                                    <textarea className="form-control" id="message" placeholder="Leave a message here" style={{height: '150px'}}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="submit-button">
                                    <button className="btn" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
