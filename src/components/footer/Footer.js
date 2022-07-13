import React from 'react';
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai";

function Footer(props) {
    return (
        <footer>
            <a href="#" className="footer__logo">Tony Habib</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com.com"><FiInstagram /></a>
                <a href="https://linkedin.com"><AiFillLinkedin /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;{new Date().getFullYear().toString()} Tony Habib. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;