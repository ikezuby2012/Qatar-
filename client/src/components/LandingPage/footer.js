import React from 'react';
import { Link } from "react-router-dom";

import { FaTwitter, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-div">
                <div className="footer-desc_box">
                    <h1 className="header-logo" style={{ color: "white", fontSize: "17px" }}>
                        Qatar
                        <span> trade</span>
                    </h1>
                    <p>
                        we are officially registered certified company that meets an overall standard of quality
                    </p>
                </div>
                <div className="footer-policy footer-box">
                    <h3 className="footer-box-headtd">
                        our services
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    bitcoin investment
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    business consulting
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    crypto exchange
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    bitcoin mining
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    escrow services
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-company footer-box">
                    <h3 className="footer-box-headtd">
                        company
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    about us
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    blog
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    sitemap
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    faq
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-business footer-box">
                    <h3 className="footer-box-headtd">
                        business
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    sell on shopio
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    advertise on shopio
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    media inquiries
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    be an affliate
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    deal of the day
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-subscribe">
                    <h3 className="footer-subscribe-text">
                        we are social
                    </h3>
                    <div className="footer_social-media">
                        <span className="footer_icon-box">
                            <a href="https://twitter.com/" target="blank">
                                <FaTwitter className="footer_icon footer_icon-twitter" />
                            </a>
                        </span>
                        <span className="footer_icon-box">
                            <a href="https://linkedin.com/in/" target="blank">
                                <FaLinkedin className="footer_icon footer_icon-ln" />
                            </a>
                        </span>
                        <span className="footer_icon-box">
                            <a href="https://wa.me/" target="blank">
                                <FaWhatsapp className="footer_icon footer_icon-wa" />
                            </a>
                        </span>
                        <span className="footer_icon-box">
                            <a href="https://instagram.com/" target="blank">
                                <FaInstagram className="footer_icon footer_icon-lnsta" />
                            </a>
                        </span>
                        <span className="footer_icon-box">
                            <a href="https://facebook/" target="blank">
                                <FaFacebook className="footer_icon footer_icon-fb" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>copyright Qatar invest &copy; 2019-{year}</p>
            </div>
        </footer>
    );
}

export default Footer;
