import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Footer.css'
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {

    return (
        <>
            <div className="footer-main bg-dark fixed-bottom">
                <div className="container">
                    <div className="row address-main">
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <FaHome size='40px' color='#39065B'/>
                                </div>
                                <div className="add-content">
                                    <h5>Address</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <FaPhone size='40px' color='#39065B'/>
                                </div>
                                <div className="add-content">
                                    <h5>Phone</h5>
                                    <p>  +(91) 000000000 <br />
                                        +(91) 000000000  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <FaEnvelope size='40px' color='#39065B'/>
                                </div>
                                <div className="add-content">
                                    <h5>Email</h5>
                                    <p> nexusacademy@gmail.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">

                        <section className="mb-4">

                            <p className="btn btn-outline-light btn-floating m-1" role="button">
                                <FaInstagram />
                            </p>
                            <p className="btn btn-outline-light btn-floating m-1" role="button">
                                <FaFacebook />
                            </p>
                            <p className="btn btn-outline-light btn-floating m-1" role="button">
                                <FaTwitter />
                            </p>
                            <p className="btn btn-outline-light btn-floating m-1" role="button">
                                <FaDiscord />
                            </p>
                        </section>

                    </div>

                    <div className="text-center p-3">
                        NexusAcademy © 2023 All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer