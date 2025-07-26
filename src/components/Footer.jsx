import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <section className="footer bg-dark py-4">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-4 mb-3">
                        <div className="info-box">
                            <h4 className='fw-bold fs-4 mb-3'>🌐 MyInfoMate</h4>
                            <p>MyInfoMate is a multi-utility information platform built using React.js, designed to deliver real-time, valuable data using various public APIs.</p>
                            <p>It provides users with a centralized and seamless experience to explore: Weather updates by Indian cities, Movie search and trending film details, Public holidays in India, and Word meanings via a dynamic dictionary</p>
                            <p>All features are integrated with a responsive design powered by Bootstrap 5, ensuring a smooth experience across all devices.</p>
                        </div>
                    </div>

                    <div className="col-md-4 text-center mb-4">
                        <div className="links-box">
                            <h4 className='fw-bold fs-4 mb-3'>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/weather">Weather</Link>
                                </li>
                                <li>
                                    <Link to="/movies">Movies</Link>
                                </li>
                                <li>
                                    <Link to="/holiday">Holidays</Link>
                                </li>
                                <li>
                                    <Link to="/dictionary">Dictionary</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-box">
                            <h4 className='fw-bold fs-4 mb-3'>Contact</h4>
                            <p className='fs-5'>munafk512@gmail.com</p>
                            <a href="http://www.linkedin.com/in/mohd-munaf-khan-30b195231" className='ms-4 fs-4' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/MohdMunafKhan?tab=repositories" className='ms-4 fs-4' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="end-foot p-3">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-12 text-center">
                        <p className='fs-5'>© 2025 Mohd Munaf Khan. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer;
